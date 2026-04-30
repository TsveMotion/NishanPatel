import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { NISHAN_DATA } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white relative">
      <div className="container-custom px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4"
          >
            Career Path
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-blue-900"
          >
            Work Experience
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {NISHAN_DATA.experience.map((item, index) => (
            <motion.div
              key={item.company + item.dates}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-6 text-[10px] font-bold text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-100 uppercase tracking-widest">
                Active
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-8">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.dates}</div>
                  <h4 className="text-2xl font-bold text-brand-blue-900">{item.role}</h4>
                  <div className="flex items-center gap-2 text-slate-500 font-bold italic text-sm">
                    <Briefcase size={16} />
                    {item.company}
                  </div>
                </div>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
