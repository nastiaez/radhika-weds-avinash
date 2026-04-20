"use client";

import Nav from "@/app/components/Nav";
import { useEffect, useState } from "react";
import Image from "next/image";

type Tier = "wedding" | "full" | null;

const tierAEvents = [
  {
    day: "Day 2",
    date: "Thursday, 2 July 2026",
    time: "11:00 AM",
    title: "Wedding Ceremony",
    description: "The sacred wedding ceremony — joining Radhika and Avinash in matrimony surrounded by family and loved ones.",
    venue: "Dwaraka Palace",
    address: "1st Sea Ward Road, Thiruvanmiyur, Chennai 41",
    dress: "Traditional Indian attire",
    icon: "🪷",
  },
  {
    day: "Day 2",
    date: "Thursday, 2 July 2026",
    time: "Post ceremony",
    title: "Wedding Luncheon",
    description: "Celebrate with a lavish luncheon following the ceremony. Food, family, and joy.",
    venue: "Dwaraka Palace",
    address: "1st Sea Ward Road, Thiruvanmiyur, Chennai 41",
    dress: "Traditional Indian attire",
    icon: "🍽️",
  },
];

const tierBEvents = [
  {
    day: "Day 1",
    date: "Wednesday, 1 July 2026",
    time: "6:00 PM",
    title: "Engagement & Reception",
    description: "An intimate evening soirée celebrating the engagement and reception with close family and friends.",
    venue: "Dwaraka Palace",
    address: "1st Sea Ward Road, Thiruvanmiyur, Chennai 41",
    dress: "Traditional Indian attire — festive",
    icon: "✨",
  },
];

function EventCard({
  event,
  tierLabel,
}: {
  event: (typeof tierAEvents)[0];
  tierLabel?: string;
}) {
  return (
    <div className="bg-cream border border-saffron/20 p-8 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-2xl">{event.icon}</div>
      {tierLabel && (
        <span className="inline-block font-body text-xs text-saffron tracking-widest uppercase mb-4 border border-saffron/30 px-2 py-0.5">
          {tierLabel}
        </span>
      )}
      <p className="font-body text-xs text-warm-gray tracking-widest uppercase mb-1">{event.day}</p>
      <h3 className="font-display text-3xl text-maroon font-light mb-2">{event.title}</h3>
      <div className="w-8 h-px bg-saffron/40 mb-4" />
      <p className="font-body text-sm text-warm-gray mb-1">{event.date}</p>
      <p className="font-body text-sm text-saffron mb-4">{event.time}</p>
      <p className="font-body text-sm text-warm-gray leading-relaxed mb-5">{event.description}</p>
      <div className="border-t border-saffron/15 pt-4">
        <p className="font-body text-xs text-maroon font-medium mb-1">{event.venue}</p>
        <p className="font-body text-xs text-warm-gray mb-3">{event.address}</p>
        <p className="font-body text-xs text-warm-gray">
          <span className="text-saffron">Dress:</span> {event.dress}
        </p>
      </div>
      <button className="mt-5 font-body text-xs tracking-widest uppercase border border-maroon/30 text-maroon/60 py-2 px-4 w-full cursor-not-allowed opacity-50">
        + Add to Calendar
      </button>
      <p className="font-body text-xs text-center text-warm-gray mt-1 opacity-50">Coming soon</p>
    </div>
  );
}

export default function EventsPage() {
  const [tier, setTier] = useState<Tier>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("t");
    if (token === "full") {
      sessionStorage.setItem("tier", "full");
      setTier("full");
    } else if (token === "wedding") {
      sessionStorage.setItem("tier", "wedding");
      setTier("wedding");
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
      <main className="pt-16 bg-cream min-h-screen">
        <section className="py-20 px-6 text-center bg-ivory">
          <p className="font-body text-xs text-saffron tracking-widest uppercase mb-3">
            Save the dates
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-maroon font-light mb-4">Events</h1>
          <div className="w-16 h-px bg-saffron/40 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-sm max-w-sm mx-auto leading-relaxed">
            All events take place at Dwaraka Palace, Thiruvanmiyur, Chennai.
          </p>
          {checked && (
            <p className="font-body text-xs text-warm-gray mt-4 opacity-60">
              {isFullTier ? "You are viewing the full schedule (both days)" : "You are viewing the wedding day schedule"}
            </p>
          )}
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {isFullTier && (
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-saffron/20" />
                  <h2 className="font-display text-2xl text-maroon font-light">Day 1 — Wednesday, 1 July</h2>
                  <div className="h-px flex-1 bg-saffron/20" />
                </div>
                <div className="grid md:grid-cols-1 gap-6 max-w-xl">
                  {tierBEvents.map((event) => (
                    <EventCard key={event.title} event={event} tierLabel="Close Family" />
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-saffron/20" />
                <h2 className="font-display text-2xl text-maroon font-light">Day 2 — Thursday, 2 July</h2>
                <div className="h-px flex-1 bg-saffron/20" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {tierAEvents.map((event) => (
                  <EventCard key={event.title} event={event} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 px-6 bg-ivory text-center">
          <Image src="/logo-transparent.png" alt="R&A" width={50} height={50} className="mx-auto mb-4 opacity-40" />
          <p className="font-body text-warm-gray text-xs tracking-widest">
            Come dressed for your favourite wedding.
          </p>
          <p className="font-display italic text-maroon text-lg mt-2">
            Traditional Indian attire
          </p>
        </section>
      </main>
    </>
  );
}
