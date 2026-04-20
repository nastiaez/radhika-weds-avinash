"use client";

import Nav from "@/app/components/Nav";
import { useState } from "react";

const faqs = [
  {
    category: "Phone & Photography",
    items: [
      {
        q: "Can I take photos at the wedding?",
        a: "While you'll have full access to your phone for calls and texts, we kindly ask that you join us in a camera-free environment. Our photographers will be delighted to share all the special moments with you later.",
      },
      {
        q: "Will photos be shared after the wedding?",
        a: "Yes! Our photographer will share all the photos via our gallery page shortly after the wedding. You'll be able to view watermarked previews and download high-resolution images after signing in with your Google account.",
      },
    ],
  },
  {
    category: "Dress Code",
    items: [
      {
        q: "What should I wear?",
        a: "Traditional Indian attire — \"Come dressed for your favourite wedding.\" We'd love to see our guests in the full splendour of their traditional finest.",
      },
      {
        q: "Does this apply to children too?",
        a: "Yes, traditional attire for all guests including children is encouraged. There's nothing quite like a little one in a lehenga or sherwani!",
      },
    ],
  },
  {
    category: "Gifts",
    items: [
      {
        q: "What gift should I bring?",
        a: "Your blessings are the only gift we need. We have been blessed with everything we need, and ask that you bring only your warmth and joy. केवलम् आशीर्वाद: (Blessings only — nothing else requested).",
      },
    ],
  },
  {
    category: "Venue & Logistics",
    items: [
      {
        q: "Where is the wedding taking place?",
        a: "Dwaraka Palace, 1st Sea Ward Road, Valmiki Nagar, Thiruvanmiyur, Chennai 600 041. Find full directions and a map on our Venue page.",
      },
      {
        q: "Is parking available?",
        a: "Yes, parking is available at Dwaraka Palace. For outstation guests, we recommend arriving by cab (Ola/Uber) for ease.",
      },
      {
        q: "What time should I arrive?",
        a: "The wedding ceremony begins at 11:00 AM on 2 July 2026. We recommend arriving 15–20 minutes early. Day 1 events begin at 6:00 PM on 1 July 2026 (for invited guests).",
      },
    ],
  },
  {
    category: "Food & Dietary",
    items: [
      {
        q: "Will vegetarian options be available?",
        a: "Yes — the wedding menu will accommodate all dietary preferences. Vegetarian and non-vegetarian options will be available at the luncheon.",
      },
    ],
  },
  {
    category: "Ceremonies & Rituals",
    items: [
      {
        q: "Can you explain the wedding rituals?",
        a: "Absolutely! We have a dedicated Rituals page with warm, accessible explanations of the ceremony highlights from both Day 1 and Day 2. Visit the Rituals page to learn more before you arrive.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-saffron/15">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-body text-sm text-maroon pr-4">{q}</span>
        <span className={`text-saffron text-xl transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="pb-5 pr-8 animate-slide-up">
          <p className="font-body text-sm text-warm-gray leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 bg-cream min-h-screen">
        <section className="py-20 px-6 text-center bg-ivory">
          <p className="font-body text-xs text-saffron tracking-widest uppercase mb-3">
            Everything you need to know
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-maroon font-light mb-4">FAQ</h1>
          <div className="w-16 h-px bg-saffron/40 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-sm max-w-sm mx-auto">
            Answers to your most common questions about the celebrations.
          </p>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="font-display text-2xl text-maroon font-light">{group.category}</h2>
                  <div className="h-px flex-1 bg-saffron/20" />
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

        <section className="py-14 px-6 bg-ivory text-center">
          <p className="font-body text-warm-gray text-sm mb-2">Have a question not listed here?</p>
          <p className="font-body text-warm-gray text-xs opacity-60">
            Reach out to the family — contact details will be shared via your invitation.
          </p>
        </section>
      </main>
    </>
  );
}
