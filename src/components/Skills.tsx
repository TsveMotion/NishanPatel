import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { NISHAN_DATA } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-brand-bg relative">
      <div className="container-custom px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4"
            >
              Core Strengths
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-6"
            >
              Professional Skills
            </motion.h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-10 text-sm md:text-base">
              I have developed a wide range of interpersonal and technical skills through both high-level academics and practical work experience in pharmacy.
            </p>
            <div className="glass-card rounded-2xl p-6 bg-blue-50/30 border-blue-100 hidden lg:block">
               <p className="text-[10px] font-bold text-brand-blue-900 uppercase tracking-widest mb-4">Focus Area</p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold">🤝</div>
                 <span className="text-xs font-bold text-slate-700">Team Leadership & Empathy</span>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="glass-card rounded-[2rem] p-6 md:p-12">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Skillsets & Expertise</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {(NISHAN_DATA as any).skillsDetailed.map((skill: any, index: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-5 md:p-6 rounded-2xl bg-blue-50/50 border border-blue-100 hover:border-brand-blue/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                       <CheckCircle2 size={16} className="text-brand-blue" />
                       <h5 className="font-bold text-brand-blue-900 transition-colors text-sm md:text-base">{skill.name}</h5>
                    </div>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {skill.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 flex flex-wrap gap-3">
                {NISHAN_DATA.skills.filter(s => !(NISHAN_DATA as any).skillsDetailed.some((sd: any) => sd.name === s)).map((skill, index) => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-500 text-xs font-bold rounded-full border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
