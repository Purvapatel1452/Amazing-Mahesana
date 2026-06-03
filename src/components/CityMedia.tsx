import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  NewspaperIcon,
  MegaphoneIcon,
  BuildingStorefrontIcon,
  CameraIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { value: '50+', label: 'Local Businesses', sub: 'Managed accounts' },
  { value: '1L+', label: 'Monthly Reach', sub: 'Across platforms' },
  { value: '3+', label: 'Years Active', sub: 'In Mahesana' },
  { value: '10+', label: 'City Campaigns', sub: 'Festive & events' },
];

const coverageAreas = [
  { name: 'Retail & Shops', icon: <BuildingStorefrontIcon className="w-6 h-6 text-primary" /> },
  { name: 'Restaurants & Cafes', icon: <HeartIcon className="w-6 h-6 text-primary" /> },
  { name: 'Events & Festivals', icon: <CameraIcon className="w-6 h-6 text-primary" /> },
  { name: 'City News & Updates', icon: <NewspaperIcon className="w-6 h-6 text-primary" /> },
  { name: 'Local Promotions', icon: <MegaphoneIcon className="w-6 h-6 text-primary" /> },
  { name: 'Community Stories', icon: <MapPinIcon className="w-6 h-6 text-primary" /> },
];

const CityMedia: React.FC = () => {
  return (
    <section id="city-media" className="section-padding bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <MapPinIcon className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg text-center text-white">City Media Page</h2>
          </div>
          <p className="text-xl text-center text-white/60 mb-12 max-w-3xl mx-auto">
            Amazing Mahesana is the digital voice of Mahesana — amplifying local businesses, events, and the community's story.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-dark-lighter rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-white/50 text-sm">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-dark-lighter rounded-2xl border border-primary/20 p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">What We Cover in Mahesana</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {coverageAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-3 p-4 bg-dark rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
                >
                  {area.icon}
                  <span className="text-white/80 font-medium">{area.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CityMedia;
