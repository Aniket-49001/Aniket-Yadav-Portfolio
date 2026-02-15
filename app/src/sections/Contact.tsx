import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import SmoothReveal from '../components/SmoothReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'yadavaniket7663@gmail.com';
    const subject = 'Portfolio Contact';
    const body = 'Hi Aniket,\n\nI found your portfolio and would like to connect about...\n\nBest regards';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
    toast.success('Opening Gmail in new tab...');
    setTimeout(() => {
      navigator.clipboard.writeText(email).then(() => {
        toast.success('Email address copied to clipboard!');
      }).catch(() => {
        console.error('Failed to copy email');
      });
    }, 500);
  };



  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const email = 'yadavaniket7663@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      toast.success('Email copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy email');
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xwvnvwgy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      toast.error('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'yadavaniket7663@gmail.com', href: 'mailto:yadavaniket7663@gmail.com', isEmail: true, isPhone: false },
    { icon: Phone, label: 'Phone', value: '+91 8421778740', href: 'tel:+918421778740', isEmail: false, isPhone: true },
    { icon: MapPin, label: 'Location', value: 'Mumbai, India', href: null, isEmail: false, isPhone: false },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Aniket-49001' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/-aniketyadav' },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/3 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute top-1/3 right-0 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(199, 252, 119, 0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(199, 252, 119, 0.5) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full section-padding max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SmoothReveal width="100%" direction="up">
            <span className="text-lime-400 text-sm tracking-widest uppercase font-medium mb-4 block">
              Get in touch
            </span>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.1}>
            <h2 className="heading-lg text-white mb-4 font-bold">
              Let's <span className="gradient-text">Work Together</span>
            </h2>
          </SmoothReveal>

          <SmoothReveal width="100%" direction="up" delay={0.2}>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's talk about it. I'm always open to discussing new opportunities and interesting ideas.
            </p>
          </SmoothReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2">
            <SmoothReveal width="100%" direction="right" delay={0.3} className="h-full">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Contact Information
                  </h3>

                  {/* Contact Details */}
                  <div className="space-y-4 mb-8">
                    {contactInfo.map((item, index) => {
                      const commonProps = {
                        key: item.label,
                        className: `flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-lime-400/30 hover:bg-gray-900/50 group transition-all ${item.href ? 'cursor-pointer' : ''}`,
                        initial: { x: -20, opacity: 0 },
                        whileInView: { x: 0, opacity: 1 },
                        transition: { delay: 0.4 + index * 0.1 },
                        viewport: { once: true },
                        whileHover: { x: 5 }
                      };

                      const content = (
                        <>
                          <div className="w-12 h-12 rounded-lg bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition-colors">
                            <item.icon className="w-5 h-5 text-lime-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                              {item.label}
                            </div>
                            <div className={`text-sm text-white font-medium ${item.href ? 'group-hover:text-lime-400 transition-colors' : ''}`}>
                              {item.value}
                            </div>
                          </div>
                          {item.isEmail && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                copyEmailToClipboard(e);
                              }}
                              className="p-2 text-gray-500 hover:text-lime-400 transition-colors z-10"
                              title="Copy email to clipboard"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          )}
                        </>
                      );

                      if (item.href) {
                        return (
                          <motion.a
                            {...commonProps}
                            href={item.href}
                            onClick={item.isEmail ? undefined : undefined} // Let default handle tel/mailto
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
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl border border-gray-800 bg-gray-900/30 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-colors group"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </SmoothReveal>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <SmoothReveal width="100%" direction="left" delay={0.4}>
              <div className="bg-gray-900/10 p-6 sm:p-8 rounded-2xl border border-gray-800/50">
                {/* Success Message */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mb-6 overflow-hidden"
                    >
                      <div className="p-4 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-lime-400" />
                        <div>
                          <p className="text-lime-400 font-medium">Message Sent!</p>
                          <p className="text-gray-400 text-sm">I'll get back to you soon.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        disabled={isSubmitting}
                        className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors disabled:opacity-50"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-lime-400"
                        initial={{ width: "0%" }}
                        whileFocus={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                        disabled={isSubmitting}
                        className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Your Message"
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-8 py-4 font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed ${isSuccess
                      ? 'bg-lime-400 text-black'
                      : 'bg-lime-400 text-black hover:bg-lime-300'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Alternative Contact */}
                <p className="mt-6 text-gray-500 text-sm">
                  Prefer email?{' '}
                  <button
                    onClick={handleDirectEmail}
                    className="text-lime-400 hover:underline transition-colors"
                  >
                    Send me a direct email
                  </button>
                </p>
              </div>
            </SmoothReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
