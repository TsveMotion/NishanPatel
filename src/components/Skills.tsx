import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { NISHAN_DATA } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-brand-bg relative">
      <div className="container-custom px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 sticky top-32">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4"
            >
              Core Strengths
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-brand-blue-900 mb-6"
            >
              Professional Skills
            </motion.h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-10">
              I have developed a wide range of interpersonal and technical skills through both high-level academics and practical work experience in pharmacy.
            </p>
            <div className="glass-card rounded-2xl p-6 bg-blue-50/30 border-blue-100">
               <p className="text-xs font-bold text-brand-blue-900 uppercase tracking-widest mb-4">Focus Area</p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold">🤝</div>
                 <span className="text-sm font-bold text-slate-700">Team Leadership & Empathy</span>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="glass-card rounded-[2.5rem] p-8 md:p-12">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Skillsets</h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {NISHAN_DATA.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-6 py-3 bg-blue-50 text-brand-blue text-sm font-bold rounded-full border border-blue-100 hover:bg-brand-blue hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-2xl mb-4 block">📈</span>
                  <h5 className="font-bold text-brand-blue-900 mb-2">Growth Mindset</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">Constant desire to learn and improve in professional environments.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-2xl mb-4 block">⌛</span>
                  <h5 className="font-bold text-brand-blue-900 mb-2">Punctuality</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">Exceptional attendance record and consistent time management.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
