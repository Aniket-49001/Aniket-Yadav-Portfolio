import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only when scrolled down
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Reload the page and go to top
    window.scrollTo(0, 0);
    window.location.href = '#home';
    window.location.reload();
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-4 z-50 p-3 bg-lime-400 hover:bg-lime-500 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      title="Scroll to top"
    >
      <ArrowUp
        size={18}
        className="animate-bounce"
      />
    </button>
  );
};

export default ScrollToTop;
