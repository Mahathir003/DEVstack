import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Mobile Left / Desktop Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900 p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#home" className="flex items-center">
            <img
              src="/logo-text.png"
              alt="Dev Stack Logo"
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-slate-900 transition-colors">
            Home
          </a>
          <a
            href="#technologies"
            className="hover:text-slate-900 transition-colors"
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

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors">
            Sign In
          </button>
          <button className="text-sm font-semibold text-white bg-brand-gradient px-5 py-2.5 rounded-full shadow-md hover:opacity-95 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white px-4 pt-2 pb-6 space-y-3 text-sm font-medium text-slate-600">
          <a href="#home" className="block py-2 hover:text-slate-900">
            Home
          </a>
          <a href="#technologies" className="block py-2 hover:text-slate-900">
            Technologies
          </a>
          <a href="#projects" className="block py-2 hover:text-slate-900">
            Projects
          </a>
          <a href="#about" className="block py-2 hover:text-slate-900">
            About
          </a>
          <a href="#contact" className="block py-2 hover:text-slate-900">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
