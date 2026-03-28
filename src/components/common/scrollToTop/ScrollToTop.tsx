import { useState, useEffect, useMemo } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = document.documentElement.scrollTop;
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

          setScrollProgress(scrolled);
          setShowButton(winScroll > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const strokeOffset = useMemo(
    () => 264 - (264 * scrollProgress) / 100,
    [scrollProgress]
  );

  return (
    <button
      type="button"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center bg-primary text-on_primary rounded-full transition-all duration-300 hover:bg-primary_fixed ${
        showButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-on_primary/20"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
        />
        <circle
          className="text-on_primary transition-all duration-300"
          strokeWidth="8"
          strokeDasharray={264}
          strokeDashoffset={strokeOffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
        />
      </svg>

      <svg
        className="relative h-5 w-5 text-on_primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
