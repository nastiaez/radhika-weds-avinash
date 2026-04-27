"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import BookTransition from "@/app/components/BookTransition";

const tamilRituals = [
  {
    name: "Nalangu",
    time: "11:00 am",
    description: "A joyful pre-wedding ceremony where turmeric paste is applied to the bride by family and friends. The atmosphere fills with music, laughter, and warm wishes for the journey ahead.",
    tierB: false,
  },
  {
    name: "Kashi Yatra",
    time: "12:00 pm",
    description: "The groom symbolically sets off on a pilgrimage to Kashi, renouncing worldly life — until the bride's father lovingly persuades him to return and marry his daughter instead.",
    tierB: false,
  },
  {
    name: "Oonjal & Maalai Maatral",
    time: "12:30 pm",
    description: "The couple sits on a decorated swing as family showers them with flowers. They exchange garlands three times as an expression of love and acceptance, to the sound of nadaswaram and cheers.",
    tierB: false,
  },
  {
    name: "Muhurtham — The Wedding Ceremony",
    time: "1:00 pm",
    description: "The sacred heart of the day. The groom ties the Thaali around the bride's neck as the auspicious moment arrives, followed by Saptapadi — seven steps and seven vows taken together around the sacred fire.",
    tierB: false,
  },
  {
    name: "Lunch & Celebrations",
    time: "2:30 pm onwards",
    description: "A traditional Tamil feast served on banana leaves, followed by music, dancing, and time with the people who matter most.",
    tierB: false,
  },
];

const accommodation = [
  { name: "Vivanta Chennai", type: "5-Star", distance: "~10 min", note: "Contemporary luxury in the heart of the city." },
  { name: "Radisson Blu GRT", type: "5-Star", distance: "~15 min", note: "Well-appointed rooms close to the beach." },
  { name: "The Raintree Hotel", type: "4-Star", distance: "~12 min", note: "Charming boutique hotel near the seafront." },
];

