"use client";

import Nav from "@/app/components/Nav";
import { useEffect, useState } from "react";

const day1Rituals = [
  { name: "Engagement Ceremony", description: "The formal exchange of rings — marking the beginning of the couple's journey together with the blessing of both families.", icon: "💍", timing: "6:00 PM" },
  { name: "Reception & Soirée", description: "An intimate evening with dinner, music, and heartfelt speeches. Close family and friends come together to toast the couple.", icon: "🥂", timing: "7:00 PM onwards" },
];

const day2Rituals = [
  { name: "Muhurtham / Sacred Thread Ceremony", description: "The groom is adorned with the sacred thread, signifying his readiness for the wedding rituals. Family elders offer their blessings.", icon: "🧵", timing: "11:00 AM" },
  { name: "Kanyadaan", description: "One of the most sacred rituals — the father of the bride gives away his daughter to the groom, seeking divine blessings for their union.", icon: "🙏", timing: "After Muhurtham" },
  { name: "Saptapadi — Seven Steps", description: "The couple takes seven steps around the sacred fire, each step signifying a vow — for nourishment, strength, prosperity, family, health, happiness, and eternal friendship.", icon: "🔥", timing: "Core ceremony" },
  { name: "Sindoor & Mangalsutra", description: "The groom applies sindoor to the bride's hair partition and ties the mangalsutra, signifying their sacred bond of marriage.", icon: "🔴", timing: "After Saptapadi" },
  { name: "Ashirwad — Blessings", description: "Elders of both families bless the newly married couple. Guests and family offer their warm wishes for a happy married life.", icon: "✨", timing: "Post ceremony" },
];

function RitualCard({ ritual }: { ritual: typeof day1Rituals[0] }) {
  return (
    <div className="bg-blush/10 border border-gold/20 p-5 flex gap-4">
      <span className="text-2xl flex-shrink-0">{ritual.icon}</span>
      <div>
        <p className="font-body text-[10px] text-marigold tracking-widest uppercase mb-1">{ritual.timing}</p>
        <h3 className="font-display text-burgundy text-lg font-light mb-1">{ritual.name}</h3>
        <p className="font-body text-burgundy/60 text-xs leading-relaxed">{ritual.description}</p>
      </div>
    </div>
  );
}

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
      <main className="pt-14 bg-cream min-h-screen">
        <section className="py-16 px-6 text-center bg-blush/20">
          <p className="font-body text-xs text-marigold tracking-widest uppercase mb-3">Sacred ceremonies</p>
          <h1 className="font-display text-burgundy text-5xl font-light mb-4">Rituals</h1>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
          <p className="font-body text-burgundy/60 text-sm max-w-md mx-auto mt-4 leading-relaxed">
            A guide to the ceremonies unfolding over our two-day celebration.
          </p>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-burgundy text-xl font-light">Day 1 — Engagement &amp; Reception</h2>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-3" />
            </div>
            <div className="space-y-4">
              {day1Rituals.map((r) => <RitualCard key={r.name} ritual={r} />)}
            </div>
          </div>
        </section>

        {checked && !isFullTier ? (
          <section className="py-12 px-6 bg-blush/20 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-14 h-14 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-xl">🔒</span>
              </div>
              <h2 className="font-display text-burgundy text-xl font-light mb-3">Day 2 Rituals</h2>
              <p className="font-body text-burgundy/60 text-sm leading-relaxed mb-3">
                The Day 2 wedding ceremony rituals are reserved for guests attending both days.
              </p>
              <p className="font-body text-burgundy/40 text-xs">
                Your invite grants access to Wedding Day only. Contact the family if this seems incorrect.
              </p>
            </div>
          </section>
        ) : (
          <section className="py-12 px-6 bg-blush/20">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <p className="font-body text-[10px] text-marigold tracking-widest uppercase mb-2">Close Family &amp; Full Invite</p>
                <h2 className="font-display text-burgundy text-xl font-light">Day 2 — Wedding Ceremony</h2>
                <div className="w-12 h-px bg-gold/40 mx-auto mt-3" />
              </div>
              <div className="space-y-4">
                {day2Rituals.map((r) => <RitualCard key={r.name} ritual={r} />)}
              </div>
            </div>
          </section>
        )}

        <section className="py-10 px-6 bg-burgundy text-center">
          <p className="font-display italic text-cream/70 text-lg mb-2">
            These rituals connect us to our ancestors and to each other.
          </p>
          <p className="font-body text-cream/40 text-[10px] tracking-widest">With love and gratitude · Chennai, July 2026</p>
        </section>
      </main>
    </>
  );
}
