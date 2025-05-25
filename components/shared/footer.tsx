import { scrollToSection } from "@/utils/scrollToSection";
import {
  ArrowUp,
  ArrowUpToLine,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 md:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#000] dark:text-brand">Morshed Alam</span>
            </h3>
            <p className="text-textPrimary dark:text-textPrimary mb-6 max-w-md">
              Building modern, responsive, and user-friendly web applications
              with React, NextJs, Remix, MongoDB, Express and Node.js.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/morz-mamun"
                target="_blank"
                className="text-textPrimary dark:text-textPrimary hover:text-primary hover:text-brand transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-morshed-alam-2324022a4"
                target="_blank"
                className="text-textPrimary dark:text-textPrimary hover:text-primary hover:text-brand transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/morzMamun"
                target="_blank"
                className="text-textPrimary dark:text-textPrimary hover:text-primary hover:text-brand transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:morzmamun@gmail.com"
                target="_blank"
                className="text-textPrimary dark:text-textPrimary hover:text-primary hover:text-brand transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-textPrimary dark:text-textPrimary hover:text-primary hover:text-brand transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-textPrimary dark:text-textPrimary hover:text-primary hover:text-brand transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-textPrimary dark:text-textPrimary hover:text-primary hover:text-brand transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-textPrimary dark:text-textPrimary hover:text-primary hover:text-brand transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          {/* back to top button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("banner")}
              className="cursor-pointer flex items-center gap-2 hover:text-primary hover:text-brand transition-colors rounded-full px-4 py-3 shadow-lg shadow-primary/70 dark:shadow-brand/50"
            >
              <ArrowUpToLine size={24} className="dark:text-brand animate-bounce" />
              Back to Top
            </button>
          </div>
        </div>
        {/* back to top button for medium and small screens */}
          <div className="lg:hidden flex justify-center items-center mt-4">
            <button
              onClick={() => scrollToSection("banner")}
              className="cursor-pointer flex items-center gap-2 hover:text-primary hover:text-brand transition-colors rounded-full px-4 py-3 shadow-lg shadow-primary/70 dark:shadow-brand/50"
            >
              <ArrowUp size={24} className="text-primary dark:text-brand animate-bounce" />
              Back to Top
            </button>
          </div>
        <div className="border-t border-zinc-800 mt-5 lg:mt-12 pt-8 text-center md:text-base text-sm text-zinc-500">
          <p>© {currentYear} Morshed Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
