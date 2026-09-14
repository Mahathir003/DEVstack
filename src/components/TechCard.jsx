import React from "react";

const getTechIcon = (tech) => {
  const iconMap = {
    react: "https://cdn.simpleicons.org/react/61DAFB",
    vue: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
    svelte: "https://cdn.simpleicons.org/svelte/FF3E00",
    nextjs: "https://cdn.simpleicons.org/nextdotjs/000000",
    nodejs: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    postgresql: "https://cdn.simpleicons.org/postgresql/4169E1",
    redis: "https://cdn.simpleicons.org/redis/FF4438",
    javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    typescript: "https://cdn.simpleicons.org/typescript/3178C6",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    tailwindcss: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    docker: "https://cdn.simpleicons.org/docker/2496ED",
  };
  return iconMap[tech?.id?.toLowerCase()] || tech?.icon;
};

export default function TechCard({ tech, onAddToStack }) {
  if (!tech) return null;

  return (
    <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 h-full">
      <div>
        {/* Header: Logo, Title, Category & Badge */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center space-x-3">
            <img
              src={getTechIcon(tech)}
              alt={tech.name}
              className="w-8 h-8 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-lg text-slate-900 leading-tight">
                {tech.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {tech.category}
              </p>
            </div>
          </div>

          {tech.badge && (
            <span className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50/80 rounded-full whitespace-nowrap">
              {tech.badge}
            </span>
          )}
        </div>

        {/* Rating & Difficulty */}
        <div className="flex items-center space-x-2 mb-4 text-xs">
          {tech.rating && (
            <span className="flex items-center space-x-1 font-bold text-amber-500 bg-amber-50/80 px-2.5 py-1 rounded-md">
              <span>★</span>
              <span>{tech.rating}</span>
            </span>
          )}
          {tech.difficulty && (
            <span className="font-medium text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-md">
              {tech.difficulty}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          {tech.description}
        </p>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={() => onAddToStack(tech)}
        className="w-full py-3 bg-[#0F172A] hover:bg-black text-white font-semibold text-sm rounded-xl transition-colors shadow-sm focus:outline-none"
      >
        Add to Stack
      </button>
    </div>
  );
}
