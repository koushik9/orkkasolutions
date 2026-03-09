"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/8 shadow-sm"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-[#1d1d1f] hover:opacity-70 transition-opacity"
        >
          Orkka Solutions
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-opacity ${
                pathname === link.href
                  ? "text-[#1d1d1f] opacity-100"
                  : "text-[#1d1d1f] opacity-60 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-4 py-1.5 rounded-full bg-[#1d1d1f] text-white text-[13px] font-medium hover:bg-[#3d3d3f] transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-[#1d1d1f] opacity-60 hover:opacity-100 transition-opacity"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/8 px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-[#1d1d1f] py-2.5 border-b border-black/6 last:border-0 opacity-80 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 px-4 py-2.5 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium text-center hover:bg-[#3d3d3f] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
