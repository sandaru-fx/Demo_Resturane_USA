import { motion } from "framer-motion";
import { menuData } from "../data/menuData";

const sectionImages: Record<string, { img: string; alt: string }> = {
  Starters: {
    img: "https://images.pexels.com/photos/15801057/pexels-photo-15801057.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    alt: "Elegant starters plating",
  },
  Mains: {
    img: "https://images.pexels.com/photos/8697540/pexels-photo-8697540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    alt: "Gourmet main course",
  },
  Desserts: {
    img: "https://images.pexels.com/photos/13878326/pexels-photo-13878326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    alt: "Artisan dessert",
  },
  Cocktails: {
    img: "https://images.pexels.com/photos/31057721/pexels-photo-31057721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    alt: "Hand-crafted cocktails",
  },
};

export default function Menu() {
  return (
    <div className="bg-noir pt-32">
      {/* HERO - dark for drama */}
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=2000"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/80 to-stone-900" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="divider-ornament mb-8"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gold-soft">Our Menu</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            A Curated <span className="italic gold-gradient">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Our menu evolves with the seasons, guided by Chef Laurent's reverence for ingredients
            and technique. Each dish tells a story.
          </motion.p>
        </div>
      </section>

      {/* MENU SECTIONS - alternating with images */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {menuData.map((section, sectionIndex) => {
            const isReversed = sectionIndex % 2 === 1;
            const sectionImg = sectionImages[section.title];
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="mb-32 last:mb-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}>
                  {/* IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[4/5] overflow-hidden shadow-2xl lg:[direction:ltr]"
                  >
                    <img
                      src={sectionImg.img}
                      alt={sectionImg.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-6 left-6 lg:[direction:ltr]">
                      <span className="font-display text-sm tracking-[0.3em] uppercase text-white/80 bg-black/30 backdrop-blur-sm px-4 py-2 border border-white/20">
                        {String(sectionIndex + 1).padStart(2, "0")} / {String(menuData.length).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>

                  {/* ITEMS */}
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="lg:[direction:ltr]"
                  >
                    <span className="text-xs tracking-[0.4em] uppercase text-gold mb-4 block">
                      {section.subtitle}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-10 leading-tight">
                      {section.title}
                    </h2>
                    <div className="w-16 h-px bg-gold mb-10" />

                    <div className="space-y-8">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: itemIndex * 0.08 }}
                          className="group relative"
                        >
                          <div className="flex items-baseline gap-4 mb-2">
                            <h3 className="font-display text-xl md:text-2xl text-cream group-hover:text-gold transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex-1 border-b border-dotted border-black/20 mb-2" />
                            <span className="font-display text-xl md:text-2xl text-gold whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-cream/60 text-sm leading-relaxed max-w-2xl pr-4">
                            {item.description}
                          </p>
                          {item.tag && (
                            <span className="absolute -top-1 right-0 text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-2 py-0.5 bg-noir">
                              {item.tag}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TASTING MENU - stays dark for impact */}
      <section className="py-32 px-6 lg:px-12 bg-stone-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/6111928/pexels-photo-6111928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900"
              alt="Tasting menu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-xs tracking-[0.3em] uppercase text-gold-soft bg-black/40 backdrop-blur-sm px-4 py-2 border border-gold-soft/30">
                Chef's Tasting
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gold-soft mb-4 block">
              Chef's Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Seven-Course <span className="italic gold-gradient">Tasting Menu</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              A seasonal journey through Chef Laurent's most inspired creations, evolving nightly
              based on the finest ingredients available.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Wine pairings curated by our Head Sommelier available.
            </p>
            <div className="flex items-center gap-8 mb-10 pb-10 border-b border-white/10">
              <div>
                <span className="font-display text-4xl text-gold-soft">$185</span>
                <p className="text-white/50 text-xs tracking-wider uppercase mt-1">per guest</p>
              </div>
              <div>
                <span className="font-display text-4xl text-gold-soft">+$95</span>
                <p className="text-white/50 text-xs tracking-wider uppercase mt-1">wine pairing</p>
              </div>
            </div>
            <p className="text-white/50 text-sm">
              The entire party must participate in the tasting menu. Please inform us of dietary
              restrictions at the time of reservation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
