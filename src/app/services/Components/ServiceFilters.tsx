'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface ServiceFiltersProps {
  categories: FilterOption[];
  priceRanges: FilterOption[];
  integrations: FilterOption[];
  selectedCategory: string;
  selectedPriceRange: string;
  selectedIntegration: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
  onIntegrationChange: (integration: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export default function ServiceFilters({
  categories,
  priceRanges,
  integrations,
  selectedCategory,
  selectedPriceRange,
  selectedIntegration,
  searchQuery,
  onCategoryChange,
  onPriceRangeChange,
  onIntegrationChange,
  onSearchChange,
  onClearFilters
}: ServiceFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const hasActiveFilters = selectedCategory || selectedPriceRange || selectedIntegration || searchQuery;

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon name="MagnifyingGlassIcon" size={20} className="text-text-secondary" />
        </div>
        <input
          type="text"
          placeholder="Search services, features, or integrations..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-surface/50 border border-border/30 rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            <Icon name="XMarkIcon" size={16} className="text-text-secondary hover:text-foreground transition-colors duration-300" />
          </button>
        )}
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="flex items-center justify-between w-full px-4 py-3 bg-surface/50 border border-border/30 rounded-lg text-foreground"
        >
          <span className="flex items-center">
            <Icon name="FunnelIcon" size={20} className="mr-2" />
            Filters
            {hasActiveFilters && (
              <span className="ml-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                Active
              </span>
            )}
          </span>
          <Icon 
            name={isFiltersOpen ? "ChevronUpIcon" : "ChevronDownIcon"} 
            size={20} 
            className="transition-transform duration-300" 
          />
        </button>
      </div>

      {/* Filter Options */}
      <div className={`space-y-6 ${isFiltersOpen ? 'block' : 'hidden lg:block'}`}>
        {/* Category Filter */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-foreground">Category</h3>
            {selectedCategory && (
              <button
                onClick={() => onCategoryChange('')}
                className="text-xs text-primary hover:text-primary/80 transition-colors duration-300"
              >
                Clear
              </button>
            )}
          </div>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id === selectedCategory ? '' : category.id)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-foreground hover:bg-surface/30'
                }`}
              >
                <span>{category.label}</span>
                <span className="text-xs opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-foreground">Price Range</h3>
            {selectedPriceRange && (
              <button
                onClick={() => onPriceRangeChange('')}
                className="text-xs text-primary hover:text-primary/80 transition-colors duration-300"
              >
                Clear
              </button>
            )}
          </div>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => onPriceRangeChange(range.id === selectedPriceRange ? '' : range.id)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  selectedPriceRange === range.id
                    ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-foreground hover:bg-surface/30'
                }`}
              >
                <span>{range.label}</span>
                <span className="text-xs opacity-60">({range.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Integration Filter */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-foreground">Integrations</h3>
            {selectedIntegration && (
              <button
                onClick={() => onIntegrationChange('')}
                className="text-xs text-primary hover:text-primary/80 transition-colors duration-300"
              >
                Clear
              </button>
            )}
          </div>
          <div className="space-y-2">
            {integrations.map((integration) => (
              <button
                key={integration.id}
                onClick={() => onIntegrationChange(integration.id === selectedIntegration ? '' : integration.id)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  selectedIntegration === integration.id
                    ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-foreground hover:bg-surface/30'
                }`}
              >
                <span>{integration.label}</span>
                <span className="text-xs opacity-60">({integration.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Clear All Filters */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="w-full px-4 py-2 bg-surface/50 hover:bg-surface/70 text-text-secondary hover:text-foreground rounded-lg transition-all duration-300 border border-border/30"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}