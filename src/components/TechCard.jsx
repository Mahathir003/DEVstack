import { Star } from "lucide-react";

export default function TechCard({ tech, onAdd, isAdded }) {
  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Popular":
        return "bg-sky-50 text-sky-600 border-sky-100";
      case "Versatile":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "Fast":
        return "bg-amber-50 text-amber-600 border-amber-100";
      case "Top SQL":
        return "bg-indigo-50 text-indigo-600 border-indigo-100";
      case "Cache":
        return "bg-rose-50 text-rose-600 border-rose-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 p-2.5 flex items-center justify-center border border-slate-100">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getBadgeColor(tech.badge)}`}
          >
            {tech.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.name}</h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-6 min-h-[48px]">
          {tech.description}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 mb-6">
          <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">
            {tech.category}
          </span>
          <span>{tech.difficulty}</span>
          <div className="flex items-center gap-1 text-amber-500 font-semibold">
            <Star size={14} className="fill-amber-400" />
            <span>{tech.rating}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
