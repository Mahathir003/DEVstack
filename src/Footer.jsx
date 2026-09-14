export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 mt-20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-xs">
            DS
          </div>
          <span className="text-sm font-bold text-slate-800">
            Dev Stack Builder
          </span>
        </div>
        <p className="text-xs text-slate-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Dev Stack Builder. Built with React,
          Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
