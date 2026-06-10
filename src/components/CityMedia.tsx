import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  NewspaperIcon,
  MegaphoneIcon,
  BuildingStorefrontIcon,
  CameraIcon,
  HeartIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { value: '31K+', label: 'Instagram Followers', sub: '@amazing.mahesana' },
  { value: '853+', label: 'Posts Published', sub: 'Reels, photos & more' },
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
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2.5 px-5 py-2.5 bg-primary/10 border border-primary/40 rounded-full shadow-lg shadow-primary/10">
              <TrophyIcon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-primary font-bold text-sm tracking-wide">
                Gujarat's 1st Award-Winning Informative City Page
              </span>
            </div>
          </motion.div>

          <div className="flex items-center justify-center mb-4">
            <MapPinIcon className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg text-center text-white">City Media Page</h2>
          </div>
          <p className="text-xl text-center text-white/60 mb-4 max-w-3xl mx-auto">
            Amazing Mahesana is the digital voice of Mahesana — amplifying local businesses, events, and the community's story.
          </p>
          <div className="flex justify-center mb-12">
            <a
              href="https://www.instagram.com/amazing.mahesana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/15 hover:border-pink-400/40 hover:text-pink-400 hover:bg-pink-400/5 rounded-xl text-white/50 text-sm font-medium transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @amazing.mahesana
            </a>
          </div>

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
