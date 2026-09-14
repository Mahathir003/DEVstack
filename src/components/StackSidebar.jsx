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

export default function StackSidebar({
  stack = [],
  onRemoveFromStack,
  onClearAll,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-6">
      <div className="mb-5">
        <h2 className="font-bold text-slate-900 text-lg">Your Stack</h2>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
          Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <p className="text-sm text-slate-400 text-center py-8">
          No technologies added yet.
        </p>
      ) : (
        <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3.5 bg-white border border-slate-200/70 rounded-xl shadow-xs"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <img
                  src={getTechIcon(item)}
                  alt={item.name}
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-sm text-slate-900 leading-tight truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium leading-tight mt-0.5 truncate">
                    {item.category}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRemoveFromStack(item.id)}
                className="text-slate-300 hover:text-slate-500 text-base font-light p-1 ml-2 transition-colors"
                title={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          type="button"
          onClick={onClearAll}
          className="w-full py-2.5 mt-5 border border-rose-200 text-rose-500 hover:bg-rose-50 rounded-xl font-semibold text-sm transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
