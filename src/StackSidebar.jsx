import { Trash2, Layers, Cpu } from "lucide-react";

export default function StackSidebar({ stack, onRemove, onClearAll }) {
  return (
    <aside className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm sticky top-24">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
            <Layers size={18} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Your Custom Stack
            </h2>
            <p className="text-xs text-slate-500">
              {stack.length} technologies selected
            </p>
          </div>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
          >
            <Trash2 size={14} />
            Clear All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="py-12 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 mb-3 border border-dashed border-slate-200">
            <Cpu size={24} />
          </div>
          <p className="text-xs font-semibold text-slate-700 mb-1">
            Your stack is empty
          </p>
          <p className="text-[11px] text-slate-400 max-w-[200px]">
            Click "Add to Stack" on any technology card to build your workflow.
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white p-1.5 border border-slate-200 flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-slate-400 hover:text-rose-600 hover:bg-white p-1.5 rounded-lg transition-colors"
                title="Remove technology"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
