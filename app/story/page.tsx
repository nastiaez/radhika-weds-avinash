import Nav from "@/app/components/Nav";
import Link from "next/link";

const chapters = [
  {
    number: "01",
    title: "How We Met",
    subtitle: "The beginning",
    body: "Placeholder — the couple will share how their story began. Full of warmth, coincidence, and perhaps a little fate.",
    flip: false,
  },
  {
    number: "02",
    title: "A Milestone",
    subtitle: "A moment to remember",
    body: "Placeholder — an optional chapter chosen by Radhika and Avinash marking a turning point in their journey together.",
    flip: true,
  },
  {
    number: "03",
    title: "The Proposal",
    subtitle: "Salzburg, Austria",
    body: "Placeholder — the story of the proposal set against one of Europe's most romantic cities. The moment everything changed.",
    flip: false,
    hero: true,
    quote: "\"Will you marry me?\"",
  },
  {
    number: "04",
    title: "And Now — July 2026",
    subtitle: "Chennai",
    body: "Surrounded by family, friends, and everything we love — we begin this next chapter. Thank you for being part of our story.",
    flip: true,
  },
];

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[4/5] bg-blush/30 border border-gold/20 flex flex-col items-center justify-center gap-2">
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="opacity-30">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="font-body text-xs text-burgundy/40">{label}</span>
    </div>
  );
}

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main className="pt-14 bg-cream">
        <section className="py-16 px-6 text-center bg-blush/20">
          <p className="font-body text-xs text-marigold tracking-widest uppercase mb-3">Est. TBD</p>
          <h1 className="font-display text-burgundy text-5xl font-light mb-4">Our Story</h1>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
          <p className="font-body text-burgundy/60 text-sm max-w-md mx-auto mt-4 leading-relaxed">
            From a chance encounter to a promise for a lifetime.
          </p>
        </section>

        {chapters.map((chapter, i) => (
          <section key={chapter.number} className={`py-12 px-6 ${i % 2 === 0 ? "bg-cream" : "bg-blush/10"}`}>
            <div className="max-w-4xl mx-auto">
              {chapter.hero ? (
                <div className="flex flex-col items-center text-center">
                  <p className="font-body text-xs text-marigold tracking-widest uppercase mb-2">{chapter.subtitle}</p>
                  <h2 className="font-display text-burgundy text-4xl font-light mb-6">{chapter.title}</h2>
                  <div className="w-full max-w-lg mb-8">
                    <PhotoPlaceholder label="Proposal photo — Salzburg" />
                  </div>
                  <blockquote className="font-display italic text-burgundy text-2xl md:text-3xl mb-5 max-w-lg">
                    {chapter.quote}
                  </blockquote>
                  <p className="font-body text-burgundy/60 text-sm leading-relaxed max-w-xl">{chapter.body}</p>
                </div>
              ) : (
                <div className={`flex flex-col md:flex-row gap-8 md:gap-14 items-center ${chapter.flip ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-full md:w-1/2">
                    <PhotoPlaceholder label={chapter.title} />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="font-body text-[10px] text-marigold tracking-widest uppercase mb-2">Chapter {chapter.number}</p>
                    <h2 className="font-display text-burgundy text-3xl font-light mb-1">{chapter.title}</h2>
                    <p className="font-display italic text-burgundy/50 text-lg mb-4">{chapter.subtitle}</p>
                    <div className="w-8 h-px bg-gold/40 mb-4" />
                    <p className="font-body text-burgundy/60 text-sm leading-relaxed">{chapter.body}</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="py-12 px-6 text-center">
          <Link href="/home" className="font-body text-xs text-teal hover:text-burgundy tracking-widest uppercase transition-colors">
            ← Back to Home
          </Link>
        </section>
      </main>
    </>
  );
}