function Divider() {
  return (
    <div className="divider-ornament w-full max-w-2xl mx-auto">
      <span>✦</span>
    </div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-16">{children}</section>;
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

      <main className="pt-16 bg-cream">

        {/* HERO */}
        <Section id="hero">
          <div className="bg-cream px-8 py-20 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-full h-[45vh] relative mb-10">
                <Image
                  src="/illustrations/ae3295efa5ecd78a667c2ff1c3db7a79e5d5dc02.jpg"
                  alt="Radhika and Avinash"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              <div className="divider-ornament max-w-xs mx-auto">
                <span>✦</span>
              </div>

              <h1 className="font-display font-semibold text-warm-black mt-10 mb-6" style={{ fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1 }}>
                Radhika &amp; Avinash
              </h1>

              <p className="font-body font-light text-warm-black/60 text-xs tracking-[0.2em] uppercase mb-12">
                2 July 2026 · Dwaraka Palace, Chennai
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/manjal-pathirikkai.pdf"
                  download
                  className="btn-burgundy"
                >
                  பத்திரிகை பதிவிறக்கம்
                </a>
                <button
                  onClick={() => document.getElementById("info")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-outline"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </Section>

        <div className="h-px bg-gold max-w-2xl mx-auto" />

        {/* INFO */}
        <Section id="info">
          <div className="bg-burgundy px-8 py-24">
            <div className="max-w-2xl mx-auto">
              <p className="section-label text-center mb-2">DETAILS</p>
              <h2 className="font-display font-medium text-cream text-center mt-6 mb-12" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
                Info
              </h2>

              <div className="space-y-0">
                <div className="py-6 border-t border-burgundy/30">
                  <p className="font-display italic text-cream text-2xl mb-1">02 July, 11:00 onwards</p>
                  <p className="font-body font-light text-cream/70 text-sm">Wedding Day</p>
                </div>

                <div className="h-px bg-gold/40" />

                <div className="py-6 border-t border-burgundy/30">
                  <p className="font-display italic text-cream text-2xl mb-2">Dwaraka Palace</p>
                  <p className="font-body font-light text-cream/70 text-sm leading-relaxed">
                    1st Sea Ward Road, Valmiki Nagar,<br />
                    Thiruvanmiyur, Chennai 600 041
                  </p>
                </div>

                <div className="h-px bg-gold/40" />

                <div className="py-6 border-t border-burgundy/30">
                  <p className="font-display italic text-cream text-xl mb-3">A Presence-First Celebration</p>
                  <p className="font-body font-light text-cream/70 text-base leading-relaxed">
                    To ensure an intimate atmosphere, we will be masking guest phone cameras at the door. While you&apos;ll have full access to your phone for calls and texts, we kindly ask that you join us in a camera-free environment. Our photographers will be delighted to share all the special moments with you later!
                  </p>
                </div>

                <div className="h-px bg-gold/40" />

                <div className="py-6 border-t border-burgundy/30">
                  <p className="font-display italic text-cream text-xl mb-3">Photography</p>
                  <p className="font-body font-light text-cream/70 text-base leading-relaxed">
                    Our official photography team will capture all the special moments, and we&apos;ll be delighted to share the memories with you. Specially for you, we have planned a photo booth. Strike a pose, make a pout, smile — our photographers will be delighted to capture.
                  </p>
                </div>

                <div className="h-px bg-gold/40" />

                <div className="py-6 border-t border-burgundy/30 text-center">
                  <p className="font-display italic text-cream text-xl mb-1">What to bring</p>
                  <p className="font-display text-cream/80 text-base">Blessings! Nothing else!</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className="h-px bg-gold" />

        {/* SCHEDULE */}
        <Section id="schedule">
          <div className="bg-burgundy px-8 py-24">
            <div className="max-w-2xl mx-auto">
              <p className="section-label text-center mb-2">CEREMONIES</p>
              <h2 className="font-display font-medium text-cream text-center mt-6 mb-12" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
                Schedule
              </h2>

              <div className="space-y-0">
                {tamilRituals.map((ritual, i) => (
                  <div key={ritual.name}>
                    {i > 0 && <div className="h-px bg-gold/40" />}
                    <div className="py-7 border-t border-burgundy/30">
                      <div className="flex items-baseline gap-3">
                        <p className="font-display italic text-cream text-lg flex-shrink-0">{ritual.time}</p>
                        <p className="font-display font-medium text-cream text-xl">
                          {ritual.tierB && <span className="text-forest mr-2">●</span>}
                          {ritual.name}
                        </p>
                      </div>
                      <p className="font-body font-light text-cream/60 text-sm leading-relaxed mt-2 ml-[calc(0.5rem+12px)]">
                        {ritual.description}
                      </p>
                      {ritual.tierB && (
                        <p className="font-body font-light text-forest text-xs tracking-widest uppercase mt-2 ml-[calc(0.5rem+12px)]">
                          Close family
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <div className="h-px bg-gold" />

        {/* VENUE */}
        <Section id="venue">
          <div className="bg-cream px-8 py-24">
            <div className="max-w-2xl mx-auto">
              <p className="section-label text-center mb-2">LOCATION</p>
              <h2 className="font-display font-medium text-warm-black text-center mt-6 mb-12" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
                Venue
              </h2>

              <div className="py-6">
                <p className="font-display italic text-warm-black text-2xl mb-1">Dwaraka Palace</p>
                <p className="font-body font-light text-warm-black/70 text-sm leading-relaxed">
                  1st Sea Ward Road, Valmiki Nagar,<br />
                  Thiruvanmiyur, Chennai 600 041
                </p>
                <a
                  href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-light text-burgundy text-sm underline hover:no-underline transition-all mt-2 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="h-px bg-gold" />

              <div className="py-6">
                <p className="font-body font-light text-warm-black/60 text-xs tracking-[0.2em] uppercase mb-4">How to get there</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-display italic text-warm-black text-lg">By Air</p>
                    <p className="font-body font-light text-warm-black/60 text-sm leading-relaxed mt-1">
                      Chennai Airport (MAA) — ~35 min by cab. Recommend booking Ola or Uber in advance.
                    </p>
                  </div>
                  <div>
                    <p className="font-display italic text-warm-black text-lg">By Train</p>
                    <p className="font-body font-light text-warm-black/60 text-sm leading-relaxed mt-1">
                      Chennai Central / Egmore — ~20–30 min by cab to Thiruvanmiyur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gold" />

              <div className="py-6">
                <p className="font-body font-light text-warm-black/60 text-xs tracking-[0.2em] uppercase mb-6">Where to stay</p>
                <div className="grid grid-cols-3 gap-8">
                  {accommodation.map((h) => (
                    <div key={h.name}>
                      <p className="font-body font-light text-warm-black/40 text-xs tracking-widest uppercase mb-1">{h.type}</p>
                      <p className="font-display font-medium text-warm-black text-base">{h.name}</p>
                      <p className="font-body font-light text-warm-black/50 text-xs mt-1">{h.distance}</p>
                      <p className="font-body font-light text-warm-black/50 text-xs leading-relaxed mt-2">{h.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className="h-px bg-gold" />

        {/* OUR STORY */}
        <Section id="story">
          <div className="bg-cream px-8 py-24">
            <div className="max-w-2xl mx-auto">
              <p className="section-label text-center mb-2">THE COUPLE</p>
              <h2 className="font-display font-medium text-warm-black text-center mt-6 mb-12" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
                Our Story
              </h2>

              <div className="space-y-10">
                {[
                  {
                    title: "How We Met",
                    body: "Placeholder — Radhika and Avinash met through a close friend at a gathering in Chennai. What started as a casual conversation turned into late-night phone calls, and soon enough, neither could imagine a day without talking to each other.",
                  },
                  {
                    title: "The Proposal",
                    body: "Placeholder — Avinash planned something truly special. With the snow-capped Alps as his witness and a ring hidden in his pocket, he knelt down and asked Radhika the question that would change their lives forever. There were happy tears and a yes without a moment's hesitation.",
                  },
                  {
                    title: "The Little Things",
                    body: "Placeholder — Every couple has their language. For Radhika, it's the way Avinash remembers the smallest details. For Avinash, it's how Radhika makes even the ordinary feel extraordinary. Their WhatsApp chats are a novel, their inside jokes could fill a book.",
                  },
                  {
                    title: "July 2026",
                    body: "Placeholder — And so here we are. Two people who found each other against all odds, ready to begin the most beautiful chapter yet. We can't wait to celebrate this moment with the people who mean the most to us — that's you.",
                  },
                ].map((chapter) => (
                  <div key={chapter.title} className="border-t border-gold/30 pt-8">
                    <h3 className="font-display font-medium text-warm-black text-xl mb-3">{chapter.title}</h3>
                    <p className="font-body font-light text-warm-black/70 text-base leading-[1.9]">{chapter.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <div className="bg-cream px-8 py-24">
            <div className="max-w-2xl mx-auto">
              <p className="section-label text-center mb-2">QUESTIONS</p>
              <h2 className="font-display font-medium text-warm-black text-center mt-6 mb-12" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
                FAQ
              </h2>

              <div className="space-y-0">
                {[
                  {
                    q: "Can I take photos at the wedding?",
                    a: "Camera masking at the door. Your phone is fine for calls and texts. Our photographers capture everything and share it via the gallery later.",
                  },
                  {
                    q: "What should I wear?",
                    a: "Traditional Indian attire — \"Come dressed for your favourite wedding.\"",
                  },
                  {
                    q: "Gifts?",
                    a: "केवलम् आशीर्वाद: — Blessings only. Nothing else requested.",
                  },
                  {
                    q: "Parking?",
                    a: "Available at Dwaraka Palace. Ola and Uber are widely available in the area.",
                  },
                  {
                    q: "Will vegetarian food be available?",
                    a: "Yes, both vegetarian and non-vegetarian options will be served at the luncheon.",
                  },
                ].map((item, i) => (
                  <div key={item.q}>
                    {i > 0 && <div className="h-px bg-gold" />}
                    <div className="py-6">
                      <p className="font-display font-medium text-warm-black text-lg mb-2">{item.q}</p>
                      <p className="font-body font-light text-warm-black/60 text-base leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="bg-burgundy px-8 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="h-px bg-gold mb-10" />
            <p className="font-display italic text-cream text-4xl mb-4">Radhika &amp; Avinash</p>
            <p className="font-body font-light text-cream/60 text-xs tracking-[0.2em] uppercase mb-8">
              2 July 2026 · Chennai
            </p>
            <div className="h-px bg-gold/30 mb-8" />
            <p className="font-body font-light text-cream/40 text-xs">
              Made with love
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}
