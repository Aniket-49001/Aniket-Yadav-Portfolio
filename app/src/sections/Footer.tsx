import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'yadavaniket7663@gmail.com';
    const subject = 'Portfolio Contact';
    const body = 'Hi Aniket,\n\nI found your portfolio and would like to connect about...\n\nBest regards';

    // Create Gmail compose URL to open in browser
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');

    // Show success message
    toast.success('Opening Gmail in new tab...');
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aniket-49001', label: 'GitHub', isEmail: false },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/-aniketyadav', label: 'LinkedIn', isEmail: false },
    { icon: Mail, href: '#', label: 'Email', isEmail: true },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full py-12 bg-black border-t border-gray-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo */}
            <div className="text-center md:text-left">
              <span className="text-2xl font-bold text-white">
                Aniket<span className="text-lime-400">.</span>
              </span>
              <p className="text-gray-500 text-sm mt-2">
                Full Stack Developer
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-lime-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={social.isEmail ? handleEmailClick : undefined}
                  target={social.isEmail ? undefined : "_blank"}
                  rel={social.isEmail ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 rounded-lg border border-gray-800 bg-gray-900/30 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} Aniket Yadav. All rights reserved.
            </p>

            {/* Made With Love */}
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
