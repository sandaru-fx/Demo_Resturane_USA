import { motion } from "framer-motion";
import { useState } from "react";
import OptimizedImage from "../components/OptimizedImage";
import { images } from "../data/images";

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  ];

  return (
    <div className="bg-noir pt-24 sm:pt-32 min-h-screen">
      {/* HERO - dark */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src={images.privateDining}
            alt=""
            className="w-full h-full object-cover"
            priority
            width={2000}
            height={800}
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
            <span className="text-xs tracking-[0.4em] uppercase text-gold-soft">Reservations</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Reserve Your <span className="italic gold-gradient">Evening</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            We recommend booking at least two weeks in advance. For parties of 8 or more,
            please contact our events team directly.
          </motion.p>
        </div>
      </section>

      {/* FORM SECTION - light */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-noir">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n} className="bg-noir">
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors"
                  >
                    <option value="" className="bg-noir">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time} className="bg-noir">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                    Occasion (Optional)
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors"
                  >
                    <option value="" className="bg-noir">None</option>
                    <option value="birthday" className="bg-noir">Birthday</option>
                    <option value="anniversary" className="bg-noir">Anniversary</option>
                    <option value="business" className="bg-noir">Business Dinner</option>
                    <option value="celebration" className="bg-noir">Celebration</option>
                    <option value="date" className="bg-noir">Date Night</option>
                    <option value="other" className="bg-noir">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                    Special Requests or Dietary Restrictions
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors resize-none"
                    placeholder="Allergies, dietary restrictions, special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-soft transition-colors duration-500 mt-8"
                >
                  Confirm Reservation
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-4xl text-cream mb-4">Thank You</h2>
                <p className="text-cream/60 mb-8 max-w-md mx-auto">
                  Your reservation request has been received. We'll confirm your booking via email
                  within 24 hours. We look forward to welcoming you.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "", email: "", phone: "", date: "",
                      time: "", guests: "2", occasion: "", notes: "",
                    });
                  }}
                  className="text-gold text-sm tracking-[0.2em] uppercase hover:text-gold-soft transition-colors"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="border border-black/10 bg-noir-card p-8 shadow-sm">
              <h3 className="font-display text-2xl text-cream mb-6">Hours of Operation</h3>
              <div className="space-y-4 text-cream/60">
                <div className="flex justify-between pb-4 border-b border-black/5">
                  <span>Tuesday – Thursday</span>
                  <span className="text-cream">5:30 PM – 10:00 PM</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-black/5">
                  <span>Friday – Saturday</span>
                  <span className="text-cream">5:00 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday – Monday</span>
                  <span className="text-cream/40">Closed</span>
                </div>
              </div>
            </div>

            <div className="border border-black/10 bg-noir-card p-8 shadow-sm">
              <h3 className="font-display text-2xl text-cream mb-4">Policies</h3>
              <ul className="space-y-3 text-cream/60 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>Reservations are held for 15 minutes past the booking time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>Smart casual attire is requested. No athletic wear or flip-flops.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>Cancellations must be made at least 24 hours in advance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>Parties of 6+ require a credit card to hold the reservation.</span>
                </li>
              </ul>
            </div>

            <div className="border border-black/10 bg-noir-card p-8 shadow-sm">
              <h3 className="font-display text-2xl text-cream mb-4">Private Events</h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-4">
                Our private dining room accommodates up to 20 guests for intimate celebrations,
                corporate dinners, and special occasions.
              </p>
              <a
                href="mailto:events@maisonnoir.com"
                className="text-gold text-sm tracking-[0.2em] uppercase hover:text-gold-soft transition-colors"
              >
                Inquire →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
