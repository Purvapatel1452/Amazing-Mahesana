import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  TrophyIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface PricingPlan {
  name: string;
  tagline: string;
  tier: string;
  icon: React.ReactNode;
  features: string[];
  isFeatured?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Prime',
    tier: 'Starter',
    tagline: 'The ideal starting point for businesses stepping into the digital space.',
    icon: <RocketLaunchIcon className="w-5 h-5 text-primary" />,
    features: [
      '8 Reels per month (shoot + editing)',
      'Basic video editing with transitions',
      'Posting support & scheduling',
      'Basic account handling',
      'Daily story support',
      'Monthly performance insights report',
      'Caption & hashtag support',
    ],
  },
  {
    name: 'Signature',
    tier: 'Most Popular',
    tagline: 'Built for brands serious about consistent growth and a stronger digital presence.',
    icon: <SparklesIcon className="w-5 h-5 text-primary" />,
    isFeatured: true,
    features: [
      '15 Reels per month (shoot + editing)',
      'Advanced editing with cinematic effects',
      'Monthly content calendar & strategy',
      'Festival & event themed posts',
      'Professional captions & hashtag strategy',
      'Active audience engagement',
      'Dedicated account handling',
      'Weekly performance & growth report',
    ],
  },
  {
    name: 'Pinnacle',
    tier: 'Premium',
    tagline: 'For ambitious brands ready to lead their market and dominate every platform.',
    icon: <TrophyIcon className="w-5 h-5 text-primary" />,
    features: [
      '20 Reels per month (shoot + editing)',
      'Advanced cinematic reel editing',
      'Viral-focused content strategy',
      'Full account handling & management',
      'Multi-platform support (3+ platforms)',
      'Influencer collaboration support',
      'Brand positioning strategy',
      'Priority support & dedicated manager',
    ],
  },
];

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  const featured = plan.isFeatured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
        featured
          ? 'bg-gradient-to-b from-primary/[0.12] to-dark-lighter border-primary shadow-2xl shadow-primary/20 hover:shadow-primary/30'
          : 'bg-dark-lighter border-primary/20 hover:border-primary/45'
      }`}
    >
      {/* Featured badge — sits at the top edge */}
      {featured && (
        <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none">
          <span className="bg-primary text-black text-xs font-bold tracking-widest uppercase px-6 py-1.5 rounded-b-xl">
            Most Popular
          </span>
        </div>
      )}

      <div className={`flex flex-col flex-1 p-5 md:p-8 ${featured ? 'pt-12 md:pt-14' : ''}`}>

        {/* Tier chip */}
        <span
          className={`self-start px-3 py-1 rounded-full text-xs font-semibold mb-5 border ${
            featured
              ? 'bg-primary/15 text-primary border-primary/35'
              : 'bg-white/5 text-white/45 border-white/10'
          }`}
        >
          {plan.tier}
        </span>

        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              featured ? 'bg-primary/20' : 'bg-primary/10'
            }`}
          >
            {plan.icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{plan.name} Package</h3>
        </div>

        {/* Tagline */}
        <p className="text-white/55 text-sm leading-relaxed mb-6">
          {plan.tagline}
        </p>

        {/* Divider */}
        <div className={`h-px mb-6 ${featured ? 'bg-primary/30' : 'bg-white/10'}`} />

        {/* Feature list */}
        <ul className="space-y-3 flex-1 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <CheckCircleIcon
                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  featured ? 'text-primary' : 'text-primary/55'
                }`}
              />
              <span className="text-white/65">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 group ${
            featured
              ? 'bg-primary text-black font-bold hover:bg-primary/85 shadow-lg shadow-primary/30 hover:shadow-primary/50'
              : 'bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-primary/45'
          }`}
        >
          Get Started
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </motion.div>
  );
};

const Packages: React.FC = () => {
  return (
    <section id="packages" className="section-padding bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
            >
              Pricing
            </motion.span>
            <h2 className="heading-lg text-white mb-4">Choose Your Growth Plan</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Flexible packages designed to match your brand's ambitions — whether you're just starting out or ready to dominate.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/35 text-sm">
              All packages include content strategy consultation.{' '}
              <a
                href="#contact"
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                Need a custom plan? Let's talk.
              </a>
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
