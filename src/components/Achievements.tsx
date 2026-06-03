import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  TrophyIcon,
  StarIcon,
  ChartBarIcon,
  UserGroupIcon,
  FilmIcon,
  HeartIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

/* ── Stat card data ── */
const stats = [
  { value: 50,   suffix: '+',  label: 'Clients Served',         icon: UserGroupIcon,       gradient: 'from-primary to-red-600'      },
  { value: 500,  suffix: '+',  label: 'Reels Created',           icon: FilmIcon,            gradient: 'from-orange-600 to-primary'   },
  { value: 10,   suffix: 'L+', label: 'Influencer Reach',        icon: ChartBarIcon,        gradient: 'from-red-600 to-orange-500'   },
  { value: 3,    suffix: '+',  label: 'Years of Excellence',     icon: CalendarDaysIcon,    gradient: 'from-primary to-secondary'    },
  { value: 100,  suffix: '%',  label: 'Client Retention',        icon: HeartIcon,           gradient: 'from-orange-700 to-primary'   },
  { value: 20,   suffix: '+',  label: 'Brand Collaborations',    icon: BuildingOffice2Icon, gradient: 'from-red-500 to-orange-600'   },
];

/* ── Timeline milestones ── */
const milestones = [
  { year: '2021', title: 'Agency Founded',          desc: 'Amazing Mahesana launched with a vision to transform local brands digitally.' },
  { year: '2022', title: 'Studio Launched',          desc: 'Opened Mahesana\'s first professional content studio on Modhera Road.'      },
  { year: '2023', title: '500+ Reels Milestone',    desc: 'Crossed 500 reels produced for clients across multiple industries.'          },
  { year: '2024', title: '50+ Clients Strong',      desc: 'Grew to serve 50+ active brands from F&B to Real Estate and beyond.'        },
  { year: '2025', title: 'Premium Agency Status',   desc: 'Recognized as Mahesana\'s go-to premium digital media agency.'              },
];

/* ── Testimonials ── */
const testimonials = [
  {
    quote: 'Amazing Mahesana transformed our social media completely. Our sales grew 40% in just three months of working together.',
    name: 'Jignesh Patel',
    role: 'Owner, Mahesana Sweets',
    initials: 'JP',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    quote: 'Their reels are genuinely viral-worthy. The team understands what content works and delivers it consistently every week.',
    name: 'Dhara Shah',
    role: 'Founder, Fashion Hub',
    initials: 'DS',
    gradient: 'from-orange-600 to-primary',
  },
  {
    quote: 'The podcast studio is world-class. We recorded and launched in one day — the quality blew our audience away.',
    name: 'Manish Desai',
    role: 'MD, TechMart Mahesana',
    initials: 'MD',
    gradient: 'from-red-600 to-orange-500',
  },
];

/* ── Stat Card ── */
const StatCard: React.FC<{ stat: typeof stats[0]; index: number; active: boolean }> = ({ stat, index, active }) => {
  const count = useCountUp(stat.value, 1600, active);
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/45 hover:-translate-y-1 transition-all duration-300 p-6 overflow-hidden text-center"
    >
      {/* Glow orb */}
      <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />

      <div className="relative">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="text-4xl font-bold text-primary mb-1">
          {count}{stat.suffix}
        </div>
        <p className="text-white/55 text-sm font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
};

/* ── Main Component ── */
const Achievements: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section-padding bg-dark">
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
              Achievements
            </motion.span>
            <h2 className="heading-lg text-white mb-4">Numbers That Speak</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Three years of relentless execution — here's what we've built for Mahesana's brands.
            </p>
          </div>

          {/* Animated Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} active={isInView} />
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-10 justify-center">
              <TrophyIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-white">Our Journey</h3>
            </div>

            {/* Desktop timeline */}
            <div className="hidden md:block relative">
              {/* Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="grid grid-cols-5 gap-4 relative">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center group"
                  >
                    {/* Dot */}
                    <div className="flex justify-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-dark border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-all duration-300 z-10 relative">
                        <span className="text-primary text-xs font-bold group-hover:text-white transition-colors duration-300">{i + 1}</span>
                      </div>
                    </div>
                    <p className="text-primary font-bold text-sm mb-1">{m.year}</p>
                    <h4 className="text-white font-semibold text-sm mb-2">{m.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden space-y-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 bg-dark-lighter rounded-xl p-4 border border-primary/15"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{m.year.slice(2)}</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-sm">{m.year} — {m.title}</p>
                    <p className="text-white/50 text-xs mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <StarIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-white">What Clients Say</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-primary fill-primary" style={{ fill: 'currentColor' }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
