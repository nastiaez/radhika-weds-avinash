"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";

const navLinks = [
  { href: "#story", label: "Our Story" },
  { href: "#info", label: "Info" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/home" className="flex items-center">
          <Image src="/logo-transparent.png" alt="R&A" width={36} height={36} />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-body text-[10px] tracking-widest uppercase text-burgundy/70 hover:text-burgundy transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
          <li><LanguageDropdown /></li>
        </ul>

        <button className="md:hidden text-burgundy" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-gold/20 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-xs tracking-widest uppercase text-burgundy/70"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-1 border-t border-gold/10"><LanguageDropdown /></div>
        </div>
      )}
    </nav>
  );
}
