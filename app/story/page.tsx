import Nav from "@/app/components/Nav";
import Image from "next/image";

const chapters = [
  {
    number: "01",
    title: "How We Met",
    subtitle: "The beginning",
    body: "Placeholder text — the couple will share how their story began. This chapter will be filled with warmth, coincidence, and perhaps a little fate.",
    image: null,
    imageAlt: "How we met",
    flip: false,
  },
  {
    number: "02",
    title: "A Chapter Together",
    subtitle: "A milestone moment",
    body: "Placeholder text — an optional milestone chosen by Radhika and Avinash. A memory that marked a turning point in their journey together.",
    image: null,
    imageAlt: "A milestone",
    flip: true,
  },
  {
    number: "03",
    title: "The Proposal",
    subtitle: "Salzburg, Austria",
    body: "Placeholder text — the story of the proposal in Salzburg. Set against the backdrop of one of Europe's most romantic cities, this is the moment everything changed.",
    image: null,
    imageAlt: "The Salzburg proposal",
    flip: false,
    hero: true,
    quote: "\"Will you marry me?\"",
  },
  {
    number: "04",
    title: "And Now — July 2026",
    subtitle: "Chennai",
    body: "Surrounded by family, friends, and everything we love — we begin this next chapter. Thank you for being part of our story.",
    image: null,
    imageAlt: "Recent portrait",
    flip: true,
  },
];

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[4/5] bg-ivory border border-saffron/20 flex flex-col items-center justify-center gap-2">
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#C8702A" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="font-body text-xs text-warm-gray tracking-wide">{label}</span>
    </div>
  );
}

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 bg-cream">
        <section className="py-20 px-6 text-center">
          <p className="font-body text-xs text-saffron tracking-widest uppercase mb-3">Est. TBD</p>
          <h1 className="font-display text-5xl md:text-7xl text-maroon font-light mb-4">Our Story</h1>
          <div className="w-16 h-px bg-saffron/40 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-sm max-w-md mx-auto leading-relaxed">
            From a chance encounter to a promise for a lifetime — this is how Radhika and Avinash found each other.
          </p>
        </section>

        {chapters.map((chapter, i) => (
          <section
            key={chapter.number}
            className={`py-16 px-6 ${i % 2 === 0 ? "bg-cream" : "bg-ivory"}`}
          >
            <div className="max-w-5xl mx-auto">
              {chapter.hero ? (
                <div className="flex flex-col items-center text-center">
                  <p className="font-body text-xs text-saffron tracking-widest uppercase mb-2">
                    {chapter.subtitle}
                  </p>
                  <h2 className="font-display text-5xl md:text-6xl text-maroon font-light mb-6">
                    {chapter.title}
                  </h2>
                  <div className="w-full max-w-2xl mb-8">
                    <ImagePlaceholder label="Proposal photo — Salzburg" />
                  </div>
                  <blockquote className="font-display italic text-saffron text-3xl md:text-4xl mb-6 max-w-lg">
                    {chapter.quote}
                  </blockquote>
                  <p className="font-body text-warm-gray text-sm leading-relaxed max-w-xl">
                    {chapter.body}
                  </p>
                </div>
              ) : (
                <div
                  className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${
                    chapter.flip ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <ImagePlaceholder label={chapter.imageAlt} />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="font-body text-xs text-saffron tracking-widest uppercase mb-2">
                      Chapter {chapter.number}
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl text-maroon font-light mb-2">
                      {chapter.title}
                    </h2>
                    <p className="font-display italic text-warm-gray text-xl mb-6">{chapter.subtitle}</p>
                    <div className="w-10 h-px bg-saffron/40 mb-6" />
                    <p className="font-body text-warm-gray text-sm leading-relaxed">{chapter.body}</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="bg-maroon py-20 px-6 text-center">
          <p className="font-display italic text-cream/70 text-2xl md:text-3xl mb-4">
            And so begins forever.
          </p>
          <p className="font-body text-cream/50 text-xs tracking-widest mb-8">2 JULY 2026 · CHENNAI</p>
          <Image src="/logo-transparent.png" alt="R&A" width={60} height={60} className="mx-auto opacity-50" />
        </section>
      </main>
    </>
  );
}
