import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 md:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#000] dark:text-brand">
                Morshed Alam
              </span>
            </h3>
            <p className="text-textPrimary dark:text-textPrimary mb-6 max-w-md">
              Building modern, responsive, and user-friendly web applications with MongoDB, Express, React, and Node.js.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                  API Development
                </a>
              </li>
              <li>
                <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                  Database Design
                </a>
              </li>
              <li>
                <a href="#" className="text-textPrimary dark:text-textPrimary hover:text-emerald-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500">
          <p>© {currentYear} Morshed Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
