import Nav from "@/app/components/Nav";
import Countdown from "@/app/components/Countdown";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-cream overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/illustrations/dbb2c605bf9345062dcd8685d60b8a81e2dd43d3.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.07]"
              priority
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 animate-fade-in">
            <Image
              src="/logo-transparent.png"
              alt="Radhika & Avinash"
              width={120}
              height={120}
              className="mb-8 drop-shadow"
              priority
            />

            <p className="font-body text-warm-gray text-xs tracking-[0.3em] uppercase mb-4">
              Together with their families
            </p>

            <h1 className="font-display text-6xl md:text-8xl text-maroon font-light leading-none mb-2">
              Radhika
            </h1>
            <p className="font-display text-3xl text-saffron italic mb-2">&amp;</p>
            <h1 className="font-display text-6xl md:text-8xl text-maroon font-light leading-none mb-8">
              Avinash
            </h1>

            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-saffron/40" />
              <p className="font-body text-warm-gray text-sm tracking-[0.2em]">
                1 &amp; 2 JULY 2026 · CHENNAI
              </p>
              <div className="h-px w-12 bg-saffron/40" />
            </div>

            <Countdown />

            <p className="font-display italic text-saffron text-xl mt-10 mb-8">
              Dwaraka Palace, Thiruvanmiyur
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/events"
                className="font-body text-xs tracking-widest uppercase bg-maroon text-cream py-3 px-8 hover:bg-deep-maroon transition-colors"
              >
                View Events
              </Link>
              <Link
                href="/story"
                className="font-body text-xs tracking-widest uppercase border border-maroon text-maroon py-3 px-8 hover:bg-maroon hover:text-cream transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-body text-xs text-saffron tracking-widest uppercase mb-3">Save to your calendar</p>
              <h2 className="font-display text-4xl text-maroon font-light">The Celebrations</h2>
              <div className="w-16 h-px bg-saffron/40 mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cream p-8 border border-saffron/20">
                <p className="font-body text-xs text-saffron tracking-widest uppercase mb-1">Day 1 — Tier B Only</p>
                <h3 className="font-display text-3xl text-maroon font-light mb-2">Engagement &amp; Reception</h3>
                <p className="font-body text-warm-gray text-sm mb-1">Wednesday, 1 July 2026</p>
                <p className="font-body text-warm-gray text-sm mb-4">6:00 PM onwards</p>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  Soirée — an intimate evening with close family celebrating the engagement and reception.
                </p>
              </div>

              <div className="bg-cream p-8 border border-saffron/20">
                <p className="font-body text-xs text-saffron tracking-widest uppercase mb-1">Day 2 — All Guests</p>
                <h3 className="font-display text-3xl text-maroon font-light mb-2">Wedding &amp; Luncheon</h3>
                <p className="font-body text-warm-gray text-sm mb-1">Thursday, 2 July 2026</p>
                <p className="font-body text-warm-gray text-sm mb-4">11:00 AM onwards</p>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  The main wedding ceremony followed by a celebratory luncheon for all guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-body text-xs text-saffron tracking-widest uppercase mb-3">Take a piece with you</p>
              <h2 className="font-display text-4xl text-maroon font-light">Invitations</h2>
              <div className="w-16 h-px bg-saffron/40 mx-auto mt-4" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-saffron/30 p-8 text-center hover:border-saffron transition-colors">
                <div className="w-16 h-20 bg-ivory border border-saffron/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-maroon text-2xl">R&amp;A</span>
                </div>
                <h3 className="font-display text-xl text-maroon mb-2">Modern Invitation</h3>
                <p className="font-body text-warm-gray text-xs mb-6 leading-relaxed">
                  The original printed wedding card — elegant and timeless.
                </p>
                <button className="font-body text-xs tracking-widest uppercase bg-maroon text-cream py-2 px-6 w-full hover:bg-deep-maroon transition-colors opacity-50 cursor-not-allowed">
                  Download Invitation
                </button>
                <p className="font-body text-xs text-warm-gray mt-2 opacity-60">Coming soon</p>
              </div>

              <div className="border border-saffron/30 p-8 text-center bg-[#FFFBF0] hover:border-saffron transition-colors">
                <div className="w-16 h-20 bg-[#FFF3CC] border border-saffron/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-saffron text-lg">மஞ்சள்</span>
                </div>
                <h3 className="font-display text-xl text-maroon mb-2">மஞ்சள் பத்திரிகை</h3>
                <p className="font-body text-warm-gray text-xs mb-6 leading-relaxed">
                  Traditional Tamil yellow invitation — Manjal Pathirikkai for our elders.
                </p>
                <button className="font-body text-xs tracking-widest uppercase bg-saffron text-cream py-2 px-6 w-full hover:bg-maroon transition-colors opacity-50 cursor-not-allowed">
                  பத்திரிகை பதிவிறக்கம்
                </button>
                <p className="font-body text-xs text-warm-gray mt-2 opacity-60">Coming soon</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-maroon py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-display italic text-cream/70 text-lg mb-4">
              "While you'll have full access to your phone for calls and texts, we kindly ask that you join us in a camera-free environment."
            </p>
            <div className="w-12 h-px bg-saffron/60 mx-auto mb-4" />
            <p className="font-body text-cream/50 text-xs tracking-widest">
              Our photographers will share all the special moments with you later.
            </p>
          </div>
        </section>

        <footer className="bg-cream border-t border-saffron/20 py-10 px-6 text-center">
          <Image
            src="/logo-transparent.png"
            alt="R&A"
            width={50}
            height={50}
            className="mx-auto mb-4 opacity-60"
          />
          <p className="font-display text-maroon text-xl mb-1">Radhika &amp; Avinash</p>
          <p className="font-body text-warm-gray text-xs tracking-widest">2 JULY 2026 · CHENNAI</p>
        </footer>
      </main>
    </>
  );
}
