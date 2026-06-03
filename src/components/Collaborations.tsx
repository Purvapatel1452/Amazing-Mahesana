import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon } from '@heroicons/react/24/outline';

interface InfluencerData {
  handle: string;
  name: string;
  niche: string;
  nicheClass: string;
  followers: string;
  engagement: string;
  initials: string;
  gradient: string;
  posts: string[];
  collabType: string;
  collabClass: string;
}

const influencers: InfluencerData[] = [
  {
    handle: '@priya.eats',
    name: 'Priya Sharma',
    niche: 'Food & Lifestyle',
    nicheClass: 'bg-primary/15 text-primary border-primary/30',
    followers: '45.2K',
    engagement: '8.2%',
    initials: 'PS',
    gradient: 'from-primary to-red-600',
    posts: ['bg-primary/40', 'bg-red-500/30', 'bg-orange-500/30'],
    collabType: 'Brand Review',
    collabClass: 'bg-primary/10 text-primary border-primary/25',
  },
  {
    handle: '@fashionbymiti',
    name: 'Miti Patel',
    niche: 'Fashion & Style',
    nicheClass: 'bg-primary/15 text-primary border-primary/30',
    followers: '28.6K',
    engagement: '11.5%',
    initials: 'MP',
    gradient: 'from-orange-600 to-primary',
    posts: ['bg-orange-600/40', 'bg-primary/35', 'bg-red-500/30'],
    collabType: 'Product Showcase',
    collabClass: 'bg-primary/10 text-primary border-primary/25',
  },
  {
    handle: '@mahesana.diaries',
    name: 'Vivek Prajapati',
    niche: 'City & Travel',
    nicheClass: 'bg-primary/15 text-primary border-primary/30',
    followers: '62.1K',
    engagement: '6.8%',
    initials: 'VP',
    gradient: 'from-red-600 to-orange-500',
    posts: ['bg-red-600/40', 'bg-orange-500/35', 'bg-primary/30'],
    collabType: 'City Campaign',
    collabClass: 'bg-primary/10 text-primary border-primary/25',
  },
  {
    handle: '@fitwith.akash',
    name: 'Akash Desai',
    niche: 'Fitness & Health',
    nicheClass: 'bg-primary/15 text-primary border-primary/30',
    followers: '18.4K',
    engagement: '14.3%',
    initials: 'AD',
    gradient: 'from-primary to-secondary',
    posts: ['bg-primary/40', 'bg-secondary/35', 'bg-orange-400/30'],
    collabType: 'Brand Ambassador',
    collabClass: 'bg-primary/10 text-primary border-primary/25',
  },
  {
    handle: '@localvibes.gj',
    name: 'Riya Modi',
    niche: 'Lifestyle & Culture',
    nicheClass: 'bg-primary/15 text-primary border-primary/30',
    followers: '52.8K',
    engagement: '7.4%',
    initials: 'RM',
    gradient: 'from-orange-700 to-primary',
    posts: ['bg-orange-700/40', 'bg-primary/35', 'bg-red-600/30'],
    collabType: 'Event Promotion',
    collabClass: 'bg-primary/10 text-primary border-primary/25',
  },
  {
    handle: '@techraj.official',
    name: 'Raj Solanki',
    niche: 'Tech & Business',
    nicheClass: 'bg-primary/15 text-primary border-primary/30',
    followers: '35.3K',
    engagement: '9.1%',
    initials: 'RS',
    gradient: 'from-red-500 to-orange-600',
    posts: ['bg-red-500/40', 'bg-orange-600/35', 'bg-primary/30'],
    collabType: 'Sponsored Content',
    collabClass: 'bg-primary/10 text-primary border-primary/25',
  },
];

const InfluencerCard: React.FC<{ influencer: InfluencerData; index: number }> = ({ influencer, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/45 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
  >
    {/* Mini post grid — Instagram-style */}
    <div className="grid grid-cols-3 gap-0.5">
      {influencer.posts.map((color, i) => (
        <div
          key={i}
          className={`h-20 ${color} group-hover:brightness-110 transition-all duration-300 flex items-center justify-center`}
        >
          {i === 1 && (
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${influencer.gradient} flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-dark-lighter`}>
              {influencer.initials}
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="p-5 flex flex-col flex-1">
      {/* Handle + Name */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-white font-bold text-sm">{influencer.name}</p>
          <p className="text-white/40 text-xs">{influencer.handle}</p>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${influencer.nicheClass}`}>
          {influencer.niche}
        </span>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-4 py-3 border-y border-white/8 mb-3">
        <div className="flex-1 text-center">
          <p className="text-white font-bold text-base">{influencer.followers}</p>
          <p className="text-white/40 text-xs">Followers</p>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="flex-1 text-center">
          <p className="text-primary font-bold text-base">{influencer.engagement}</p>
          <p className="text-white/40 text-xs">Engagement</p>
        </div>
      </div>

      {/* Collab type */}
      <div className="mt-auto">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${influencer.collabClass}`}>
          {influencer.collabType}
        </span>
      </div>
    </div>
  </motion.div>
);

const Collaborations: React.FC = () => {
  return (
    <section id="collaborations" className="section-padding bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
            >
              Influencer Network
            </motion.span>
            <h2 className="heading-lg text-white mb-4">Influencer Collaborations</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We connect brands with the right voices — authentic influencers who turn followers into customers.
            </p>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {[
              { value: '50+', label: 'Influencers Partnered' },
              { value: '10L+', label: 'Combined Reach' },
              { value: '8%+', label: 'Avg. Engagement' },
              { value: '20+', label: 'Campaigns Delivered' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center p-4 bg-dark-lighter rounded-xl border border-primary/15">
                <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Influencer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {influencers.map((influencer, index) => (
              <InfluencerCard key={influencer.handle} influencer={influencer} index={index} />
            ))}
          </div>

          {/* Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-lighter rounded-2xl border border-primary/20 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <UserGroupIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-white">We Work With Every Tier</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { tier: 'Nano', range: '1K – 10K', desc: 'Hyper-local, high trust' },
                { tier: 'Micro', range: '10K – 100K', desc: 'Niche authority' },
                { tier: 'Macro', range: '100K – 1M', desc: 'Regional impact' },
                { tier: 'Celebrity', range: '1M+', desc: 'Maximum visibility' },
              ].map((t, i) => (
                <div key={t.tier} className="p-4 bg-dark rounded-xl border border-primary/10 hover:border-primary/30 transition-all text-center">
                  <p className="text-primary font-bold text-sm mb-1">{t.tier}</p>
                  <p className="text-white text-xs font-semibold mb-1">{t.range}</p>
                  <p className="text-white/40 text-xs">{t.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Collaborations;
