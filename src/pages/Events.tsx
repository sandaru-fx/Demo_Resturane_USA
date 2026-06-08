import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import { images } from "../data/images";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div className="bg-noir pt-24 sm:pt-32">
      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-40">
          <OptimizedImage
            src={images.privateDining}
            alt="Private dining room setup"
            className="w-full h-full object-cover"
            priority
            width={2000}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/80 to-stone-900" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="divider-ornament mb-8"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gold-soft">Private Events</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Unforgettable <span className="italic gold-gradient">Gatherings</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 text-lg max-w-2xl mx-auto mb-10"
          >
            From intimate celebrations to corporate dinners, Maison Noir provides the perfect backdrop for your most important moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-soft transition-colors"
            >
              Inquire Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* EVENT SPACES */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-noir">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gold mb-4 block">Our Spaces</span>
            <h2 className="font-display text-4xl md:text-5xl text-cream">Tailored for You</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] overflow-hidden shadow-2xl"
            >
              <OptimizedImage
                src={images.privateDining}
                alt="The Wine Room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
                width={800}
                height={600}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-display text-3xl md:text-4xl text-cream mb-6">The Wine Room</h3>
              <p className="text-cream/60 leading-relaxed mb-8">
                Surrounded by our curated wine collection, this intimate space offers complete privacy for up to 14 guests. Perfect for executive dinners, milestone birthdays, or exclusive tasting menu experiences.
              </p>
              <ul className="space-y-4 text-cream/80 text-sm tracking-wide">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Capacity: Up to 14 seated
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Dedicated sommelier service
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Custom tasting menus available
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:[direction:rtl]">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] overflow-hidden shadow-2xl lg:[direction:ltr]"
            >
              <OptimizedImage
                src={images.diningRoom}
                alt="Main Dining Room Buyout"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
                width={800}
                height={600}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:[direction:ltr]"
            >
              <h3 className="font-display text-3xl md:text-4xl text-cream mb-6">Full Restaurant Buyout</h3>
              <p className="text-cream/60 leading-relaxed mb-8">
                For grand celebrations, Maison Noir can be exclusively yours. Enjoy the full attention of our culinary and service teams for an unforgettable evening tailored entirely to your vision.
              </p>
              <ul className="space-y-4 text-cream/80 text-sm tracking-wide">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Capacity: Up to 80 seated, 120 reception
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Customized floor plans
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Bespoke menu and beverage pairing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-stone-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-gold mb-4 block">Event Services</span>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-12">Curated Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-black/20 border border-white/5">
              <h4 className="font-display text-xl text-gold mb-4">Custom Menus</h4>
              <p className="text-cream/60 text-sm leading-relaxed">
                Work directly with Chef Laurent to create a personalized menu that perfectly suits your occasion and guests' preferences.
              </p>
            </div>
            <div className="p-8 bg-black/20 border border-white/5">
              <h4 className="font-display text-xl text-gold mb-4">Wine Pairing</h4>
              <p className="text-cream/60 text-sm leading-relaxed">
                Our Head Sommelier will curate exceptional wine pairings from our extensive cellar to complement your selected menu.
              </p>
            </div>
            <div className="p-8 bg-black/20 border border-white/5">
              <h4 className="font-display text-xl text-gold mb-4">Event Planning</h4>
              <p className="text-cream/60 text-sm leading-relaxed">
                Our dedicated events team handles every detail, from floral arrangements to custom printed menus, ensuring a flawless experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}