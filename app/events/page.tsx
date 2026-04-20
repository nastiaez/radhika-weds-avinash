"use client";

import Nav from "@/app/components/Nav";
import { useEffect, useState } from "react";
import Link from "next/link";

type Tier = "wedding" | "full" | null;

const day1Events = [
  {
    date: "Wednesday, 1 July 2026",
    time: "6:00 PM",
    title: "Engagement & Reception",
    description: "An intimate evening celebrating the engagement and welcoming our families.",
    venue: "Dwaraka Palace",
    dress: "Traditional Indian attire — festive",
  },
];

const day2Events = [
  {
    date: "Thursday, 2 July 2026",
    time: "11:00 AM",
    title: "Wedding Ceremony & Luncheon",
    description: "The sacred ceremony followed by a celebratory luncheon for all guests.",
    venue: "Dwaraka Palace",
    dress: "Traditional Indian attire",
  },
];

function EventCard({ event, tierLabel }: { event: typeof day1Events[0]; tierLabel?: string }) {
  return (
    <div className="bg-cream border border-gold/30 p-6">
      {tierLabel && (
        <span className="inline-block font-body text-[10px] text-marigold tracking-widest uppercase mb-3 border border-marigold/30 px-2 py-0.5">
          {tierLabel}
        </span>
      )}
      <p className="font-body text-xs text-burgundy/60 mb-1">{event.date}</p>
      <p className="font-body text-xs text-marigold mb-3">{event.time}</p>
      <h3 className="font-display text-burgundy text-xl font-light mb-2">{event.title}</h3>
      <p className="font-body text-sm text-burgundy/70 leading-relaxed mb-4">{event.description}</p>
      <div className="border-t border-gold/15 pt-3">
        <p className="font-body text-xs text-burgundy font-medium">{event.venue}</p>
        <p className="font-body text-xs text-burgundy/50 mt-1">
          <span className="text-marigold">Dress:</span> {event.dress}
        </p>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [tier, setTier] = useState<Tier>("wedding");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("t");
    if (token === "full") {
      sessionStorage.setItem("tier", "full");
      setTier("full");
    } else {
      const stored = sessionStorage.getItem("tier") as Tier;
      setTier(stored ?? "wedding");
    }
    setChecked(true);
  }, []);

  const isFullTier = tier === "full";

  return (
    <>
      <Nav />
      <main className="pt-14 bg-cream min-h-screen">
        <section className="py-16 px-6 text-center bg-blush/20">
          <p className="font-body text-xs text-marigold tracking-widest uppercase mb-3">Save the dates</p>
          <h1 className="font-display text-burgundy text-5xl font-light mb-4">Events</h1>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
          <p className="font-body text-burgundy/60 text-sm mt-4 max-w-sm mx-auto">
            Dwaraka Palace, Thiruvanmiyur, Chennai
          </p>
          {checked && (
            <p className="font-body text-xs text-burgundy/40 mt-3">
              {isFullTier ? "You have access to both days" : "You have access to Wedding Day only"}
            </p>
          )}
        </section>

        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {isFullTier && (
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px flex-1 bg-gold/20" />
                  <h2 className="font-display text-burgundy text-xl font-light">Day 1 — Wednesday, 1 July</h2>
                  <div className="h-px flex-1 bg-gold/20" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {day1Events.map((e) => (
                    <EventCard key={e.title} event={e} tierLabel="Close Family" />
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px flex-1 bg-gold/20" />
                <h2 className="font-display text-burgundy text-xl font-light">Day 2 — Thursday, 2 July</h2>
                <div className="h-px flex-1 bg-gold/20" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {day2Events.map((e) => (
                  <EventCard key={e.title} event={e} />
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <Link href="/venue" className="font-body text-xs text-teal hover:text-burgundy tracking-widest uppercase transition-colors">
                Venue &amp; Directions →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-blush/20 text-center">
          <p className="font-body text-burgundy/50 text-xs tracking-widest">
            Come dressed for your favourite wedding. · Traditional Indian attire
          </p>
        </section>
      </main>
    </>
  );
}
