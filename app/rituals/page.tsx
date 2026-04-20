"use client";

import Nav from "@/app/components/Nav";
import { useEffect, useState } from "react";

const day1Rituals = [
  {
    name: "Engagement Ceremony",
    description: "The formal exchange of rings — marking the beginning of the couple's journey together with the blessing of both families.",
    icon: "💍",
    timing: "6:00 PM — 7:00 PM",
  },
  {
    name: "Reception & Soirée",
    description: "An intimate evening celebration with dinner, music, and heartfelt speeches. Close family and friends come together to toast the couple.",
    icon: "🥂",
    timing: "7:00 PM onwards",
  },
];

const day2Rituals = [
  {
    name: "Muhurtham / Sacred Thread Ceremony",
    description: "The groom is adorned with the sacred thread (muhurtham), signifying his readiness for the wedding rituals. Family elders offer their blessings.",
    icon: "🧵",
    timing: "11:00 AM",
  },
  {
    name: "Kanyadaan",
    description: "One of the most sacred rituals of a Hindu wedding — the father of the bride gives away his daughter to the groom, seeking divine blessings for their union.",
    icon: "🙏",
    timing: "After Muhurtham",
  },
  {
    name: "Saptapadi — Seven Steps",
    description: "The couple takes seven steps together around the sacred fire (agni), each step signifying a vow — for nourishment, strength, prosperity, family, health, happiness, and eternal friendship.",
    icon: "🔥",
    timing: "Core ceremony",
  },
  {
    name: "Sindoor & Mangalsutra",
    description: "The groom applies sindoor (vermilion) to the bride's hair partition and ties the mangalsutra (sacred necklace), signifying their sacred bond of marriage.",
    icon: "🔴",
    timing: "After Saptapadi",
  },
  {
    name: "Ashirwad — Blessings",
    description: "Elders of both families bless the newly married couple. Guests and family members offer their warm wishes and blessings for a happy married life.",
    icon: "✨",
    timing: "Post ceremony",
  },
];

export default function RitualsPage() {
  const [tier, setTier] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("t");
    if (token === "full") {
      sessionStorage.setItem("tier", "full");
      setTier("full");
    } else {
      const stored = sessionStorage.getItem("tier");
      setTier(stored ?? null);
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
            Sacred ceremonies
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-maroon font-light mb-4">Rituals</h1>
          <div className="w-16 h-px bg-saffron/40 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-sm max-w-md mx-auto leading-relaxed">
            A guide to the sacred ceremonies that will unfold over our two-day celebration.
          </p>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl text-maroon font-light">Day 1 — Engagement &amp; Reception</h2>
              <div className="w-12 h-px bg-saffron/40 mx-auto mt-4" />
            </div>
            <div className="space-y-6">
              {day1Rituals.map((ritual) => (
                <div key={ritual.name} className="bg-ivory border border-saffron/15 p-8 flex gap-6">
                  <span className="text-3xl flex-shrink-0">{ritual.icon}</span>
                  <div>
                    <p className="font-body text-xs text-saffron tracking-widest uppercase mb-1">{ritual.timing}</p>
                    <h3 className="font-display text-xl text-maroon font-light mb-2">{ritual.name}</h3>
                    <p className="font-body text-sm text-warm-gray leading-relaxed">{ritual.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {checked && !isFullTier ? (
          <section className="py-16 px-6 bg-ivory text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 border border-saffron/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h2 className="font-display text-2xl text-maroon font-light mb-3">Day 2 Rituals</h2>
              <p className="font-body text-warm-gray text-sm leading-relaxed mb-4">
                The Day 2 wedding ceremony rituals are reserved for guests attending both days.
              </p>
              <p className="font-body text-warm-gray text-xs opacity-60">
                Your invite link grants access to the Wedding Day (2 July) only. Please contact the family if you believe this is an error.
              </p>
            </div>
          </section>
        ) : (
          <section className="py-16 px-6 bg-ivory">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="font-body text-xs text-saffron tracking-widest uppercase mb-2">Close Family &amp; Full Invite</p>
                <h2 className="font-display text-2xl text-maroon font-light">Day 2 — Wedding Ceremony</h2>
                <div className="w-12 h-px bg-saffron/40 mx-auto mt-4" />
              </div>
              <div className="space-y-6">
                {day2Rituals.map((ritual) => (
                  <div key={ritual.name} className="bg-cream border border-saffron/15 p-8 flex gap-6">
                    <span className="text-3xl flex-shrink-0">{ritual.icon}</span>
                    <div>
                      <p className="font-body text-xs text-saffron tracking-widest uppercase mb-1">{ritual.timing}</p>
                      <h3 className="font-display text-xl text-maroon font-light mb-2">{ritual.name}</h3>
                      <p className="font-body text-sm text-warm-gray leading-relaxed">{ritual.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-14 px-6 bg-maroon text-center">
          <p className="font-display italic text-cream/70 text-xl mb-2">
            These rituals connect us to our ancestors and to each other.
          </p>
          <p className="font-body text-cream/40 text-xs tracking-widest">With love and gratitude · Chennai, July 2026</p>
        </section>
      </main>
    </>
  );
}
