import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
}


const teamMembers: TeamMemberData[] = [
  // Founder always first
  {
    name: 'Nikhil Patel',
    role: 'Founder',
    bio: 'The visionary who built Amazing Mahesana from zero. Strategy, growth, and the relentless drive to make every Mahesana brand impossible to ignore.',
    initials: 'NP',
    gradient: 'from-primary to-red-600',
  },
  // Rest A–Z by first name
  {
    name: 'Boni Patel',
    role: 'Cinematographer & Editor',
    bio: 'Cinematic-quality shots paired with sharp editing. Boni crafts visual narratives that leave a lasting impression on every audience.',
    initials: 'BP',
    gradient: 'from-orange-700 to-primary',
  },
  {
    name: 'Darshan Panchal',
    role: 'Technical Support',
    bio: 'Keeps all systems running at full speed. Darshan ensures the digital infrastructure behind Amazing Mahesana is always reliable and fast.',
    initials: 'DC',
    gradient: 'from-primary to-secondary',
  },
  {
    name: 'Darshan Sathwara',
    role: 'Content Strategist',
    bio: 'The brain behind the content calendar. Researches, plans, and strategizes to ensure every post drives real engagement and measurable growth.',
    initials: 'DS',
    gradient: 'from-red-600 to-orange-500',
  },
  {
    name: 'Daxis Patel',
    role: 'Voice Artist & Script Writer',
    bio: 'The voice and words behind every brand story. Daxis crafts compelling scripts and delivers professional voice-overs that bring every campaign, reel, and narrative to life.',
    initials: 'DX',
    gradient: 'from-secondary to-primary',
  },
  {
    name: 'Dev Patel',
    role: 'Creative Director',
    bio: 'Leads the creative vision for every campaign. From concept to execution, Dev ensures every piece of content reflects Amazing Mahesana\'s premium standard.',
    initials: 'DP',
    gradient: 'from-orange-500 to-primary',
  },
  {
    name: 'Dev Soni',
    role: 'Videographer',
    bio: 'Passionate about visual storytelling. Dev Soni brings energy and creativity to every shoot, turning ideas into compelling content.',
    initials: 'DS',
    gradient: 'from-red-600 to-orange-500',
  },
  {
    name: 'Dhruv Rana',
    role: 'Videographer',
    bio: 'Crafts dynamic video content that stops the scroll. Dhruv\'s sharp eye for detail makes every frame count and every brand shine.',
    initials: 'DR',
    gradient: 'from-orange-600 to-primary',
  },
  {
    name: 'Maan Prajapati',
    role: 'Team Coordinator & Videographer',
    bio: 'Keeps the team in perfect sync while creating powerful visual content. The backbone of daily operations at Amazing Mahesana.',
    initials: 'MP',
    gradient: 'from-red-500 to-orange-600',
  },
  {
    name: 'Nakshatra',
    role: 'Video Editor',
    bio: 'With 4+ years of editing experience, Nakshatra transforms raw footage into polished, high-impact videos — from brand reels to cinematic edits that consistently stop the scroll.',
    initials: 'NK',
    gradient: 'from-red-500 to-primary',
  },
  {
    name: 'Purv Patel',
    role: 'IT Manager',
    bio: 'Manages the tech backbone of Amazing Mahesana. Purv ensures every digital tool, platform, and system runs at peak performance.',
    initials: 'PP',
    gradient: 'from-orange-700 to-primary',
  },
  {
    name: 'Vivek Vyas',
    role: 'Videographer',
    bio: 'Behind the lens for stunning brand visuals. Vivek captures the moments that make brands come alive on screen and on social media.',
    initials: 'VV',
    gradient: 'from-primary to-red-600',
  },
];

const TeamCard: React.FC<{ member: TeamMemberData; index: number }> = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    className="group relative bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/45 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
  >
    <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="p-6 flex flex-col items-center text-center flex-1">

      {/* Avatar */}
      <div className="relative mb-4">
        <div className={`w-18 h-18 w-[72px] h-[72px] rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
          {member.initials}
        </div>
        <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 border-2 border-dark-lighter rounded-full" />
      </div>

      {/* Info */}
      <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3 leading-snug">
        {member.role}
      </p>
      <p className="text-white/50 text-xs leading-relaxed flex-1">
        {member.bio}
      </p>

    </div>
  </motion.div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-dark">
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
              Our Team
            </motion.span>
            <h2 className="heading-lg text-white mb-2">Meet The Team ✨</h2>
            <p className="text-primary/80 font-semibold text-base mb-3">Behind Amazing Mahesana ❤️</p>
            <p className="text-white/55 text-base max-w-xl mx-auto italic">
              "Creative Minds. One Vision. Amazing Mahesana 🚀"
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamMembers.map((member, index) => (
              <TeamCard key={`${member.name}-${index}`} member={member} index={index} />
            ))}
          </div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/35 text-sm">
              Passionate about digital media?{' '}
              <a href="#contact" className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">
                Join our team.
              </a>
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Team;
