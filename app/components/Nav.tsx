"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/events", label: "Events" },
  { href: "/venue", label: "Venue" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-saffron/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-3">
          <Image
            src="/logo-transparent.png"
            alt="R&A"
            width={40}
            height={40}
            className="opacity-90"
          />
          <span className="font-display text-maroon text-lg hidden sm:block">
            Radhika &amp; Avinash
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-body text-xs tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-saffron"
                    : "text-warm-gray hover:text-maroon"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/"
              className="font-body text-xs tracking-widest text-warm-gray hover:text-maroon transition-colors"
            >
              English
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-maroon"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
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
        <div className="md:hidden bg-cream border-t border-saffron/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-body text-xs tracking-widest uppercase ${
                pathname === link.href ? "text-saffron" : "text-warm-gray"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/" onClick={() => setOpen(false)} className="font-body text-xs tracking-widest text-warm-gray">
            Language / English
          </Link>
        </div>
      )}
    </nav>
  );
}
