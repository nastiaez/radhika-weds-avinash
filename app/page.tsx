"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashPage() {
  const router = useRouter();

  function selectLanguage(lang: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
    router.push("/home");
  }

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/illustrations/ae3295efa5ecd78a667c2ff1c3db7a79e5d5dc02.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center animate-fade-in">
        <Image
          src="/logo-transparent.png"
          alt="Radhika & Avinash monogram"
          width={180}
          height={180}
          className="mb-8 drop-shadow-md"
          priority
        />

        <p className="font-display text-warm-gray text-lg tracking-[0.2em] uppercase mb-2">
          The wedding of
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-maroon font-light mb-1 leading-tight">
          Radhika
        </h1>
        <p className="font-display text-2xl text-saffron italic mb-1">&amp;</p>
        <h1 className="font-display text-5xl md:text-7xl text-maroon font-light mb-6 leading-tight">
          Avinash
        </h1>

        <p className="font-body text-warm-gray text-sm tracking-widest uppercase mb-10">
          1 &amp; 2 July 2026 · Chennai
        </p>

        <div className="divider-ornament w-48 mb-10">
          <span className="font-display text-saffron text-xl">✦</span>
        </div>

        <p className="font-body text-warm-gray text-sm mb-6 tracking-wide">
          Choose your language
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <button
            onClick={() => selectLanguage("en")}
            className="flex-1 border border-maroon text-maroon font-body text-sm tracking-widest uppercase py-3 px-6 hover:bg-maroon hover:text-cream transition-all duration-300"
          >
            English
          </button>
          <button
            onClick={() => selectLanguage("ta")}
            className="flex-1 border border-maroon text-maroon font-body text-sm py-3 px-6 hover:bg-maroon hover:text-cream transition-all duration-300"
          >
            <span className="block text-base">தமிழ்</span>
            <span className="block text-xs tracking-wide opacity-70">Tamil</span>
          </button>
          <button
            onClick={() => selectLanguage("mr")}
            className="flex-1 border border-maroon text-maroon font-body text-sm py-3 px-6 hover:bg-maroon hover:text-cream transition-all duration-300"
          >
            <span className="block text-base">मराठी</span>
            <span className="block text-xs tracking-wide opacity-70">Marathi</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 text-center text-warm-gray text-xs font-body tracking-widest opacity-50">
        RADHIKA-WEDS-AVINASH.COM
      </div>
    </main>
  );
}
