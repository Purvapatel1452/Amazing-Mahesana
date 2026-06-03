import React from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  FilmIcon,
  MicrophoneIcon,
  UserGroupIcon,
  MegaphoneIcon,
  VideoCameraIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

interface ServiceData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<{ service: ServiceData; index: number }> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group relative bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/50 transition-all duration-300 overflow-hidden p-7 flex flex-col"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    <div className="relative flex flex-col h-full">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-white/55 text-sm leading-relaxed flex-1">
        {service.description}
      </p>
      <div className="mt-5 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
        <span>Explore</span>
        <ArrowRightIcon className="w-3.5 h-3.5" />
      </div>
    </div>
  </motion.div>
);

const services: ServiceData[] = [
  {
    title: 'Social Media Management',
    description:
      'Full-scale management of your Instagram, Facebook, and LinkedIn — content calendar, daily posting, community engagement, and growth strategy.',
    icon: <ChartBarIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Reels Creation',
    description:
      'From concept to trending — we shoot, direct, edit, caption, and post reels that stop the scroll and grow your audience organically.',
    icon: <FilmIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Podcast Production',
    description:
      'Studio-quality podcast recording, audio/video editing, show notes, and distribution to Spotify, Apple Podcasts, JioSaavn, and YouTube.',
    icon: <MicrophoneIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Influencer Marketing',
    description:
      'We connect your brand with the right influencers — nano to macro — handling outreach, contracts, briefing, and end-to-end campaign delivery.',
    icon: <UserGroupIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Brand Promotions',
    description:
      'Targeted paid campaigns on Meta and Google, festive promotions, event marketing, and product launch campaigns designed to convert.',
    icon: <MegaphoneIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Video Editing',
    description:
      'Raw footage transformed into polished videos — brand films, product promos, event highlights, testimonials, and high-impact short-form content.',
    icon: <VideoCameraIcon className="w-6 h-6 text-primary" />,
  },
];

const accountFeatures = [
  'Weekly report via Google Sheet / PDF',
  'Follower count & growth chart',
  'Engagement: likes, comments, shares, saves',
  'Story views & poll results',
  'DM & call leads tracking',
  'Monthly ROI & strategy recommendations',
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
            >
              What We Offer
            </motion.span>
            <h2 className="heading-lg text-white mb-4">Our Services</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything your brand needs to dominate the digital space — under one roof, right here in Mahesana.
            </p>
          </div>

          {/* 6 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* Account Handling — Featured Full-Width Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/50 transition-all duration-300 overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* Left side */}
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <ClipboardDocumentListIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold mb-4">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  Fully Managed
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  Account Handling
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  We don't just manage — we own your account's growth. Complete end-to-end handling with a dedicated strategy, real-time support, and transparent reporting at every step of the journey.
                </p>
              </div>

              {/* Right side — feature list */}
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest font-semibold mb-5">
                  What's Included
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {accountFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-white/60 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;
