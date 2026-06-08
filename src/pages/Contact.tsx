import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-noir pt-32 min-h-screen">
      {/* HERO - dark */}
      <section className="relative py-20 px-6 lg:px-12 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=2000"
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
            <span className="text-xs tracking-[0.4em] uppercase text-gold-soft">Contact</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Get in <span className="italic gold-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you. Whether you have a question, feedback, or a special request,
            our team is here to help.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO & FORM - light */}
      <section className="py-20 px-6 lg:px-12 bg-noir">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="font-display text-2xl text-cream mb-4">Visit Us</h3>
              <p className="text-cream/70 leading-relaxed">
                147 West 24th Street<br />
                New York, NY 10011<br />
                United States
              </p>
              <p className="text-cream/50 text-sm mt-4">
                Located in the heart of Chelsea, just steps from Madison Square Park.
                Valet parking available Thursday through Saturday.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-cream mb-4">Contact</h3>
              <div className="space-y-3">
                <a href="tel:+12125550147" className="block text-cream/70 hover:text-gold transition-colors">
                  <span className="text-xs tracking-[0.2em] uppercase text-cream/40 block mb-1">
                    Reservations
                  </span>
                  +1 (212) 555-0147
                </a>
                <a href="mailto:hello@maisonnoir.com" className="block text-cream/70 hover:text-gold transition-colors">
                  <span className="text-xs tracking-[0.2em] uppercase text-cream/40 block mb-1">
                    General Inquiries
                  </span>
                  hello@maisonnoir.com
                </a>
                <a href="mailto:events@maisonnoir.com" className="block text-cream/70 hover:text-gold transition-colors">
                  <span className="text-xs tracking-[0.2em] uppercase text-cream/40 block mb-1">
                    Private Events
                  </span>
                  events@maisonnoir.com
                </a>
                <a href="mailto:press@maisonnoir.com" className="block text-cream/70 hover:text-gold transition-colors">
                  <span className="text-xs tracking-[0.2em] uppercase text-cream/40 block mb-1">
                    Press & Media
                  </span>
                  press@maisonnoir.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-cream mb-4">Hours</h3>
              <div className="space-y-2 text-cream/70">
                <div className="flex justify-between">
                  <span>Tuesday – Thursday</span>
                  <span>5:30 PM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday – Saturday</span>
                  <span>5:00 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between text-cream/40">
                  <span>Sunday – Monday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-cream mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-6 py-2 border border-black/15 text-cream/70 hover:border-gold hover:text-gold transition-colors text-xs tracking-[0.2em] uppercase"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors"
                  >
                    <option value="" className="bg-noir">Select a subject</option>
                    <option value="general" className="bg-noir">General Inquiry</option>
                    <option value="reservation" className="bg-noir">Reservation Question</option>
                    <option value="events" className="bg-noir">Private Events</option>
                    <option value="feedback" className="bg-noir">Feedback</option>
                    <option value="press" className="bg-noir">Press & Media</option>
                    <option value="other" className="bg-noir">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-transparent border-b border-black/20 focus:border-gold text-cream py-3 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-soft transition-colors duration-500 mt-8"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 border border-black/10 bg-noir-card p-12 shadow-sm"
              >
                <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-4xl text-cream mb-4">Message Sent</h2>
                <p className="text-cream/60 mb-8">
                  Thank you for reaching out. We'll respond to your inquiry within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="text-gold text-sm tracking-[0.2em] uppercase hover:text-gold-soft transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* MAP PLACEHOLDER - soft */}
      <section className="py-20 px-6 lg:px-12 bg-noir-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="divider-ornament mb-8">
              <span className="text-xs tracking-[0.4em] uppercase">Find Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
              Located in <span className="italic gold-gradient">Chelsea</span>
            </h2>
          </div>

          <div className="relative aspect-[16/9] bg-noir-card border border-black/10 flex items-center justify-center overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
              alt="Restaurant location"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-card via-noir-card/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4 animate-float bg-noir-card shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <p className="font-display text-2xl text-cream mb-2">147 West 24th Street</p>
                <p className="text-cream/60">New York, NY 10011</p>
                <a
                  href="https://maps.google.com/?q=147+West+24th+Street+New+York+NY+10011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-500"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
