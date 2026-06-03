import React from 'react';
import { motion } from 'framer-motion';
import {
  CameraIcon,
  LightBulbIcon,
  ComputerDesktopIcon,
  SignalIcon,
  MicrophoneIcon,
  SwatchIcon,
  MapPinIcon,
  CalendarDaysIcon,
  FilmIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const galleryCards = [
  {
    id: 'main-studio',
    label: 'Main Studio',
    desc: 'Full-size production floor with pro lighting rigs and 4K camera setup.',
    icon: FilmIcon,
    gradient: 'from-orange-900/80 via-red-900/60 to-dark',
    accentColor: 'bg-orange-500/10',
    span: 'md:col-span-2 md:row-span-2',
    height: 'h-72 md:h-full',
  },
  {
    id: 'podcast-room',
    label: 'Podcast Room',
    desc: 'Acoustically treated booth with Rode mics & real-time monitoring.',
    icon: MicrophoneIcon,
    gradient: 'from-red-900/80 via-orange-900/60 to-dark',
    accentColor: 'bg-primary/10',
    span: '',
    height: 'h-44',
  },
  {
    id: 'editing-suite',
    label: 'Editing Suite',
    desc: 'High-end workstations running Premiere Pro, After Effects & DaVinci.',
    icon: ComputerDesktopIcon,
    gradient: 'from-orange-900/70 via-red-900/50 to-dark',
    accentColor: 'bg-primary/10',
    span: '',
    height: 'h-44',
  },
  {
    id: 'backdrop-wall',
    label: 'Backdrop Wall',
    desc: 'Themed backdrops — minimal, urban, festive & brand-custom.',
    icon: SwatchIcon,
    gradient: 'from-red-900/70 via-orange-900/50 to-dark',
    accentColor: 'bg-primary/10',
    span: '',
    height: 'h-44',
  },
  {
    id: 'lighting-lab',
    label: 'Lighting Lab',
    desc: 'Softboxes, ring lights & LED panels for every mood and brand.',
    icon: LightBulbIcon,
    gradient: 'from-orange-800/80 via-red-900/60 to-dark',
    accentColor: 'bg-primary/10',
    span: '',
    height: 'h-44',
  },
  {
    id: 'live-desk',
    label: 'Live Desk',
    desc: 'Multi-platform live streaming station ready for events and launches.',
    icon: SignalIcon,
    gradient: 'from-red-800/80 via-orange-900/60 to-dark',
    accentColor: 'bg-primary/10',
    span: '',
    height: 'h-44',
  },
];

const equipment = [
  { label: 'Sony A7 IV', category: 'Camera' },
  { label: 'DJI Ronin 4D', category: 'Gimbal' },
  { label: 'Rode NT1-A', category: 'Mic' },
  { label: 'Aputure 300D', category: 'Light' },
  { label: 'Atomos Shogun', category: 'Monitor' },
  { label: 'Premiere Pro', category: 'Software' },
  { label: 'DaVinci Resolve', category: 'Software' },
  { label: 'After Effects', category: 'Software' },
  { label: 'Focusrite Interface', category: 'Audio' },
  { label: '4K Teleprompter', category: 'Tool' },
];

const GalleryCard: React.FC<{
  card: typeof galleryCards[0];
  index: number;
}> = ({ card, index }) => {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/45 transition-all duration-300 hover:-translate-y-1 ${card.span} ${card.height}`}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />

      {/* Grid dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]" />

      {/* Large bg icon */}
      <Icon className="absolute bottom-4 right-4 w-24 h-24 text-white/5 group-hover:text-white/8 transition-all duration-500" />

      {/* Glow on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 rounded-2xl" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        {/* Top badge */}
        <div className={`self-start flex items-center gap-2 px-3 py-1.5 ${card.accentColor} border border-white/10 rounded-full backdrop-blur-sm`}>
          <Icon className="w-3.5 h-3.5 text-primary" />
          <span className="text-white/80 text-xs font-semibold">{card.label}</span>
        </div>

        {/* Bottom text */}
        <div>
          <h4 className="text-white font-bold text-base mb-1 group-hover:text-primary transition-colors duration-300">
            {card.label}
          </h4>
          <p className="text-white/50 text-xs leading-relaxed max-w-xs">{card.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const StudioShowcase: React.FC = () => {
  return (
    <section id="studio" className="section-padding bg-dark-light">
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
              Our Studio
            </motion.span>
            <h2 className="heading-lg text-white mb-4">Where Content Comes Alive</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
              A world-class production facility in the heart of Mahesana — every tool you need to create content that stops the scroll.
            </p>
            <div className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium">
              <MapPinIcon className="w-4 h-4" />
              S/2 Kanku Complex, Opp. Welcome Party Plot, Modhera Road, Mahesana
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-14 auto-rows-[180px]">
            {galleryCards.map((card, index) => (
              <GalleryCard key={card.id} card={card} index={index} />
            ))}
          </div>

          {/* Equipment strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <CameraIcon className="w-5 h-5 text-primary" />
              <h3 className="text-white font-bold text-lg">Studio Equipment</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {equipment.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3.5 py-2 bg-dark-lighter border border-white/10 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {[
              { value: '7 Days', label: 'Available Weekly' },
              { value: '4K', label: 'Video Quality' },
              { value: '500+', label: 'Shoots Done' },
              { value: '3+', label: 'Years Running' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 bg-dark-lighter rounded-xl border border-primary/15 hover:border-primary/35 transition-all">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center bg-dark-lighter rounded-2xl border border-primary/25 p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#FF572215_0%,transparent_60%)] pointer-events-none" />
            <div className="relative">
              <CameraIcon className="w-12 h-12 text-primary/40 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Book a Studio Session</h3>
              <p className="text-white/55 mb-7 max-w-lg mx-auto">
                Product shoots, podcast recordings, brand films — our studio is available 7 days a week. Bring your vision, we'll handle the rest.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 btn bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 px-8"
                >
                  <CalendarDaysIcon className="w-5 h-5" />
                  Book a Session
                </a>
                <a
                  href="https://wa.me/+919227144346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default StudioShowcase;
