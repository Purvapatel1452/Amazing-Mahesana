import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import PodcastStudio from './components/PodcastStudio';
import CityMedia from './components/CityMedia';
import Collaborations from './components/Collaborations';
import Brands from './components/Brands';
import Team from './components/Team';
import StudioShowcase from './components/StudioShowcase';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  ChartBarIcon,
  ChartPieIcon,
  SparklesIcon,
  ChevronDownIcon,
  UserGroupIcon,
  MicrophoneIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

const taglines = [
  {
    text: "From Scratch to Viral – That's Stallion Style.",
    icon: <BoltIcon className="w-6 h-6" />,
  },
  {
    text: "Amazing Mahesana – For the Bold, For the Brands.",
    icon: <SparklesIcon className="w-6 h-6" />,
  },
  {
    text: "Content That Converts, Reports That Matter.",
    icon: <ChartBarIcon className="w-6 h-6" />,
  },
  {
    text: "Why Just Exist? When You Can Dominate!",
    icon: <ChartPieIcon className="w-6 h-6" />,
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dark to-dark-light relative overflow-hidden">
        {/* Geometric pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#FF5722_12%,transparent_12.5%,transparent_87%,#FF5722_87.5%,#FF5722),linear-gradient(150deg,#FF5722_12%,transparent_12.5%,transparent_87%,#FF5722_87.5%,#FF5722),linear-gradient(30deg,#FF5722_12%,transparent_12.5%,transparent_87%,#FF5722_87.5%,#FF5722),linear-gradient(150deg,#FF5722_12%,transparent_12.5%,transparent_87%,#FF5722_87.5%,#FF5722),linear-gradient(60deg,#FF572277_25%,transparent_25.5%,transparent_75%,#FF572277_75%,#FF572277)] bg-[length:80px_140px] opacity-5 pointer-events-none" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 py-28">
          <div className="text-center max-w-4xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-8"
            >
              <SparklesIcon className="w-4 h-4" />
              Mahesana's Premium Digital Media Agency
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-white mb-3 leading-tight"
            >
              Amazing Mahesana
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold gradient-text mb-6"
            >
              Social Media Agency
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/65 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We don't just post — we build brands, drive growth, and create content that stops the scroll and converts the audience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <a
                href="#services"
                className="btn bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 px-8 py-3 text-base"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="btn bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/40 transform hover:scale-105 transition-all duration-300 px-8 py-3 text-base"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Platform Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-14"
            >
              {[
                { name: 'Instagram', dot: 'bg-pink-500' },
                { name: 'Facebook', dot: 'bg-blue-500' },
                { name: 'YouTube', dot: 'bg-red-500' },
                { name: 'LinkedIn', dot: 'bg-blue-400' },
                { name: 'Spotify', dot: 'bg-green-500' },
              ].map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 text-xs font-medium hover:border-white/20 hover:text-white/70 transition-all"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                  {p.name}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                { value: '50+', label: 'Accounts Managed', icon: <ChartBarIcon className="w-5 h-5 text-primary/60" /> },
                { value: '20+', label: 'Brand Collaborations', icon: <BuildingOffice2Icon className="w-5 h-5 text-primary/60" /> },
                { value: '10L+', label: 'Influencer Reach', icon: <UserGroupIcon className="w-5 h-5 text-primary/60" /> },
                { value: '10+', label: 'Podcast Episodes', icon: <MicrophoneIcon className="w-5 h-5 text-primary/60" /> },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-white/50 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDownIcon className="w-6 h-6 text-white/25" />
          </motion.div>
        </motion.div>
      </section>

      <main>
        <About />
        <Services />
        <PodcastStudio />
        <CityMedia />
        <Collaborations />
        <Brands />
        <Team />
        <StudioShowcase />
        <Portfolio />
        <Achievements />
        <Packages />

        {/* Taglines Section */}
        <div className="my-20 relative">
          <div className="absolute inset-0 bg-primary/10 -skew-y-3 transform"></div>
          <div className="relative py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
              {taglines.map((tagline, index) => (
                <motion.div
                  key={tagline.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-8 bg-white rounded-lg shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="p-4 bg-primary rounded-full text-white flex-shrink-0">
                    {tagline.icon}
                  </div>
                  <p className="text-xl font-semibold text-primary">
                    {tagline.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
