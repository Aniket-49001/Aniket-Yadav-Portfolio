import { useState } from 'react';
import { ExternalLink, Github, Code2, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import SmoothReveal from '../components/SmoothReveal';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Railway Concession Management',
      description:
        'A full-stack web application to digitize railway concession applications for students. Features include authentication, role-based access control, REST APIs, and MongoDB storage to streamline the approval process.',
      image: '/project-railway.jpg',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Aniket-49001/Railway-Concession',
      live: null,
      icon: Database,
      color: '#c7fc77',
    },
    {
      id: 2,
      title: 'YouTube Video Downloader',
      description:
        'A Python-based desktop application to download YouTube videos in multiple formats and resolutions. Features a clean GUI, proper error handling, and progress tracking for seamless user experience.',
      image: '/project-youtube.jpg',
      tech: ['Python', 'Tkinter', 'Pytube', 'FFmpeg'],
      github: 'https://github.com/Aniket-49001/Youtube-Download-App',
      live: null,
      icon: Terminal,
      color: '#a855f7',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark theme, and interactive elements to showcase skills and projects effectively.',
      image: '/project-portfolio.jpg',
      tech: ['React.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
      github: 'https://github.com/Aniket-49001/Aniket-Yadav-Portfolio',
      live: '#',
      icon: Code2,
      color: '#61dafb',
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SmoothReveal width="100%" direction="up">
            <span className="text-lime-400 text-sm tracking-widest uppercase font-medium mb-4 block">
              My work
            </span>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.1}>
            <h2 className="heading-lg text-white mb-4 font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.2}>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of projects that demonstrate my skills in full-stack development, from concept to deployment.
            </p>
          </SmoothReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SmoothReveal
              key={project.id}
              width="100%"
              delay={index * 0.15}
              direction="up"
              className="h-full"
            >
              <motion.div
                className="group relative h-full flex flex-col rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/30 hover:border-lime-400/30 transition-colors duration-300"
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
                <div className="relative h-48 flex-shrink-0 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                  {/* Project Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm z-10"
                    style={{ backgroundColor: `${project.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <project.icon className="w-5 h-5" style={{ color: project.color }} />
                  </motion.div>

                  {/* Hover Overlay Buttons */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors duration-300"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors duration-300"
                        title="View Live Site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-gray-700 text-gray-300 bg-gray-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Glow */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    scaleX: hoveredProject === project.id ? 1 : 0.5
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </SmoothReveal>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <SmoothReveal width="100%" direction="up" delay={0.4}>
            <a
              href="https://github.com/Aniket-49001"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-gray-700 rounded-full text-white hover:border-lime-400 hover:text-lime-400 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" />
                <span>View More on GitHub</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-lime-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </SmoothReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
