import { motion } from 'motion/react';
import { Trophy, Bike, Flame, Users } from 'lucide-react';
import { NISHAN_DATA } from '../constants';

export default function SportsAndHobbies() {
  const highlights = [
    { text: "Walsall FC", sub: "Academy Goalkeeper", icon: <Users size={20} />, color: "bg-blue-800" },
    { text: "Coaches' Player", sub: "Season 2024/25", icon: <Trophy size={20} />, color: "bg-orange-600" },
    { text: "Badminton", sub: "Competitive Player", icon: <Flame size={20} />, color: "bg-blue-800" },
    { text: "Fitness", sub: "Resilience & Focus", icon: <Bike size={20} />, color: "bg-orange-600" },
  ];

  return (
    <section id="interests" className="section-padding bg-white relative">
      <div className="container-custom px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4"
          >
            Extracurricular
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-blue-900"
          >
            Sports & Hobbies
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-center lg:text-left">
              {NISHAN_DATA.sportsAndHobbies.content}
            </p>
            <div className="p-5 md:p-6 rounded-2xl bg-orange-50 border border-orange-100 flex items-center gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white flex-shrink-0">
                 <Trophy size={20} />
              </div>
              <div>
                <h4 className="font-bold text-brand-orange text-sm md:text-base">Award Winner</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Coaches' Player of the Season</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between h-40"
              >
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue-900">{item.text}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
