export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Build Your Ideal <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>
        <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#technologies"
            className="px-6 py-3.5 rounded-xl font-semibold text-white bg-brand-gradient shadow-lg shadow-pink-500/20 hover:opacity-95 transition-all text-sm"
          >
            Explore Technologies
          </a>
          <button className="px-6 py-3.5 rounded-xl font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors text-sm">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-violet-100 via-pink-50 to-orange-100 p-8 flex items-center justify-center shadow-xl">
          <div className="relative w-64 h-64 bg-slate-900/90 rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/20 flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
              <span className="text-xs font-mono text-pink-400">
                stack_config.json
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="space-y-2 font-mono text-xs text-slate-300">
              <p>
                <span className="text-purple-400">"frontend"</span>:{" "}
                <span className="text-emerald-400">"React"</span>,
              </p>
              <p>
                <span className="text-purple-400">"styling"</span>:{" "}
                <span className="text-emerald-400">"Tailwind"</span>,
              </p>
              <p>
                <span className="text-purple-400">"backend"</span>:{" "}
                <span className="text-emerald-400">"Node.js"</span>,
              </p>
              <p>
                <span className="text-purple-400">"database"</span>:{" "}
                <span className="text-emerald-400">"PostgreSQL"</span>
              </p>
            </div>
            <div className="pt-2 border-t border-slate-700/50 text-[10px] text-slate-500 flex justify-between">
              <span>STATUS: OPTIMAL</span>
              <span className="text-emerald-400">READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
