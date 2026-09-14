export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          {/* Brand & Socials */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="inline-block">
              <img
                src="/logo-text.png"
                alt="Dev Stack Logo"
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 pt-2">
              <a
                href="#github"
                className="hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#twitter"
                className="hover:text-slate-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#linkedin"
                className="hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-slate-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="hover:text-slate-900 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-slate-900 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
              <li>
                <a
                  href="#about"
                  className="hover:text-slate-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-slate-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-slate-900 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-slate-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-slate-900 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
