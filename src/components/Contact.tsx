import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-brand-bg relative dot-grid pt-32">
      <div className="container-custom px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4"
            >
              Get in Touch
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-brand-blue-900 mb-8"
            >
              Contact Me
            </motion.h3>
            <p className="text-slate-600 font-medium mb-10">
              I'm always open to discussing work experience opportunities or potential projects. Feel free to reach out using the form or my direct contact details.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                   <Mail size={20} />
                </div>
                <span className="text-sm font-bold text-slate-700">nishan.patel@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                   <Phone size={20} />
                </div>
                <span className="text-sm font-bold text-slate-700">07xxx xxxxxx</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 glass-card rounded-[2.5rem] p-8 md:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-500">I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand-blue font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block ml-1">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-blue outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block ml-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-blue outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block ml-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the opportunity..."
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-blue outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold text-sm hover:bg-brand-blue-900 transition-all shadow-lg active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
