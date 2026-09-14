export default function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      id="home"
    >
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
        <img
          src={`${import.meta.env.BASE_URL}banner-stack.png`}
          alt="Dev Stack Illustration"
        />
      </div>
    </section>
  );
}
