import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-bg dot-grid">
      <div className="container-custom grid md:grid-cols-12 gap-12 items-center relative z-10 px-6">
        {/* Profile Card Sidebar Effect */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-4"
        >
          <div className="glass-card rounded-[2.5rem] p-8 flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center">
                <img
                  src="/input_file_0.png"
                  alt="Nishan Patel"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full animate-pulse" />
            </div>
            
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-brand-blue-900 leading-tight">Hi, I'm Nishan Patel</h1>
              <p className="text-slate-500 text-[10px] md:text-xs mt-2 font-bold uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full inline-block">
                Student & Aspiring Professional
              </p>
            </div>
            
            <div className="w-full pt-2 md:pt-4 space-y-3">
              <a
                href="#experience"
                className="w-full bg-brand-blue text-white py-3 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-sm block hover:bg-brand-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="w-full border border-slate-200 text-slate-700 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-sm block hover:bg-white hover:border-slate-300 transition-all shadow-sm active:translate-y-0"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 md:col-span-8 space-y-8"
        >
          <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 accent-border flex flex-col justify-center">
            <h2 className="text-[10px] md:text-xs font-bold text-brand-blue-900 uppercase tracking-widest mb-4 md:mb-6 block text-center md:text-left">Welcome to my Portfolio</h2>
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight mb-8 text-center md:text-left">
              "Ambitious A-Level student exploring the intersection of AI, Mathematics, and Business to drive future innovation."
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-slate-100">
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">A-Level</span>
                <span className="block text-lg font-bold text-brand-blue">Maths & Biz</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Foundation</span>
                <span className="block text-lg font-bold text-brand-blue">AI Focused</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Performance</span>
                <span className="block text-lg font-bold text-brand-blue">Rotary Award</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sport</span>
                <span className="block text-lg font-bold text-brand-blue">Walsall FC</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
