import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    img: "https://images.pexels.com/photos/6111928/pexels-photo-6111928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    category: "Cuisine",
    title: "Gourmet Plating",
  },
  {
    img: "https://images.pexels.com/photos/8697540/pexels-photo-8697540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    category: "Cuisine",
    title: "Dry-Aged Ribeye",
  },
  {
    img: "https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1500",
    category: "Ambiance",
    title: "Dining Room",
  },
  {
    img: "https://images.pexels.com/photos/29039073/pexels-photo-29039073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    category: "Cuisine",
    title: "Hand-Rolled Pasta",
  },
  {
    img: "https://images.pexels.com/photos/4253130/pexels-photo-4253130.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800",
    category: "Kitchen",
    title: "Behind the Scenes",
  },
  {
    img: "https://images.pexels.com/photos/13878326/pexels-photo-13878326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    category: "Cuisine",
    title: "Chocolate Soufflé",
  },
  {
    img: "https://images.pexels.com/photos/7627414/pexels-photo-7627414.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    category: "Cuisine",
    title: "Atlantic Salmon",
  },
  {
    img: "https://images.pexels.com/photos/31057721/pexels-photo-31057721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    category: "Bar",
    title: "Craft Cocktails",
  },
  {
    img: "https://images.pexels.com/photos/15801057/pexels-photo-15801057.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
    category: "Cuisine",
    title: "Spring Starters",
  },
  {
    img: "https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1500",
    category: "Ambiance",
    title: "Private Dining",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = ["All", "Cuisine", "Ambiance", "Kitchen", "Bar"];
  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <div className="bg-noir pt-32 min-h-screen">
      {/* HERO - dark */}
      <section className="relative py-20 px-6 lg:px-12 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=2000"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 to-stone-900" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="divider-ornament mb-8"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gold-soft">Gallery</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Moments of <span className="italic gold-gradient">Beauty</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            A glimpse into the artistry, atmosphere, and soul of Maison Noir.
          </motion.p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 lg:px-12 py-16 bg-noir">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                filter === cat
                  ? "bg-gold text-white border-gold"
                  : "border-black/15 text-cream/60 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-6 lg:px-12 pb-32 bg-noir">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.img}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden cursor-pointer shadow-md ${
                  i === 2 || i === 9 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`aspect-square ${i === 2 || i === 9 ? "md:aspect-[2/1]" : ""}`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gold-soft text-xs tracking-[0.2em] uppercase mb-2">{item.category}</p>
                  <h3 className="font-display text-2xl text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-stone-900/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightbox].img}
              alt={filtered[lightbox].title}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
