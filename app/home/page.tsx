"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import BookTransition from "@/app/components/BookTransition";

const tamilRituals = [
  {
    name: "Nalangu / Bride's Haldi",
    description: "A joyful ceremony where turmeric paste is applied to the bride by family and friends. The atmosphere is filled with music, laughter, and warm wishes for the bride's new journey ahead.",
    icon: "🌼",
  },
  {
    name: "Magapadi / Haldi for the Groom",
    description: "The groom is similarly anointed with turmeric paste by his family and friends. This ritual signifies purification and blessing before the wedding ceremonies begin.",
    icon: "🌿",
  },
  {
    name: "Mangalsutra & Sindoor",
    description: "The groom ties the mangalsutra — a sacred necklace signifying the married state — and applies sindoor to the bride's hair partition. This is one of the most sacred moments of a Hindu wedding.",
    icon: "🔴",
  },
  {
    name: "Saptapadi — Seven Steps",
    description: "The couple takes seven steps together around the sacred fire, each step accompanied by a solemn vow. Together they pledge for nourishment, strength, prosperity, family, health, happiness, and eternal friendship.",
    icon: "🔥",
  },
  {
    name: "Ashirvad — Blessings",
    description: "Elders from both families gather to bestow their blessings upon the newlyweds. This warm ceremony is followed by the couple receiving gifts and warm wishes from all who attend.",
    icon: "🙏",
  },
];

const accommodation = [
  { name: "The Leela Palace", type: "Luxury", distance: "~15 min", note: "5-star luxury by the Bay of Bengal." },
  { name: "Taj Coromandel", type: "5-Star", distance: "~25 min", note: "An iconic hotel in the heart of Chennai." },
  { name: "ITC Grand Chola", type: "5-Star", distance: "~20 min", note: "Spacious rooms and impeccable service." },
];

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-14">{children}</section>;
}

