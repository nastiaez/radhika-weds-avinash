"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import BookTransition from "@/app/components/BookTransition";

const WEDDING_DATE = new Date("2026-07-02T11:00:00+05:30");

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-4xl md:text-5xl text-burgundy font-light tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-body text-[10px] text-burgundy/50 tracking-widest uppercase mt-1">{label}</span>
    </div>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div className="h-16" />;
  }

  return (
    <div className="flex gap-8 md:gap-12">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map(({ value, label }) => (
        <div key={label} className="flex items-center gap-8 md:gap-12">
          <CountdownUnit value={value} label={label} />
          {label !== "Seconds" && (
            <span className="text-gold text-xl font-display self-start mt-1">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [showTransition, setShowTransition] = useState(false);
  const [transitionDone, setTransitionDone] = useState(false);

  useEffect(() => {
    const hasSeenTransition = sessionStorage.getItem("doorTransition");
    if (hasSeenTransition) {
      setTransitionDone(true);
    } else {
      setShowTransition(true);
      sessionStorage.setItem("doorTransition", "1");
    }
  }, []);

  const handleTransitionComplete = () => {
    setShowTransition(false);
    setTransitionDone(true);
  };

  return (
    <>
      <Nav />
      <AnimatePresence>
        {showTransition && <BookTransition onComplete={handleTransitionComplete} />}
      </AnimatePresence>

      <main className="pt-16 bg-cream">
        <section className="relative w-full overflow-hidden" style={{ height: "30vh", minHeight: "200px" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-blush to-cream" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream/80 to-transparent z-10" />
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                <div className="w-1/3 h-1/2 bg-gradient-to-t from-forest/20 to-transparent rounded-tr-full" />
                <div className="flex-1" />
                <div className="w-1/4 h-2/3 bg-gradient-to-t from-rose/10 to-transparent rounded-tl-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center px-6 py-12 -mt-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: transitionDone ? 0 : 1.4, duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-transparent.png"
                alt="RA monogram"
                width={80}
                height={80}
                className="drop-shadow-sm"
              />
            </div>

            <h1 className="font-display italic text-burgundy text-4xl md:text-6xl font-light mb-2">
              Radhika weds Avinash
            </h1>
            <p className="font-body text-burgundy/60 text-sm tracking-wide">
              With hearts full of joy — the Ranganathans &amp; Karandikars welcome you
            </p>
          </motion.div>
        </section>

        <section className="px-6 py-8">
          <div className="max-w-xs mx-auto flex flex-col sm:flex-row gap-3">
            <button className="flex-1 border border-burgundy text-burgundy font-body text-xs tracking-widest uppercase py-3 px-4 hover:bg-burgundy hover:text-cream transition-all duration-300">
              Download Invitation
            </button>
            <button className="flex-1 bg-marigold text-cream font-body text-xs tracking-widest uppercase py-3 px-4 hover:bg-burgundy transition-all duration-300">
              பத்திரிகை பதிவிறக்கம்
            </button>
          </div>
        </section>

        <section className="px-6 py-10 text-center">
          <Countdown />
        </section>

        <section className="px-6 py-10">
          <div className="max-w-sm mx-auto">
            <div className="border border-gold/40 rounded-sm p-6 flex flex-col items-center gap-4">
              <div className="w-full aspect-[3/4] bg-blush/50 border border-gold/20 rounded-sm flex items-center justify-center">
                <div className="text-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="mx-auto mb-2 opacity-30">
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="font-body text-xs text-burgundy/40">Couple photo placeholder</p>
                </div>
              </div>
              <Link
                href="/story"
                className="font-body text-xs text-teal hover:text-burgundy transition-colors tracking-widest uppercase"
              >
                View Our Story →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                sanskrit: "उपस्थित: भवेत्",
                title: "A Presence-First Celebration",
                body: "Camera masking at door. Phone access for calls/texts. Photographers share all moments later.",
                link: "/gallery",
                linkText: "Gallery",
              },
              {
                sanskrit: "केवलम् आशीर्वाद: उपहारं विहाय",
                title: "Blessings! Nothing else.",
                body: "Your presence is the greatest gift of all.",
                link: null,
                linkText: null,
              },
              {
                sanskrit: "छायाचित्रणम् न",
                title: "Official photography captures everything.",
                body: "A photo booth available specially for you.",
                link: "/gallery",
                linkText: "Gallery",
              },
              {
                sanskrit: "सकलहृदयतः",
                title: "Come. Celebrate with us.",
                body: "Laugh loudly. Bless deeply. Love freely. And enjoy whole-heartedly.",
                link: null,
                linkText: null,
              },
            ].map((item, i) => (
              <div key={i} className="border-t border-gold/20 pt-4">
                <p className="font-display italic text-burgundy/60 text-sm mb-1">{item.sanskrit}</p>
                <h3 className="font-display text-burgundy text-xl font-light mb-1">{item.title}</h3>
                <p className="font-body text-burgundy/70 text-sm leading-relaxed">{item.body}</p>
                {item.link && (
                  <Link href={item.link} className="font-body text-xs text-teal hover:text-burgundy tracking-widest uppercase mt-2 inline-block transition-colors">
                    {item.linkText} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="max-w-md mx-auto border border-gold/40 p-6 text-center">
            <h3 className="font-display text-burgundy text-xl font-light mb-1">Dwaraka Palace</h3>
            <p className="font-body text-burgundy/60 text-xs mb-4">
              1st Sea Ward Road, Thiruvanmiyur, Chennai
            </p>
            <div className="w-full h-32 bg-blush/30 border border-gold/20 rounded-sm mb-4 flex items-center justify-center">
              <div className="text-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="mx-auto mb-2 opacity-30">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
                <p className="font-body text-xs text-burgundy/40">Map</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-teal hover:text-burgundy tracking-widest uppercase transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </section>

        <section className="px-6 py-10 bg-blush/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="divider-gold w-32 mx-auto mb-6">
                <span className="text-gold text-sm">✦</span>
              </div>
              <h2 className="font-display text-burgundy text-2xl font-light mb-2">Events</h2>
              <Link href="/events" className="font-body text-xs text-teal hover:text-burgundy tracking-widest uppercase transition-colors">
                View all + Add to Calendar →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-cream border border-gold/30 p-5">
                <p className="font-body text-xs text-marigold tracking-widest uppercase mb-1">Day 1 · Wed 1 July</p>
                <h3 className="font-display text-burgundy text-lg font-light mb-1">Engagement &amp; Reception</h3>
                <p className="font-body text-xs text-burgundy/60">6:00 PM · Close family</p>
              </div>
              <div className="bg-cream border border-gold/30 p-5">
                <p className="font-body text-xs text-marigold tracking-widest uppercase mb-1">Day 2 · Thu 2 July</p>
                <h3 className="font-display text-burgundy text-lg font-light mb-1">Wedding &amp; Luncheon</h3>
                <p className="font-body text-xs text-burgundy/60">11:00 AM · All guests</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-burgundy py-12 px-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-px bg-gold/30 mx-auto mb-6" />
            <p className="font-display italic text-cream/70 text-lg mb-2">Dwaraka Palace, Thiruvanmiyur</p>
            <p className="font-body text-cream/50 text-xs tracking-widest mb-6">2 JULY 2026 · CHENNAI</p>
            <div className="w-16 h-px bg-gold/30 mx-auto" />
          </div>
        </footer>
      </main>
    </>
  );
}
