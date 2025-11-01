"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Menu() {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/#about" },
    { label: "Compétences", href: "/#skills" },
    { label: "Projets", href: "/#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // If href is an anchor on the current site
      if (href.startsWith("/#") || href === "/") {
        e.preventDefault();
        const id = href === "/" ? "" : href.replace("/#", "");
        if (pathname === "/") {
          // on homepage: smooth scroll
          if (id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          // navigate to home then scroll after navigation
          const target = id ? `/#${id}` : "/";
          router.push(target);
          // attempt a delayed scroll in case client-side navigation doesn't auto-scroll
          setTimeout(() => {
            if (id) {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            } else window.scrollTo({ top: 0, behavior: "smooth" });
          }, 200);
        }
      }
    },
    [pathname, router]
  );

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">TSHIBANGU</div>
        <nav className="hidden md:flex gap-6 items-center">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={(e) => handleClick(e, it.href)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              {it.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        {/* Mobile simple menu (could be extended) */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
