import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/menu", label: "Menu" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentY > 100) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "bg-noir/95 border-b border-white/10 py-4 shadow-lg"
            : "bg-black/60 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border border-gold rotate-45 flex items-center justify-center">
              <span className="font-display text-gold -rotate-45 text-lg">M</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl text-cream tracking-wider">Maison Noir</span>
              <span className="text-[9px] text-gold tracking-[0.3em] uppercase">Est. 2014</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm tracking-wider uppercase text-cream hover:text-gold-soft transition-colors duration-300 group"
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                  />
                )}
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/reservations"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-noir transition-all duration-500"
            >
              Reserve
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10m0 0L6 1m5 5L6 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                className="block w-6 h-px bg-cream"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="block w-6 h-px bg-cream"
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                className="block w-6 h-px bg-cream"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-noir pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8 items-center justify-center min-h-[60vh]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="font-display text-4xl text-cream hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/reservations"
                className="mt-8 px-8 py-4 border border-gold text-gold text-sm tracking-[0.2em] uppercase"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
