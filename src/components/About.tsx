import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  LightBulbIcon,
  TrophyIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const highlights = [
  {
    icon: <MapPinIcon className="w-5 h-5 text-primary" />,
    title: 'Rooted in Mahesana',
    text: "Born and built in Mahesana. We understand the local market, culture, and audience better than anyone.",
  },
  {
    icon: <LightBulbIcon className="w-5 h-5 text-primary" />,
    title: 'Strategy-First Approach',
    text: "Every campaign starts with research. We plan, execute, and optimize — no guesswork, only results.",
  },
  {
    icon: <TrophyIcon className="w-5 h-5 text-primary" />,
    title: 'Proven Track Record',
    text: "50+ clients. 500+ reels. 3+ years of turning local businesses into recognized, scroll-stopping brands.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
            >
              About Us
            </motion.span>
            <h2 className="heading-lg text-white mb-4">
              The Story Behind Amazing Mahesana
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              A premium digital media agency built with one mission — to make every brand in Mahesana impossible to ignore.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left — Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-dark-lighter rounded-2xl border border-primary/20 p-5 md:p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

              {/* Founder identity */}
              <div className="flex items-center gap-5 mb-7">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src="/amazingMehsana.jpg"
                    alt="Nikhil Patel"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.querySelector('svg')!.style.display = 'block';
                    }}
                  />
                  <UserCircleIcon className="w-12 h-12 text-primary/50 hidden" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nikhil Patel</h3>
                  <p className="text-primary text-sm font-medium">Founder & Creative Director</p>
                  <p className="text-white/35 text-xs mt-0.5">Amazing Mahesana</p>
                </div>
              </div>

              {/* Founder quote */}
              <div className="border-l-2 border-primary/50 pl-5 mb-6">
                <p className="text-white/75 italic leading-relaxed text-sm">
                  "I started Amazing Mahesana because brilliant local businesses were invisible online. We built this agency to change that — one viral post at a time."
                </p>
              </div>

              {/* Story */}
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                What started as a small content project in Mahesana has grown into a full-service digital media agency. Nikhil assembled an in-house team of creators, editors, and strategists — all focused on making your brand impossible to ignore online.
              </p>

              {/* Studio callout */}
              <div className="flex items-start gap-3 p-4 bg-dark rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                <MapPinIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">Our Studio & Office</p>
                  <p className="text-white/45 text-xs leading-relaxed">
                    Amazing Mahesana (Krevon Media Agency)<br />
                    Silicon Sponta, 46 Radhanpur Rd,<br />
                    Bansari Twp, Mehsana, Gujarat 384005
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — Vision + Story + Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-white/60 leading-relaxed">
                  To become the most trusted digital media partner for businesses across Gujarat — starting right here in Mahesana. We believe every local business deserves world-class content, strategy, and real results.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">What We Do</h3>
                <p className="text-white/60 leading-relaxed">
                  From social media management and reel production to podcast recording and influencer campaigns — we handle your complete digital presence. Our studio, team, and tools exist for one purpose: making your brand grow.
                </p>
              </div>

              {/* Key highlights */}
              <div className="space-y-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-dark-lighter rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{h.title}</h4>
                      <p className="text-white/45 text-xs leading-relaxed">{h.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="inline-flex items-center gap-2 btn bg-primary text-black font-bold hover:bg-primary/85 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Work With Us
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
