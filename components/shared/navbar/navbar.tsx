"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Frame, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/navLinks";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // * Listen for scroll events to update sticky behavior.
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("container mx-auto sticky top-2 z-[9999]")}>
      <div className="md:hidden flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full clip-path-icon hover:bg-primary/10 dark:hover:bg-brand/10 cursor-pointer"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
      <div
        className={cn(
          "hidden md:flex justify-between items-center transition-all transform ease-in-out duration-300",
          scrolled
            ? "scale-95 xl:scale-90 px-4 py-3 rounded-full bg-primary/10 dark:bg-brand/10 backdrop-blur-lg backdrop-filter"
            : "scale-100"
        )}
      >
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="clip-path-icon-box bg- p-1">
            <Frame className="h-6 w-6 text-primary dark:text-brand" />
          </div>
          <span className="text-primary dark:text-brand font-semibold">
            Morshed Alam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => {
                if (pathname !== "/") {
                  window.location.href = `/#${link.id}`;
                } else {
                  scrollToSection(link.id);
                }
              }}
              className={`${
                pathname === link.href
                  ? "text-primary font-semibold dark:text-brand after:w-full"
                  : "text-primary dark:text-textPrimary "
              } hover:text-[#000] transition-colors relative overflow-hidden cursor-pointer
                ${
                  index % 2 === 0
                    ? "after:clip-path-button-1"
                    : "after:clip-path-button-2"
                }
                after:absolute after:bottom-0 after:left-0 ${
                  pathname === link.href ? "after:w-full" : "after:w-0"
                } after:h-0.5 after:dark:bg-brand after:bg-primary dark:after:bg-brand/80
                hover:after:w-full after:transition-all after:duration-400
              `}
            >
              {link.name}
            </button>
          ))}
          {/* Theme change button */}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full clip-path-icon hover:bg-primary/10 dark:hover:bg-brand/10 cursor-pointer"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </Button>
          {/* view resume */}
          <a
            href="https://drive.google.com/file/d/113Y7WRGj9Jr4oCYhN3OzLpnweT1AfnDp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cursor-pointer text-primary bg-primary/10 hover:bg-primary/20 text-sm px-4 py-[7px] rounded-full font-medium clip-path-badge dark:text-brand dark:bg-brand/10 dark:hover:bg-brand/20">
              View Resume
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
