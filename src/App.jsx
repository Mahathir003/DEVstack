import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";
import Footer from "./Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching technology data:", err);
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to stack!`);
  };

  const handleRemove = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack.`);
    }
  };

  const handleClearAll = () => {
    setStack([]);
    toast.error("Cleared all technologies from stack.");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col justify-between">
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
        />
        <Navbar />
        <Hero />

        <main
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          id="technologies"
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Available Technologies
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Browse through tools and add them to your custom stack.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tech Grid */}
            <div className="lg:col-span-2">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="h-64 bg-slate-200/60 rounded-2xl animate-pulse"
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAdd={handleAdd}
                      isAdded={stack.some((item) => item.id === tech.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={handleRemove}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
