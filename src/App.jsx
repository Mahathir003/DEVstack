import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackSidebar from "./components/StackSidebar";
import TechCard from "./components/TechCard";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);

  // Fetch technology cards data from public folder
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error("Error loading technologies:", err));
  }, []);

  // 1. Add item & 2. Prevent duplicate additions
  const handleAddToStack = (tech) => {
    if (!tech || !tech.id) return;

    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: "bottom-right",
        autoClose: 2500,
      });
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: "bottom-right",
      autoClose: 2500,
    });
  };

  // 3. Remove single item
  const handleRemoveFromStack = (techId) => {
    const itemToRemove = stack.find((item) => item.id === techId);
    setStack((prev) => prev.filter((item) => item.id !== techId));

    toast.info(`Removed ${itemToRemove?.name || "item"} from stack.`, {
      position: "bottom-right",
      autoClose: 2500,
    });
  };

  // 4. Remove all items
  const handleClearAll = () => {
    if (stack.length === 0) return;

    setStack([]);
    toast.error("Cleared all technologies from your stack!", {
      position: "bottom-right",
      autoClose: 2500,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Available Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAddToStack={handleAddToStack}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <StackSidebar
              stack={stack}
              onRemoveFromStack={handleRemoveFromStack}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </main>

      <Footer />

      <ToastContainer pauseOnHover theme="colored" />
    </div>
  );
}
