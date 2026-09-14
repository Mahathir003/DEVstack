import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTechnologies = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById("technologies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logoSrc = `${import.meta.env.BASE_URL}/logo-text.png`.replace(
    /\/\//g,
    "/",
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 items-center justify-between">
        <a
          href="#home"
          onClick={scrollToHome}
          className="flex items-center cursor-pointer"
        >
          <img
            src={logoSrc}
            alt="Dev Stack Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#home"
            onClick={scrollToHome}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={scrollToTechnologies}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="hover:text-slate-900 transition-colors"
          >
            Projects
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors">
            Sign In
          </button>
          <button className="text-sm font-semibold text-white bg-brand-gradient px-5 py-2.5 rounded-full shadow-md hover:opacity-95 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="grid grid-cols-3 md:hidden max-w-7xl mx-auto px-3 h-16 items-center">
        <div className="flex items-center justify-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X
                size={22}
                className="rotate-90 transition-transform duration-300"
              />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="#home"
            onClick={scrollToHome}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logoSrc}
              alt="Dev Stack Logo"
              className="h-7 w-auto object-contain"
            />
          </a>
        </div>

        <div className="flex items-center justify-end gap-1">
          <button className="text-[11px] font-semibold text-slate-700 px-1.5 py-1">
            Sign In
          </button>
          <button className="text-[11px] font-semibold text-white bg-brand-gradient px-2.5 py-1 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 border-b border-slate-100 shadow-lg" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-3 pb-5 space-y-1 bg-white">
            <a
              href="#home"
              onClick={scrollToHome}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Home
            </a>
            <a
              href="#technologies"
              onClick={scrollToTechnologies}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Technologies
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
