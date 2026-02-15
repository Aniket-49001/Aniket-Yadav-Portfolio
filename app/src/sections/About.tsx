import { User, Calendar, GraduationCap, Phone, Mail, MapPin, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import SmoothReveal from '../components/SmoothReveal';

const About = () => {

  const calculateAge = () => {
    const birthDate = new Date('2006-07-21');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const personalDetails = [
    { icon: User, label: 'Name', value: 'Aniket Yadav' },
    { icon: Calendar, label: 'Age', value: `${calculateAge()} years` },
    { icon: GraduationCap, label: 'Education', value: 'B.Sc IT (Pursuing)' },
    { icon: Phone, label: 'Phone', value: '+91 8421778740' },
    { icon: Mail, label: 'Email', value: 'yadavaniket7663@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Mumbai, India' },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime-400/5 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <SmoothReveal width="100%" direction="up">
            <span className="text-lime-400 text-sm tracking-widest uppercase font-medium mb-4 block">
              Get to know me
            </span>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.1}>
            <h2 className="heading-lg text-white">
              About <span className="gradient-text">Me</span>
            </h2>
          </SmoothReveal>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Bio */}
          <SmoothReveal width="100%" direction="right" delay={0.2} className="h-full">
            <div className="flex flex-col h-full">
              <motion.div
                className="relative p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-transparent overflow-hidden group flex-grow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400/20 via-transparent to-lime-400/20" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-lime-400 rounded-full" />
                    Career Objective
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-justify">
                    I am a <span className="text-lime-400 font-medium">motivated and detail-oriented Full Stack Developer</span> with a strong foundation in modern web technologies and practical experience building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy transforming ideas into real, user-friendly software solutions and continuously improving my problem-solving and development skills.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4 text-justify">
                    During my academic journey in <span className="text-white font-medium">Bachelor of Science in Information Technology</span>, I have developed hands-on projects including a Railway Concession Management System and a Python-based YouTube Video Downloader. These projects strengthened my understanding of authentication systems, REST APIs, database management, and clean code practices.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-justify">
                    I am passionate about learning new technologies, writing efficient code, and collaborating in team environments. I am currently seeking an <span className="text-white font-medium">entry-level software development opportunity</span> where I can contribute, grow as a developer, and build impactful digital products.
                  </p>
                </div>

                {/* Decorative Corner */}
                <svg className="absolute top-0 right-0 w-20 h-20 text-lime-400/20" fill="none" viewBox="0 0 100 100">
                  <path d="M0 0 L100 0 L100 100" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: '5+', label: 'Projects' },
                  { value: '10+', label: 'Technologies' },
                  { value: '2+', label: 'Years Learning' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-lime-400/30 hover:bg-gray-900/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-lime-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SmoothReveal>

          {/* Right Column - Personal Details */}
          <SmoothReveal width="100%" direction="left" delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-4 inline-block">
                Personal Details
              </h3>

              <div className="space-y-4">
                {personalDetails.map((detail, index) => {
                  const isLink = detail.label === 'Phone' || detail.label === 'Email';
                  const href = detail.label === 'Phone'
                    ? `tel:${detail.value.replace(/\s/g, '')}`
                    : detail.label === 'Email'
                      ? `mailto:${detail.value}`
                      : undefined;

                  const commonProps = {
                    key: detail.label,
                    className: `flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-lime-400/30 hover:bg-gray-900/50 group transition-all ${isLink ? 'cursor-pointer' : ''}`,
                    initial: { opacity: 0, x: 20 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { delay: 0.5 + index * 0.1 },
                    viewport: { once: true },
                    whileHover: { x: 10 }
                  };

                  const content = (
                    <>
                      <div className="w-12 h-12 rounded-lg bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition-colors">
                        <detail.icon className="w-5 h-5 text-lime-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                          {detail.label}
                        </div>
                        <div className={`text-sm sm:text-base text-white font-medium break-all ${isLink ? 'group-hover:text-lime-400 transition-colors' : ''}`}>
                          {detail.value}
                        </div>
                      </div>
                    </>
                  );

                  if (isLink) {
                    return (
                      <motion.a
                        {...commonProps}
                        href={href}
                      >
                        {content}
                      </motion.a>
                    );
                  }

                  return (
                    <motion.div {...commonProps}>
                      {content}
                    </motion.div>
                  );
                })}
              </div>

              {/* Download CV Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => window.open('/Aniket yadav Resume.pdf', '_blank')}
                  className="w-full py-4 px-6 bg-lime-400 text-black font-medium rounded-xl hover:bg-lime-300 transition-colors flex items-center justify-center gap-3 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download Resume
                    <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </div>
          </SmoothReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
