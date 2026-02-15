import { GraduationCap, School, BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import SmoothReveal from '../components/SmoothReveal';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Smt. Chandibai Himathmal Mansukhani College',
      year: '2023 - 2026',
      status: 'Pursuing',
      grade: 'CGPI: 8.00',
      icon: GraduationCap,
      description: 'Currently pursuing B.Sc IT with focus on software development, database management, and web technologies.',
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (12th)',
      institution: 'Ramchand Kimatram Talreja College',
      year: '2021 - 2023',
      status: 'Completed',
      grade: 'Percentage: 58.50%',
      icon: School,
      description: 'Completed HSC with Science stream, building foundation in Mathematics and Computer Science.',
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (10th)',
      institution: 'Welfare English High School',
      year: '2021',
      status: 'Completed',
      grade: 'Percentage: 63.60%',
      icon: BookOpen,
      description: 'Completed SSC with strong academic performance and early interest in technology.',
    },
  ];

  return (
    <section
      id="education"
      className="relative w-full py-24 sm:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 w-full section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SmoothReveal width="100%" direction="up">
            <span className="text-lime-400 text-sm tracking-widest uppercase font-medium mb-4 block">
              Academic background
            </span>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.1}>
            <h2 className="heading-lg text-white mb-4 font-bold">
              My <span className="gradient-text">Education</span>
            </h2>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.2}>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic journey that has shaped my technical knowledge and professional skills.
            </p>
          </SmoothReveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-lime-400 via-lime-400 to-transparent"
            />
          </div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`w-10 h-10 rounded-full border-4 border-black flex items-center justify-center shadow-[0_0_10px_rgba(199,252,119,0.3)] ${item.status === 'Pursuing' ? 'bg-lime-400' : 'bg-gray-800'
                      }`}
                  >
                    <item.icon className={`w-4 h-4 ${item.status === 'Pursuing' ? 'text-black' : 'text-gray-400'}`} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto text-left' : 'md:ml-auto text-left md:text-right'
                    }`}
                >
                  <SmoothReveal
                    width="100%"
                    direction={index % 2 === 0 ? 'left' : 'right'}
                    delay={index * 0.1}
                  >
                    <div className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/30 transition-all duration-500 hover:border-lime-400/30 hover:bg-gray-900/50 hover:-translate-y-1">
                      {/* Status Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${item.status === 'Pursuing'
                            ? 'bg-lime-400/10 text-lime-400 border border-lime-400/30'
                            : 'bg-gray-800 text-gray-400 border border-gray-700'
                          }`}
                        style={{ marginLeft: index % 2 !== 0 && window.innerWidth >= 768 ? 'auto' : '0' }}
                      >
                        <Award className="w-3 h-3" />
                        {item.status}
                      </div>

                      {/* Year */}
                      <div className="text-lime-400 text-sm font-medium mb-2">
                        {item.year}
                      </div>

                      {/* Degree */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className={`flex items-center gap-2 text-gray-400 text-sm mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                        <item.icon className="w-4 h-4" />
                        {item.institution}
                      </div>

                      {/* Grade */}
                      <div className="inline-block px-3 py-1 rounded-lg bg-gray-800 text-gray-300 text-sm font-medium mb-4">
                        {item.grade}
                      </div>

                      {/* Description */}
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400/5 to-transparent" />
                      </div>
                    </div>
                  </SmoothReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
