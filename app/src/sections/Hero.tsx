import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullName = "Aniket Yadav";
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax background
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 300]);
  const y2 = useTransform(scrollY, [0, 500], [0, -250]);

  // Mouse tilt effect
  const x = useSpring(0, { stiffness: 100, damping: 30 });
  const y = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 20;
    const yPct = (mouseY / height - 0.5) * 20;
    x.set(xPct);
    y.set(-yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Character decode animation
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(_ => {
        if (iteration >= fullName.length) {
          clearInterval(interval);
          return fullName;
        }
        return fullName
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return fullName[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });
      iteration += 1 / 2;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-400/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-lime-400/5 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(199, 252, 119, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(199, 252, 119, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full section-padding py-10 lg:py-20">
        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6">
            <motion.div variants={itemVariants}>
              <span className="text-lime-400 text-sm sm:text-base tracking-widest uppercase font-medium">
                Hello!
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="heading-xl text-white font-bold tracking-tight min-h-[1.2em]"
            >
              <span className="block">I'm</span>
              <span className="block gradient-text mt-2">{displayText}</span>
            </motion.h1>

            <motion.div variants={itemVariants}>
              <span className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light block">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-5 h-5 text-lime-400" />
              <span className="text-gray-400 text-sm sm:text-base">Based in Mumbai, India</span>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-lime-400/50 rounded-full text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end mt-2 lg:mt-10 perspective-1000"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: y,
                rotateY: x,
                transformStyle: "preserve-3d"
              }}
              whileHover={{ scale: 1.05 }}
              className="relative w-64 h-80 sm:w-96 sm:h-[26rem] lg:w-[26rem] lg:h-[32rem]"
            >
              <div className="absolute inset-0 bg-lime-400/20 rounded-2xl blur-3xl animate-pulse -z-10" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                <img
                  src="/hero-portrait.jpg"
                  alt="Aniket Yadav"
                  className="w-full h-full object-cover scale-105"
                  style={{ objectPosition: 'center 45%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ translateZ: 50 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-300">Available for work</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div >

      {/* Bottom Gradient Fade */}
      < div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section >
  );
};

export default Hero;
