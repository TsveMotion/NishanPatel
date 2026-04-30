export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">NP</div>
            <span className="text-brand-blue-900 font-bold tracking-tight text-lg uppercase">Nishan Patel</span>
          </div>
          
          <div className="flex gap-8 items-center">
            <a href="#about" className="text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors uppercase tracking-widest">About</a>
            <a href="#experience" className="text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors uppercase tracking-widest">Experience</a>
            <a href="#contact" className="text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors uppercase tracking-widest">Contact</a>
          </div>
          
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} NISHAN PATEL. STUDENT PORTFOLIO.
          </p>
        </div>
      </div>
    </footer>
  );
}
