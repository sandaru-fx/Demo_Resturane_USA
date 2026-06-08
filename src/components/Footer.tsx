import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-12" aria-label="Site footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border border-gold rotate-45 flex items-center justify-center">
                <span className="font-display text-gold -rotate-45 text-lg">M</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl text-white tracking-wider">Maison Noir</span>
                <span className="text-[9px] text-gold tracking-[0.3em] uppercase">Est. 2014</span>
              </div>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed mb-6">
              An intimate fine dining experience celebrating French-inspired contemporary cuisine
              in the heart of Manhattan. Where every plate tells a story.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`Follow us on ${social}`}
                  className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Menu", path: "/menu" },
                { label: "About", path: "/about" },
                { label: "Events", path: "/events" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
                { label: "Reservations", path: "/reservations" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-white mb-6">Visit</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>147 West 24th Street</li>
              <li>New York, NY 10011</li>
              <li className="pt-2">
                <a href="tel:+12125550147" className="hover:text-gold transition-colors">
                  +1 (212) 555-0147
                </a>
              </li>
              <li>
                <a href="mailto:hello@maisonnoir.com" className="hover:text-gold transition-colors">
                  hello@maisonnoir.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 tracking-wider">
            © {new Date().getFullYear()} Maison Noir. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40 tracking-wider">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
