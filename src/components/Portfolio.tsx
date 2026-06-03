import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTrendingUpIcon, TrophyIcon } from '@heroicons/react/24/outline';
import type { PortfolioItem, Achievement } from '../types';

const achievements: Achievement[] = [
  { value: '50+', label: 'Clients Served' },
  { value: '500+', label: 'Reels Produced' },
  { value: '10L+', label: 'Combined Reach' },
  { value: '3+', label: 'Years of Excellence' },
];

const portfolioItems: PortfolioItem[] = [
  {
    clientName: 'E-Commerce Fashion Brand',
    category: 'Fashion & Lifestyle',
    challenge: 'Low engagement and minimal online sales through social channels.',
    result: '300% increase in engagement and 150% growth in sales over 6 months.',
    metrics: [
      { label: 'Engagement Growth', value: '300%' },
      { label: 'Sales Growth', value: '150%' },
      { label: 'Timeline', value: '6 months' },
    ],
  },
  {
    clientName: 'Local Restaurant Chain',
    category: 'F&B',
    challenge: 'Build online presence and increase footfall from local audience.',
    result: 'Gained 10K+ followers and boosted foot traffic by 40% in 3 months.',
    metrics: [
      { label: 'New Followers', value: '10K+' },
      { label: 'Foot Traffic', value: '+40%' },
      { label: 'Timeline', value: '3 months' },
    ],
  },
  {
    clientName: 'Real Estate Developer',
    category: 'Real Estate',
    challenge: 'Generate qualified property inquiries through Instagram & Facebook ad campaigns.',
    result: '5X return on ad spend with 200+ genuine leads in the first month.',
    metrics: [
      { label: 'Ad ROAS', value: '5X' },
      { label: 'Qualified Leads', value: '200+' },
      { label: 'Timeline', value: '1 month' },
    ],
  },
  {
    clientName: 'Education Institute',
    category: 'Education',
    challenge: 'Increase new-batch admissions through targeted social media promotions.',
    result: 'Exceeded admission target by 30% with a focused 45-day content + ads strategy.',
    metrics: [
      { label: 'Admission Target', value: '+30%' },
      { label: 'Content Pieces', value: '90+' },
      { label: 'Timeline', value: '45 days' },
    ],
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section-padding bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <TrophyIcon className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg text-center text-white">Portfolio & Achievements</h2>
          </div>
          <p className="text-xl text-center text-white/60 mb-12 max-w-3xl mx-auto">
            Real results for real businesses. Here's what happens when strategy meets creativity.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-dark-lighter rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="text-4xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-white font-semibold">{achievement.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.clientName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-lighter rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <ArrowTrendingUpIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {item.clientName}
                    </h3>
                    <span className="text-primary/70 text-sm font-medium">{item.category}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-5">
                  <div>
                    <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Challenge</h4>
                    <p className="text-white/70 text-sm">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Result</h4>
                    <p className="text-white/70 text-sm">{item.result}</p>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {item.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="px-3 py-2 bg-primary/10 rounded-lg border border-primary/20 text-center"
                    >
                      <div className="text-primary font-bold text-sm">{metric.value}</div>
                      <div className="text-white/50 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
