"use client";

import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "mr", label: "Marathi", native: "मराठी" },
];

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lang") || "en";
    setCurrent(stored);
  }, []);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function select(code: string) {
    localStorage.setItem("lang", code);
    setCurrent(code);
    setOpen(false);
  }

  const active = languages.find((l) => l.code === current);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="font-body text-[10px] tracking-widest uppercase text-burgundy/70 hover:text-burgundy transition-colors flex items-center gap-1"
      >
        {active?.native}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-cream border border-gold/30 shadow-md min-w-[120px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => select(lang.code)}
              className={`w-full text-left px-4 py-2.5 font-body text-xs hover:bg-blush/20 transition-colors flex flex-col ${lang.code === current ? "text-teal" : "text-burgundy/70"}`}
            >
              <span className="font-display text-sm">{lang.native}</span>
              <span className="text-[10px] opacity-50">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
