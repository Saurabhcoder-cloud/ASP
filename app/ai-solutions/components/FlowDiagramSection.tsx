import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'input' | 'process' | 'decision' | 'output';
}

interface FlowDiagramSectionProps {
  className?: string;
}

const FlowDiagramSection = ({ className = '' }: FlowDiagramSectionProps) => {
  const conversationFlow: FlowStep[] = [
    {
      id: 'initial-contact',
      title: 'Initial Contact',
      description: 'Customer initiates conversation via phone, chat, or web form',
      icon: 'PhoneIcon',
      type: 'input'
    },
    {
      id: 'intent-recognition',
      title: 'Intent Recognition',
      description: 'AI analyzes customer message and identifies primary intent',
      icon: 'MagnifyingGlassIcon',
      type: 'process'
    },
    {
      id: 'context-analysis',
      title: 'Context Analysis',
      description: 'System reviews customer history and current conversation context',
      icon: 'DocumentTextIcon',
      type: 'process'
    },
    {
      id: 'decision-point',
      title: 'Response Strategy',
      description: 'AI determines optimal response path based on intent and context',
      icon: 'ArrowPathIcon',
      type: 'decision'
    },
    {
      id: 'response-generation',
      title: 'Response Generation',
      description: 'AI crafts personalized response using natural language processing',
      icon: 'ChatBubbleLeftRightIcon',
      type: 'process'
    },
    {
      id: 'delivery',
      title: 'Response Delivery',
      description: 'Message delivered to customer with appropriate tone and timing',
      icon: 'PaperAirplaneIcon',
      type: 'output'
    }
  ];

  const decisionPaths = [
    {
      condition: 'Simple Query',
      action: 'Provide direct answer',
      color: 'text-success'
    },
    {
      condition: 'Complex Issue',
      action: 'Gather more information',
      color: 'text-accent'
    },
    {
      condition: 'Escalation Needed',
      action: 'Transfer to human agent',
      color: 'text-error'
    }
  ];

  const getStepColor = (type: string) => {
    switch (type) {
      case 'input': return 'bg-primary/20 border-primary text-primary';
      case 'process': return 'bg-secondary/20 border-secondary text-secondary';
      case 'decision': return 'bg-accent/20 border-accent text-accent';
      case 'output': return 'bg-success/20 border-success text-success';
      default: return 'bg-muted border-border text-foreground';
    }
  };

  return (
    <section className={`py-20 lg:py-32 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism border border-secondary/30 mb-6">
            <Icon name="ArrowPathIcon" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Conversation Intelligence</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            How Our AI Thinks & Responds
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            Explore the sophisticated decision-making process behind every AI interaction. 
            From initial contact to final resolution, see how our agents deliver intelligent, contextual responses.
          </p>
        </div>

        {/* Main Flow Diagram */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {conversationFlow.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < conversationFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent transform -translate-y-1/2 z-0"></div>
                )}
                
                {/* Step Card */}
                <div className={`relative z-10 p-6 rounded-xl border-2 glassmorphism ${getStepColor(step.type)} transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg border-2 ${getStepColor(step.type)}`}>
                      <Icon name={step.icon as any} size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-medium opacity-60">STEP {index + 1}</span>
                      </div>
                      <h3 className="font-heading text-lg text-foreground mb-2">{step.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decision Tree */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-heading text-2xl text-foreground mb-6">Decision Tree Logic</h3>
            <p className="text-text-secondary mb-8">
              Our AI uses advanced decision trees to determine the most appropriate response path 
              for each unique customer interaction, ensuring optimal outcomes every time.
            </p>
            
            <div className="space-y-4">
              {decisionPaths.map((path, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg glassmorphism border border-border/50">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium text-foreground">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-foreground">IF:</span>
                      <span className="text-sm text-text-secondary">{path.condition}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm font-medium text-foreground">THEN:</span>
                      <span className={`text-sm font-medium ${path.color}`}>{path.action}</span>
                    </div>
                  </div>
                  <Icon name="ArrowRightIcon" size={16} className="text-text-secondary" />
                </div>
              ))}
            </div>
          </div>

          <div className="glassmorphism rounded-2xl p-8 border border-border/50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-secondary rounded-lg">
                <Icon name="ChartBarIcon" size={20} className="text-secondary-foreground" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground">Performance Metrics</h4>
                <p className="text-sm text-text-secondary">Real-time decision accuracy</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Intent Recognition</span>
                  <span className="text-sm font-medium text-success">97.8%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '97.8%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Context Retention</span>
                  <span className="text-sm font-medium text-primary">95.2%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '95.2%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Response Relevance</span>
                  <span className="text-sm font-medium text-accent">98.5%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '98.5%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Customer Satisfaction</span>
                  <span className="text-sm font-medium text-secondary">96.7%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '96.7%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">Optimal Performance Range</span>
              </div>
              <p className="text-xs text-text-secondary mt-1">
                All metrics consistently above 95% accuracy threshold
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowDiagramSection;