import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 items-center justify-between">
        <a href="#home" className="flex items-center">
          <img
            src="/logo-text.png"
            alt="Dev Stack Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
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

      {/* Mobile Layout (3-Column Grid for Precision Center Alignment) */}
      <div className="grid grid-cols-3 md:hidden max-w-7xl mx-auto px-3 h-16 items-center">
        {/* Left: Hamburger menu icon */}
        <div className="flex items-center justify-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <div className="transition-transform duration-300 ease-in-out transform">
              {isOpen ? (
                <X
                  size={22}
                  className="rotate-90 transition-transform duration-300"
                />
              ) : (
                <Menu size={22} />
              )}
            </div>
          </button>
        </div>

        {/* Center: Brand logo */}
        <div className="flex items-center justify-center">
          <a href="#home" className="flex items-center">
            <img
              src="/logo-text.png"
              alt="Dev Stack Logo"
              className="h-5 sm:h-6 w-auto object-contain"
            />
          </a>
        </div>

        {/* Right: Sign In & Sign Up buttons */}
        <div className="flex items-center justify-end gap-1">
          <button className="text-[11px] font-semibold text-slate-700 hover:text-slate-900 px-1.5 py-1 whitespace-nowrap transition-colors">
            Sign In
          </button>
          <button className="text-[11px] font-semibold text-white bg-brand-gradient px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 border-b border-slate-100 shadow-lg"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-3 pb-5 space-y-1 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
