import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';
import { NISHAN_DATA } from '../constants';

export default function Certificates() {
  return (
    <section id="achievements" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10 font-black text-6xl md:text-8xl pointer-events-none select-none">
        ACHIEVEMENTS
      </div>
      
      <div className="container-custom px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4"
          >
            Recognition & Volunteering
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Certificates & <span className="text-brand-blue">Community</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          {NISHAN_DATA.certificates.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-3 h-3 rounded-full bg-brand-orange group-hover:scale-150 transition-transform" />
              <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{cert}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-4 group col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="w-3 h-3 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
            <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">Wellbeing Ambassador (Volunteering)</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
