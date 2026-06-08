import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import { images } from "../data/images";



const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function Home() {
  return (
    <div className="bg-noir">
      {/* HERO SECTION - light & elegant */}
      <section className="relative min-h-[100dvh] flex items-center bg-noir grain-overlay overflow-hidden">
        <div className="absolute top-20 right-0 w-1/2 h-full bg-noir-soft/60 hidden lg:block" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-16 sm:pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="inline-block mb-6"
              >
                <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold border border-gold/30 bg-white/60 px-3 sm:px-4 py-2">
                  Michelin Recommended · Manhattan
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.95] mb-6 max-w-xl"
              >
                A Culinary <span className="italic gold-gradient">Journey</span>
                <br />
                Worth Savoring
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-cream/70 text-base sm:text-lg md:text-xl max-w-lg mb-8 sm:mb-10 mx-auto lg:mx-0"
              >
                French-inspired contemporary cuisine, reimagined nightly by Chef Antoine Laurent
                using ingredients sourced from the world's finest artisans.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/reservations"
                  className="group relative z-[1] isolate overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-white text-sm tracking-[0.12em] sm:tracking-[0.2em] hover:bg-gold-soft transition-colors duration-500 shadow-md"
                >
                  <span className="relative">RESERVE A TABLE</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform shrink-0" aria-hidden="true">
                    <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
                <Link
                  to="/menu"
                  className="relative z-[2] isolate overflow-hidden inline-flex items-center justify-center px-8 py-4 border border-gold/40 text-cream text-sm tracking-[0.12em] sm:tracking-[0.2em] hover:border-gold hover:text-gold transition-colors duration-500 bg-noir"
                >
                  <span className="relative">VIEW MENU</span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] max-w-lg mx-auto lg:max-w-none overflow-hidden shadow-2xl border border-black/5 bg-white">
                <OptimizedImage
                  src={images.gourmetPlating}
                  alt="Elegant gourmet dish at Maison Noir"
                  className="w-full h-full object-cover"
                  priority
                  width={900}
                  height={1125}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gold/30 hidden sm:block" aria-hidden="true" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold/10 hidden sm:block" aria-hidden="true" />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-10 bg-gold/40"
          />
        </div>
      </section>

      {/* INTRO SECTION - light */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-noir">
        <div className="max-w-4xl mx-auto text-center">
          <div className="divider-ornament mb-8">
            <span className="text-xs tracking-[0.4em] uppercase">Welcome</span>
          </div>
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8"
          >
            Where every plate is a <span className="italic gold-gradient">love letter</span> to the art of dining.
          </motion.h2>
          <motion.p
            {...fadeUp}
            className="text-cream/60 text-lg leading-relaxed"
          >
            Founded in 2014 in the heart of Chelsea, Maison Noir has become a sanctuary for those
            who believe that a meal should be more than sustenance — it should be an experience
            that lingers long after the last bite.
          </motion.p>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-noir-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="divider-ornament mb-8">
              <span className="text-xs tracking-[0.4em] uppercase">From the Kitchen</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Signature <span className="italic gold-gradient">Creations</span>
            </h2>
            <p className="text-cream/60 max-w-xl mx-auto">
              A selection of our most celebrated dishes, each crafted with meticulous attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dry-Aged Ribeye",
                desc: "45-day aged prime beef, bone marrow butter, charred shallot",
                img: images.dryAgedRibeye,
                price: "$68",
              },
              {
                name: "Hand-Rolled Tagliatelle",
                desc: "Truffle cream, wild mushroom ragù, 24-month parmigiano",
                img: images.handRolledPasta,
                price: "$38",
              },
              {
                name: "Valrhona Soufflé",
                desc: "Single-origin dark chocolate, crème anglaise, gold leaf",
                img: images.chocolateSouffle,
                price: "$18",
              },
            ].map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group relative overflow-hidden bg-noir-card shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <OptimizedImage
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                    width={800}
                    height={1000}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-2xl text-white">{dish.name}</h3>
                    <span className="text-gold-soft font-display text-xl">{dish.price}</span>
                  </div>
                  <p className="text-white/70 text-sm">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-500"
            >
              Explore Full Menu
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CHEF SECTION */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-noir">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] overflow-hidden shadow-2xl"
          >
            <OptimizedImage
              src={images.chefAntoine}
              alt="Chef Antoine Laurent"
              className="w-full h-full object-cover"
              width={900}
              height={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="divider-ornament mb-6 justify-start">
              <span className="text-xs tracking-[0.4em] uppercase">Meet the Chef</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
              Chef Antoine <span className="italic gold-gradient">Laurent</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-6">
              With over two decades honing his craft across the finest kitchens of Paris, Lyon,
              and New York, Chef Laurent brings a philosophy rooted in respect for ingredients
              and a relentless pursuit of perfection.
            </p>
            <p className="text-cream/60 leading-relaxed mb-10">
              His approach blends classical French technique with contemporary innovation,
              resulting in dishes that are both familiar and revelatory.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-gold text-sm tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300"
            >
              Our Story
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-noir-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="divider-ornament mb-8">
              <span className="text-xs tracking-[0.4em] uppercase">The Experience</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              An Evening at <span className="italic gold-gradient">Maison Noir</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Arrival",
                desc: "Step into an intimate dining room where warm light, curated art, and soft jazz set the tone for the evening ahead.",
              },
              {
                num: "02",
                title: "The Meal",
                desc: "A thoughtfully composed tasting menu or à la carte journey, paired with selections from our award-winning cellar.",
              },
              {
                num: "03",
                title: "The Memory",
                desc: "Service that anticipates, cuisine that delights, and an atmosphere that transforms dinner into a lasting memory.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="p-8 bg-noir-card border border-black/5 hover:border-gold/30 transition-colors duration-500 group shadow-sm"
              >
                <span className="font-display text-5xl text-gold/40 group-hover:text-gold transition-colors">{item.num}</span>
                <h3 className="font-display text-2xl text-cream mt-4 mb-3">{item.title}</h3>
                <p className="text-cream/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL - light */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-noir-soft">
        <div className="max-w-4xl mx-auto text-center bg-noir-card border border-black/5 shadow-sm px-8 py-12 sm:px-16 sm:py-16">
          <svg className="w-12 h-12 mx-auto text-gold mb-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-cream leading-relaxed mb-10 italic"
          >
            "A masterclass in restraint and refinement. Maison Noir delivers one of the most
            compelling dining experiences in New York today."
          </motion.p>
          <div>
            <p className="text-cream text-sm tracking-[0.2em] uppercase mb-1">The New York Times</p>
            <p className="text-gold text-xs tracking-[0.3em] uppercase">Food & Dining Review, 2024</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION - light */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-noir">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden shadow-xl border border-black/5">
            <OptimizedImage
              src={images.privateDining}
              alt="Elegant table setting at Maison Noir"
              className="w-full h-full object-cover"
              width={1200}
              height={900}
            />
          </div>
          <div className="text-center lg:text-left">
            <div className="divider-ornament mb-8 lg:justify-start">
              <span className="text-xs tracking-[0.4em] uppercase">Reserve Your Table</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-6 leading-tight">
              An Evening Awaits <span className="italic gold-gradient">You</span>
            </h2>
            <p className="text-cream/70 text-lg max-w-xl mb-10 mx-auto lg:mx-0">
              We recommend reservations at least two weeks in advance. Private dining and
              special occasions welcome — please explore our{" "}
              <Link to="/events" className="text-gold hover:text-gold-soft underline decoration-gold/30 underline-offset-4 transition-colors">
                events
              </Link>{" "}
              offerings.
            </p>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-soft transition-colors duration-500 shadow-md"
            >
              Make a Reservation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
