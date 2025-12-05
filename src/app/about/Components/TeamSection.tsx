import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  alt: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface TeamSectionProps {
  className?: string;
}

const TeamSection = ({ className = '' }: TeamSectionProps) => {
  const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    department: "Leadership",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_129b1ff05-1762273604073.png",
    alt: "Professional Asian woman with shoulder-length black hair in navy blazer smiling confidently",
    bio: "Visionary leader with 15+ years driving digital transformation for Fortune 500 companies. Former McKinsey consultant specializing in technology strategy and organizational change.",
    expertise: ["Digital Strategy", "Business Transformation", "Executive Leadership", "Growth Strategy"],
    achievements: ["Forbes 40 Under 40", "MIT Technology Review Innovator", "TEDx Speaker"],
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah@aspglobal.com"
    }
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    department: "Technology",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a05eed4a-1762274040165.png",
    alt: "Hispanic man with beard wearing black shirt and glasses in modern office setting",
    bio: "AI and machine learning expert with deep expertise in enterprise architecture. Previously led engineering teams at Google and Microsoft, specializing in scalable AI solutions.",
    expertise: ["AI/ML Engineering", "Enterprise Architecture", "Cloud Infrastructure", "Technical Leadership"],
    achievements: ["Google Cloud Architect Certified", "Published AI Research", "Patent Holder"],
    social: {
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      email: "marcus@aspglobal.com"
    }
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Growth Marketing",
    department: "Marketing",
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    alt: "Professional woman with blonde hair in white blazer standing in bright office environment",
    bio: "Growth marketing strategist with proven track record of scaling B2B SaaS companies from startup to IPO. Expert in data-driven marketing and conversion optimization.",
    expertise: ["Growth Marketing", "Data Analytics", "Conversion Optimization", "B2B Strategy"],
    achievements: ["Marketing Leader of the Year", "Growth Hacker Award", "Industry Speaker"],
    social: {
      linkedin: "https://linkedin.com/in/emilywatson",
      twitter: "https://twitter.com/emilywatson",
      email: "emily@aspglobal.com"
    }
  },
  {
    id: 4,
    name: "David Kim",
    role: "Senior Solutions Architect",
    department: "Technology",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fbddf848-1762275096037.png",
    alt: "Asian man in dark suit jacket with professional smile in corporate office setting",
    bio: "Enterprise solutions expert with 12+ years designing and implementing complex digital ecosystems. Specializes in AI integration and business process automation.",
    expertise: ["Solution Architecture", "AI Integration", "Process Automation", "Enterprise Systems"],
    achievements: ["AWS Solutions Architect Pro", "Microsoft MVP", "Technical Thought Leader"],
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david@aspglobal.com"
    }
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Director of Client Success",
    department: "Operations",
    image: "https://images.unsplash.com/photo-1519234302787-f17b7656c7b3",
    alt: "Professional woman with curly brown hair wearing burgundy blazer with warm smile",
    bio: "Client relationship expert focused on ensuring measurable ROI and long-term partnership success. Former management consultant with expertise in change management.",
    expertise: ["Client Relations", "Project Management", "Change Management", "Business Analysis"],
    achievements: ["PMP Certified", "Client Success Leader", "Industry Recognition"],
    social: {
      linkedin: "https://linkedin.com/in/lisathompson",
      email: "lisa@aspglobal.com"
    }
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Lead AI Developer",
    department: "Technology",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15d988139-1762273750464.png",
    alt: "Young professional man with short brown hair in casual button-up shirt with confident expression",
    bio: "AI specialist focused on developing intelligent automation solutions and conversational AI systems. PhD in Computer Science with research in natural language processing.",
    expertise: ["AI Development", "NLP", "Chatbot Development", "Machine Learning"],
    achievements: ["PhD Computer Science", "AI Research Publications", "Innovation Award"],
    social: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      email: "alex@aspglobal.com"
    }
  }];


  const departments = ["All", "Leadership", "Technology", "Marketing", "Operations"];

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Meet Our
            <span className="block text-primary">Expert Team</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our diverse team of visionary leaders, technical experts, and strategic thinkers brings together decades of experience in digital transformation, AI innovation, and business growth acceleration.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) =>
          <div key={member.id} className="glassmorphism rounded-2xl p-6 orbital-card group">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden constellation-glow">
                  <AppImage
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-text-secondary mb-4">{member.bio}</p>
              </div>

              {/* Expertise Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.slice(0, 3).map((skill) =>
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">

                      {skill}
                    </span>
                )}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {member.achievements.slice(0, 2).map((achievement) =>
                <li key={achievement} className="flex items-center text-xs text-text-secondary">
                      <Icon name="CheckIcon" size={12} className="text-primary mr-2 flex-shrink-0" />
                      {achievement}
                    </li>
                )}
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {member.social.linkedin &&
              <a
                href={member.social.linkedin}
                className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                aria-label={`${member.name} LinkedIn profile`}>

                    <Icon name="UserIcon" size={16} className="text-text-secondary hover:text-primary" />
                  </a>
              }
                {member.social.twitter &&
              <a
                href={member.social.twitter}
                className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                aria-label={`${member.name} Twitter profile`}>

                    <Icon name="ChatBubbleLeftIcon" size={16} className="text-text-secondary hover:text-primary" />
                  </a>
              }
                {member.social.email &&
              <a
                href={`mailto:${member.social.email}`}
                className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                aria-label={`Email ${member.name}`}>

                    <Icon name="EnvelopeIcon" size={16} className="text-text-secondary hover:text-primary" />
                  </a>
              }
              </div>
            </div>
          )}
        </div>

        {/* Team Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-display text-3xl text-primary mb-2">15+</div>
            <div className="text-text-secondary">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-primary mb-2">6</div>
            <div className="text-text-secondary">Industry Experts</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-primary mb-2">25+</div>
            <div className="text-text-secondary">Certifications</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-primary mb-2">500+</div>
            <div className="text-text-secondary">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TeamSection;