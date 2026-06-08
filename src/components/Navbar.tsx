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

  const isLightNav = scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const linkClass = isLightNav
    ? "text-cream/80 hover:text-gold"
    : "text-white hover:text-gold-soft";

  const activeLinkClass = isLightNav ? "text-cream" : "text-white";

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
          isLightNav
            ? "bg-noir/95 border-b border-black/10 py-3 md:py-4 shadow-lg"
            : "bg-black/75 border-b border-white/10 py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="Maison Noir — Home">
            <div className="w-7 h-7 sm:w-8 sm:h-8 border border-gold rotate-45 flex items-center justify-center">
              <span className="font-display text-gold -rotate-45 text-base sm:text-lg">M</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-base sm:text-xl tracking-wider transition-colors ${
                  isLightNav ? "text-cream" : "text-white"
                }`}
              >
                Maison Noir
              </span>
              <span className="text-[8px] sm:text-[9px] text-gold tracking-[0.3em] uppercase">
                Est. 2014
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10" role="list">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                role="listitem"
                aria-current={location.pathname === link.path ? "page" : undefined}
                className={`relative text-sm tracking-wider uppercase transition-colors duration-300 group ${linkClass} ${
                  location.pathname === link.path ? activeLinkClass : ""
                }`}
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

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/reservations"
              aria-label="Reserve a table"
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
                isLightNav
                  ? "border-gold text-gold hover:bg-gold hover:text-white"
                  : "border-gold text-gold hover:bg-gold hover:text-white"
              }`}
            >
              <span className="hidden sm:inline">Reserve</span>
              <span className="sm:hidden">Book</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 6h10m0 0L6 1m5 5L6 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                className={`block w-6 h-0.5 ${isLightNav && !mobileOpen ? "bg-cream" : "bg-white"}`}
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className={`block w-6 h-0.5 ${isLightNav && !mobileOpen ? "bg-cream" : "bg-white"}`}
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                className={`block w-6 h-0.5 ${isLightNav && !mobileOpen ? "bg-cream" : "bg-white"}`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[45] w-full max-w-sm bg-stone-900/98 backdrop-blur-xl pt-24 px-6 pb-8 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-1 h-full">
                <div className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        to={link.path}
                        aria-current={location.pathname === link.path ? "page" : undefined}
                        className={`block py-4 font-display text-3xl border-b border-white/10 transition-colors ${
                          location.pathname === link.path
                            ? "text-gold"
                            : "text-white hover:text-gold-soft"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <Link
                  to="/reservations"
                  className="mt-6 flex items-center justify-center gap-3 px-8 py-4 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-soft transition-colors"
                >
                  Reserve a Table
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
