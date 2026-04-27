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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b-2 border-gold">
      <div className="max-w-4xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo-transparent.png" alt="R&A" width={44} height={44} />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm tracking-widest uppercase text-warm-black hover:text-burgundy transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li><LanguageDropdown /></li>
        </ul>

        <button className="md:hidden text-warm-black" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
        <div className="md:hidden bg-cream border-t border-gold px-8 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm tracking-widest uppercase text-warm-black"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gold/30"><LanguageDropdown /></div>
        </div>
      )}
    </nav>
  );
}
