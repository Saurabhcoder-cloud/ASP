'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const primaryNavItems = [
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActivePath = (href: string) => {
    if (href === '/homepage') return pathname === '/' || pathname === '/homepage';
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism shadow-orbital' : 'bg-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">

          {/* ------------------- LOGO ------------------- */}
          <Link
            href="/homepage"
            onClick={closeMenu}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="ASP Global Logo"
              width={300}
              height={300}
              priority
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* ------------------- DESKTOP NAV ------------------- */}
          <nav className="hidden lg:flex items-center space-x-8">
            {primaryNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.href)
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-foreground'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActivePath(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* ------------------- CTA + MOBILE BUTTON ------------------- */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground font-heading text-sm rounded-lg hover:opacity-90 transition-all duration-300"
            >
              <span>Get Started</span>
              <Icon name="ArrowRightIcon" size={16} className="ml-2" />
            </Link>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-text-secondary hover:text-foreground transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
            </button>
          </div>

        </div>

        {/* ------------------- MOBILE MENU ------------------- */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glassmorphism border-t border-border/50 px-4 py-6 space-y-4">
            {primaryNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                  isActivePath(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-foreground hover:bg-surface/50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-border/30">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground font-heading text-base rounded-lg transition-all duration-300"
              >
                <span>Get Started</span>
                <Icon name="ArrowRightIcon" size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