export default function HomePage() {
  const [showTransition, setShowTransition] = useState(false);
  const [transitionDone, setTransitionDone] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("doorTransition");
    if (!hasSeen) {
      setShowTransition(true);
      sessionStorage.setItem("doorTransition", "1");
    } else {
      setTransitionDone(true);
    }
  }, []);

  const handleTransitionComplete = () => {
    setShowTransition(false);
    setTransitionDone(true);
  };

  return (
    <>
      <Nav />
      <AnimatePresence>{showTransition && <BookTransition onComplete={handleTransitionComplete} />}</AnimatePresence>

      <main className="pt-14 bg-cream">
        <Section id="hero">
          <div className="relative w-full overflow-hidden" style={{ minHeight: "75vh" }}>
            <div className="absolute inset-0">
              <Image src="/illustrations/ae3295efa5ecd78a667c2ff1c3db7a79e5d5dc02.jpg" alt="" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/30 to-cream/80" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-end min-h-[75vh] px-8 pb-20 text-center">
              <div className="max-w-xl mb-8">
                <h1 className="font-display text-burgundy text-5xl md:text-7xl font-light leading-none mb-1">Radhika</h1>
                <h1 className="font-display text-burgundy text-5xl md:text-7xl font-light leading-none mb-6">&amp; Avinash</h1>
                <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
                <p className="font-body text-burgundy/75 text-base leading-relaxed">
                  With hearts full of joy, the Ranganathans and the Karandikas welcome you! Come. Celebrate with us. Laugh loudly. Bless deeply. Love freely. And enjoy wholeheartedly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                <a
                  href="#info"
                  className="flex-1 bg-marigold text-cream font-body text-sm tracking-widest uppercase py-4 px-8 hover:bg-burgundy transition-colors text-center"
                >
                  Download Invitation
                </a>
                <a
                  href="#info"
                  className="flex-1 border border-burgundy text-burgundy font-body text-sm tracking-widest uppercase py-4 px-8 hover:bg-burgundy hover:text-cream transition-colors text-center"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="info">
          <div className="px-6 py-16 max-w-2xl mx-auto space-y-10">
            <div className="text-center">
              <h2 className="font-display text-burgundy text-3xl font-light mb-2">Info</h2>
              <div className="w-12 h-px bg-gold/40 mx-auto" />
            </div>

            <div className="space-y-8">
              <div>
                <p className="font-body text-xs text-marigold tracking-widest uppercase mb-1">When</p>
                <p className="font-display text-burgundy text-xl">02 July, 11:00 onwards</p>
              </div>
              <div className="w-full h-px bg-gold/20" />
              <div>
                <p className="font-body text-xs text-marigold tracking-widest uppercase mb-1">Where</p>
                <p className="font-display text-burgundy text-xl leading-snug">
                  Dwaraka Palace<br />
                  <span className="text-burgundy/60 text-base font-body text-sm">
                    1st Sea Ward Road, Valmiki Nagar,<br />Thiruvanmiyur, Chennai 41
                  </span>
                </p>
              </div>
              <div className="w-full h-px bg-gold/20" />
              <div>
                <h3 className="font-display italic text-burgundy/70 text-sm mb-2">A Presence-First Celebration</h3>
                <p className="font-body text-burgundy/70 text-sm leading-relaxed">
                  To ensure an intimate atmosphere, we will be masking guest phone cameras at the door. While you'll have full access to your phone for calls and texts, we kindly ask that you join us in a camera-free environment. Our photographers will be delighted to share all the special moments with you later!
                </p>
              </div>
              <div className="w-full h-px bg-gold/20" />
              <div>
                <h3 className="font-display italic text-burgundy/70 text-sm mb-2">Photography</h3>
                <p className="font-body text-burgundy/70 text-sm leading-relaxed">
                  Our official photography team will capture all the special moments, and we'll be delighted to share the memories with you. Specially for you, we have planned a photo booth. Strike a pose, make a pout, smile — our photographers will be delighted to capture.
                </p>
              </div>
              <div className="w-full h-px bg-gold/20" />
              <div className="text-center py-2">
                <p className="font-display italic text-burgundy text-xl mb-1">What to bring</p>
                <p className="font-display text-burgundy/60 text-base">Blessings! Nothing else!</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="schedule">
          <div className="bg-blush/15 px-6 py-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-burgundy text-3xl font-light mb-2">Schedule</h2>
                <div className="w-12 h-px bg-gold/40 mx-auto mb-4" />
                <p className="font-body text-burgundy/60 text-sm max-w-md mx-auto leading-relaxed">
                  An overview of the ceremonies and celebrations. Details and timings will be shared with your invite.
                </p>
              </div>
              <div className="space-y-5">
                {tamilRituals.map((ritual) => (
                  <div key={ritual.name} className="bg-cream border border-gold/25 p-6 flex gap-4">
                    <span className="text-2xl flex-shrink-0">{ritual.icon}</span>
                    <div>
                      <h3 className="font-display text-burgundy text-lg font-light mb-1">{ritual.name}</h3>
                      <p className="font-body text-burgundy/60 text-sm leading-relaxed">{ritual.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="venue">
          <div className="px-6 py-16 max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-burgundy text-3xl font-light mb-2">Venue</h2>
              <div className="w-12 h-px bg-gold/40 mx-auto" />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-square bg-blush/30 border border-gold/20 flex items-center justify-center">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="opacity-20">
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-burgundy text-lg font-light mb-3">How to Get There</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blush/15 border border-gold/20 p-4">
                    <p className="font-body text-xs text-marigold tracking-widest uppercase mb-1">By Air</p>
                    <p className="font-body text-burgundy/60 text-xs leading-relaxed">Chennai Airport (MAA) — ~35 min by cab. Book Ola/Uber in advance.</p>
                  </div>
                  <div className="bg-blush/15 border border-gold/20 p-4">
                    <p className="font-body text-xs text-marigold tracking-widest uppercase mb-1">By Train</p>
                    <p className="font-body text-burgundy/60 text-xs leading-relaxed">Chennai Central / Egmore — ~20–30 min by cab to Thiruvanmiyur.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-burgundy text-lg font-light mb-2">Address</h3>
                <p className="font-body text-burgundy/70 text-sm mb-3">
                  Dwaraka Palace, 1st Sea Ward Road, Valmiki Nagar, Thiruvanmiyur, Chennai 600 041
                </p>
                <a href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-xs text-teal hover:text-burgundy transition-colors">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>

              <div className="w-full h-40 bg-blush/20 border border-gold/20 flex items-center justify-center rounded-sm mb-4">
                <div className="text-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="mx-auto mb-2 opacity-30">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <p className="font-body text-xs text-burgundy/40">Google Maps</p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-burgundy text-lg font-light mb-4">Where to Stay</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {accommodation.map((h) => (
                    <div key={h.name} className="border border-gold/20 p-4">
                      <div className="w-full aspect-[4/3] bg-blush/20 border border-gold/10 mb-3 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="opacity-20">
                          <rect x="2" y="7" width="20" height="15" rx="1" />
                          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                        </svg>
                      </div>
                      <span className="font-body text-[10px] text-marigold tracking-widest uppercase">{h.type}</span>
                      <p className="font-display text-burgundy text-sm font-light mt-0.5 mb-1">{h.name}</p>
                      <p className="font-body text-xs text-burgundy/40 mb-2">{h.distance} from venue</p>
                      <p className="font-body text-xs text-burgundy/50 leading-relaxed">{h.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="story">
          <div className="bg-blush/10 px-6 py-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-burgundy text-3xl font-light mb-2">Our Story</h2>
                <div className="w-12 h-px bg-gold/40 mx-auto" />
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "How We Met",
                    body: "Placeholder — Radhika and Avinash met through a close friend at a gathering in Chennai. What started as a casual conversation turned into late-night phone calls, and soon enough, neither could imagine a day without talking to each other. The rest, as they say, is history.",
                  },
                  {
                    title: "The Proposal",
                    body: "Placeholder — Avinash planned something truly special. With the snow-capped Alps as his witness and a ring hidden in his pocket, he knelt down and asked Radhika the question that would change their lives forever. There were happy tears, an avalanche of emotions, and a yes that came without a moment's hesitation.",
                  },
                  {
                    title: "The Little Things",
                    body: "Placeholder — Every couple has their language. For Radhika, it's the way Avinash remembers the smallest details. For Avinash, it's how Radhika makes even the ordinary feel extraordinary. Their WhatsApp chats are a novel, their photos full of candids, and their inside jokes could fill a book.",
                  },
                  {
                    title: "July 2026",
                    body: "Placeholder — And so here we are. Two people who found each other against all odds, ready to begin the most beautiful chapter yet. We can't wait to celebrate this moment with the people who mean the most to us — that's you. Thank you for being part of our story.",
                  },
                ].map((chapter) => (
                  <div key={chapter.title} className="border-t border-gold/20 pt-6">
                    <h3 className="font-display text-burgundy text-xl font-light mb-2">{chapter.title}</h3>
                    <p className="font-body text-burgundy/60 text-sm leading-relaxed">{chapter.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <footer id="faq" className="bg-burgundy py-10 px-6 text-center scroll-mt-14">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h2 className="font-display text-cream/80 text-2xl font-light mb-3">FAQ</h2>
              <div className="w-12 h-px bg-gold/20 mx-auto mb-4" />
              <div className="space-y-4 text-left max-w-sm mx-auto">
                {[
                  { q: "Can I take photos?", a: "Camera masking at the door. Phones are fine for calls/texts. Our photographers share everything later via the gallery." },
                  { q: "What should I wear?", a: "Traditional Indian attire — \"Come dressed for your favourite wedding.\"" },
                  { q: "Gifts?", a: "केवलम् आशीर्वाद: — Blessings only. Nothing else requested." },
                  { q: "Parking?", a: "Available at Dwaraka Palace. Ola/Uber recommended for ease." },
                ].map((item) => (
                  <div key={item.q} className="border-t border-gold/10 pt-3">
                    <p className="font-body text-xs text-cream/60 uppercase tracking-widest mb-1">{item.q}</p>
                    <p className="font-body text-xs text-cream/40 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-12 h-px bg-gold/20 mx-auto mb-4" />
            <Image src="/logo-transparent.png" alt="R&A" width={48} height={48} className="mx-auto mb-3 opacity-70" />
            <p className="font-display italic text-cream/70 text-base mb-1">Radhika &amp; Avinash</p>
            <p className="font-body text-cream/40 text-xs tracking-widest">02 July 2026 · Chennai</p>
          </div>
        </footer>
      </main>
    </>
  );
}
