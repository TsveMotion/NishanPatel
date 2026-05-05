import { motion } from 'motion/react';
import { NISHAN_DATA } from '../constants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="container-custom px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 accent-border"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">About Nishan</h2>
              <h3 className="text-2xl md:text-4xl font-bold text-brand-blue-900 mb-6 md:mb-8 leading-tight">
                A dependable and enthusiastic student looking to grow.
              </h3>
              <div className="text-slate-600 leading-relaxed text-base md:text-lg mb-8 space-y-4">
                {NISHAN_DATA.about.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {(NISHAN_DATA as any).additionalInfo && (
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">Speech & Drama</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                    {(NISHAN_DATA as any).additionalInfo}
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-brand-blue">800+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Positive Behavior Points</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-brand-blue">GCSE</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Grades 5-7 Achieved</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-brand-blue">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Attendance Focus</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 flex flex-col items-center text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h4 className="text-xl font-bold text-brand-blue-900">Education</h4>
                <p className="text-slate-500 font-bold text-sm mt-1 uppercase tracking-tight">Streetly Academy</p>
                <div className="mt-6 w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-brand-blue"
                  />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Class of 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
