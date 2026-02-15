import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import SmoothReveal from '../components/SmoothReveal';

const Skills = () => {
  const mernCardRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // MERN Card Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMernMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mernCardRef.current) return;
    const rect = mernCardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5);
    const yPct = (mouseY / height - 0.5);
    x.set(xPct);
    y.set(yPct);
  };

  const handleMernMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: '☕', color: '#f89820' },
        { name: 'Python', icon: '🐍', color: '#3776ab' },
        { name: 'C', icon: '🔧', color: '#a8b9cc' },
        { name: 'C++', icon: '⚡', color: '#00599c' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: '🌐', color: '#e34f26' },
        { name: 'CSS3', icon: '🎨', color: '#1572b6' },
        { name: 'JavaScript', icon: '⚡', color: '#f7df1e' },
        { name: 'React.js', icon: '⚛️', color: '#61dafb' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🟢', color: '#339933' },
        { name: 'Express.js', icon: '🚀', color: '#000000' },
        { name: 'REST APIs', icon: '🔌', color: '#c7fc77' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: '🍃', color: '#47a248' },
        { name: 'MySQL', icon: '🐬', color: '#4479a1' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: '📦', color: '#f05032' },
        { name: 'GitHub', icon: '🐙', color: '#ffffff' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-24 sm:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/5 rounded-full blur-3xl"
        />

        {/* Floating Orbs */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 left-20 w-4 h-4 bg-lime-400/30 rounded-full blur-sm" />
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute top-40 right-32 w-3 h-3 bg-lime-400/20 rounded-full blur-sm" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }} className="absolute bottom-32 left-1/4 w-5 h-5 bg-lime-400/25 rounded-full blur-sm" />
      </div>

      <div className="relative z-10 w-full section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SmoothReveal width="100%" direction="up">
            <span className="text-lime-400 text-sm tracking-widest uppercase font-medium mb-4 block">
              What I know
            </span>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.1}>
            <h2 className="heading-lg text-white mb-4 font-bold">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.2}>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive set of technologies I've mastered to build modern, scalable, and efficient web applications.
            </p>
          </SmoothReveal>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SmoothReveal
              key={category.title}
              width="100%"
              delay={categoryIndex * 0.1}
              direction="up"
              className="h-full"
            >
              <motion.div
                className="group relative p-6 h-full rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden"
                whileHover={{ y: -5, borderColor: 'rgba(199, 252, 119, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Title */}
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-400 rounded-full" />
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="relative px-4 py-2 rounded-xl border border-gray-700 bg-black/50 cursor-default overflow-hidden"
                      whileHover={{ scale: 1.05, rotate: 2, borderColor: 'rgba(199, 252, 119, 0.5)' }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Animated Background Pattern */}
                      <AnimatePresence>
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0"
                            style={{
                              background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`
                            }}
                          />
                        )}
                      </AnimatePresence>

                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className={`text-sm font-medium transition-colors ${hoveredSkill === skill.name ? 'text-white' : 'text-gray-400'}`}>
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lime-400/10 to-transparent transform rotate-45 translate-x-16 -translate-y-16" />
                </div>
              </motion.div>
            </SmoothReveal>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <SmoothReveal width="100%" direction="up" delay={0.4}>
          <motion.div
            ref={mernCardRef}
            onMouseMove={handleMernMouseMove}
            onMouseLeave={handleMernMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            className="mt-12 p-8 rounded-2xl border border-lime-400/20 bg-gradient-to-r from-lime-400/5 to-transparent relative group overflow-hidden perspective-1000"
          >
            <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="group/text">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {['M', 'E', 'R', 'N'].map((char, i) => (
                    <span key={i} className="inline-block transition-transform duration-300 hover:scale-125 hover:text-lime-400 cursor-default">
                      {char}
                    </span>
                  ))}
                  <span className="ml-2 text-lime-400">Stack Specialist</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  Building full-stack applications with MongoDB, Express.js, React.js, and Node.js
                </p>
              </div>

              <div className="flex items-center gap-4">
                {['M', 'E', 'R', 'N'].map((letter, index) => (
                  <motion.div
                    key={letter}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 font-bold text-lg relative overflow-hidden"
                  >
                    <span className="relative z-10">{letter}</span>
                    <div className="absolute inset-0 bg-lime-400/20 opacity-0 hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Particles */}
            <motion.div animate={{ x: [0, 10, 0], y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-4 left-4 w-2 h-2 bg-lime-400/30 rounded-full blur-[1px]" />
            <motion.div animate={{ x: [0, -10, 0], y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-4 right-4 w-3 h-3 bg-lime-400/20 rounded-full blur-[1px]" />
          </motion.div>
        </SmoothReveal>
      </div>
    </section>
  );
};

export default Skills;
