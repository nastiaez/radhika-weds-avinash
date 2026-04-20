"use client";

import Nav from "@/app/components/Nav";
import { useState } from "react";

const faqs = [
  {
    category: "Phone & Photography",
    items: [
      {
        q: "Can I take photos at the wedding?",
        a: "Camera masking at the door. Your phone is fine for calls and texts. Our photographers capture everything and will share it with you later via the gallery.",
      },
      {
        q: "Will photos be available after the wedding?",
        a: "Yes — watermarked previews are visible to all. Sign in with your Google account to download full-resolution photos from the gallery.",
      },
    ],
  },
  {
    category: "Dress Code",
    items: [
      {
        q: "What should I wear?",
        a: "Traditional Indian attire — \"Come dressed for your favourite wedding.\" We would love to see you in all your traditional splendour.",
      },
    ],
  },
  {
    category: "Gifts",
    items: [
      {
        q: "What gift should I bring?",
        a: "केवलम् आशीर्वाद: — Blessings only, nothing else requested. Your presence is the greatest gift.",
      },
    ],
  },
  {
    category: "Venue & Getting Here",
    items: [
      {
        q: "Where is the wedding?",
        a: "Dwaraka Palace, 1st Sea Ward Road, Valmiki Nagar, Thiruvanmiyur, Chennai 600 041.",
      },
      {
        q: "Is parking available?",
        a: "Yes. We recommend arriving by cab (Ola/Uber) for ease, especially during peak hours.",
      },
      {
        q: "What time should I arrive on 2 July?",
        a: "The wedding ceremony begins at 11:00 AM. We recommend arriving 15–20 minutes early.",
      },
    ],
  },
  {
    category: "Food",
    items: [
      {
        q: "Will vegetarian options be available?",
        a: "Yes, both vegetarian and non-vegetarian options will be served at the luncheon.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gold/15">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="font-body text-sm text-burgundy pr-4">{q}</span>
        <span className={`text-marigold text-lg transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="pb-4 pr-8">
          <p className="font-body text-sm text-burgundy/60 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main className="pt-14 bg-cream min-h-screen">
        <section className="py-16 px-6 text-center bg-blush/20">
          <p className="font-body text-xs text-marigold tracking-widest uppercase mb-3">Answers to your questions</p>
          <h1 className="font-display text-burgundy text-5xl font-light mb-4">FAQ</h1>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </section>

        <section className="py-12 px-6">
          <div className="max-w-2xl mx-auto space-y-10">
            {faqs.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="font-display text-burgundy text-xl font-light">{group.category}</h2>
                  <div className="h-px flex-1 bg-gold/20" />
                </div>
                <div>
                  {group.items.map((item) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
