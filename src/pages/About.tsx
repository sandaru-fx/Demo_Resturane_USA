import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-noir pt-32">
      {/* HERO - dark */}
      <section className="relative py-20 px-6 lg:px-12 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4253130/pexels-photo-4253130.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=2000"
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
            <span className="text-xs tracking-[0.4em] uppercase text-gold-soft">Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            A Legacy of <span className="italic gold-gradient">Passion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Founded in 2014, Maison Noir has become a cornerstone of New York's culinary landscape,
            celebrated for its unwavering commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* CHEF STORY - light */}
      <section className="py-20 px-6 lg:px-12 bg-noir">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/4253130/pexels-photo-4253130.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900"
              alt="Chef Antoine Laurent"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <p className="font-display text-2xl text-white">Chef Antoine Laurent</p>
              <p className="text-gold-soft text-sm tracking-wider">Executive Chef & Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gold mb-6 block">
              The Visionary
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-8 leading-tight">
              From Paris to <span className="italic gold-gradient">Manhattan</span>
            </h2>
            <div className="space-y-6 text-cream/70 leading-relaxed">
              <p>
                Chef Antoine Laurent's journey began in the kitchens of Lyon, where he apprenticed
                under legendary chef Paul Bocuse. His classical training instilled a deep respect
                for technique, precision, and the sanctity of ingredients.
              </p>
              <p>
                After honing his craft at three-Michelin-starred establishments across France,
                Chef Laurent arrived in New York in 2008, bringing with him a vision: to create
                a dining experience that honored French tradition while embracing the bold,
                innovative spirit of American cuisine.
              </p>
              <p>
                In 2014, that vision became Maison Noir. What began as a 40-seat dining room in
                Chelsea has grown into one of the city's most celebrated restaurants, earning
                accolades from The New York Times, James Beard Foundation, and countless devoted
                guests who return season after season.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-black/10">
              <p className="font-display text-xl text-cream italic">
                "Cooking is not about complexity. It's about revealing the truth of an ingredient
                through technique, patience, and love."
              </p>
              <p className="text-gold text-sm tracking-wider mt-4">— Chef Antoine Laurent</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY - soft cream */}
      <section className="py-32 px-6 lg:px-12 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="divider-ornament mb-8">
              <span className="text-xs tracking-[0.4em] uppercase">Our Philosophy</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
              Three Pillars of <span className="italic gold-gradient">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "I",
                title: "Ingredient Reverence",
                desc: "We source directly from farmers, fishermen, and artisans who share our obsession with quality. Every ingredient is selected at its peak, treated with respect, and allowed to shine.",
              },
              {
                num: "II",
                title: "Technical Mastery",
                desc: "Classical French technique forms our foundation, but we never stop learning. Our kitchen is a place of discipline and creativity, where precision meets imagination.",
              },
              {
                num: "III",
                title: "Warm Hospitality",
                desc: "Fine dining should never feel formal or intimidating. We create an atmosphere of genuine warmth, where every guest feels welcomed, cared for, and celebrated.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="text-center bg-noir-card p-10 shadow-sm border border-black/5"
              >
                <span className="font-display text-6xl text-gold/30 mb-6 block">{pillar.num}</span>
                <h3 className="font-display text-2xl text-cream mb-4">{pillar.title}</h3>
                <p className="text-cream/60 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM - light */}
      <section className="py-32 px-6 lg:px-12 bg-noir">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="divider-ornament mb-8">
              <span className="text-xs tracking-[0.4em] uppercase">The Team</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
              United by <span className="italic gold-gradient">Passion</span>
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              Behind every exceptional meal is an exceptional team. Meet the people who bring
              Maison Noir to life each evening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Antoine Laurent",
                role: "Executive Chef & Founder",
                img: "https://images.pexels.com/photos/4253130/pexels-photo-4253130.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
              },
              {
                name: "Sophie Chen",
                role: "Head Sommelier",
                img: "https://images.pexels.com/photos/31057721/pexels-photo-31057721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
              },
              {
                name: "Marcus Williams",
                role: "Pastry Chef",
                img: "https://images.pexels.com/photos/13878326/pexels-photo-13878326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 shadow-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="font-display text-2xl text-cream mb-1">{member.name}</h3>
                <p className="text-gold text-sm tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS - soft */}
      <section className="py-32 px-6 lg:px-12 bg-noir-soft">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="divider-ornament mb-8">
              <span className="text-xs tracking-[0.4em] uppercase">Recognition</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Honored by <span className="italic gold-gradient">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { year: "2024", award: "Michelin Recommended", org: "Michelin Guide" },
              { year: "2023", award: "Best New Restaurant", org: "James Beard Foundation" },
              { year: "2022", award: "Three Stars", org: "The New York Times" },
              { year: "2021", award: "Wine Spectator Award of Excellence", org: "Wine Spectator" },
            ].map((item, i) => (
              <motion.div
                key={item.award}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start gap-6 p-8 bg-noir-card border border-black/5 hover:border-gold/30 transition-colors shadow-sm"
              >
                <span className="font-display text-4xl text-gold">{item.year}</span>
                <div>
                  <h3 className="font-display text-xl text-cream mb-1">{item.award}</h3>
                  <p className="text-cream/60 text-sm">{item.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
