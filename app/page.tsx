"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="mb-10">
          <Image src="/logo-transparent.png" alt="R&A" width={120} height={120} priority />
        </div>

        <p className="font-display italic text-warm-black text-lg mb-12 opacity-70">
          With hearts full of joy
        </p>

        <h1 className="font-display text-warm-black text-4xl md:text-5xl font-semibold mb-1">
          The Ranganathans &amp; Karandikars
        </h1>
        <p className="font-body text-warm-black/60 text-sm mb-12">welcome you</p>

        <div className="divider-ornament w-48 mb-10">
          <span>✦</span>
        </div>

        <p className="font-body text-warm-black/50 text-xs tracking-widest uppercase mb-6">
          Select your language
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
          <button
            onClick={() => selectLanguage("en")}
            className="flex-1 border border-burgundy text-warm-black font-body text-xs tracking-widest uppercase py-3 px-4 hover:bg-burgundy hover:text-cream transition-all duration-300"
          >
            English
          </button>
          <button
            onClick={() => selectLanguage("ta")}
            className="flex-1 border border-burgundy text-warm-black font-body text-sm py-3 px-4 hover:bg-burgundy hover:text-cream transition-all duration-300"
          >
            <span className="block font-display text-base">தமிழ்</span>
            <span className="block text-[10px] tracking-wide opacity-60">Tamil</span>
          </button>
          <button
            onClick={() => selectLanguage("mr")}
            className="flex-1 border border-burgundy text-warm-black font-body text-sm py-3 px-4 hover:bg-burgundy hover:text-cream transition-all duration-300"
          >
            <span className="block font-display text-base">मराठी</span>
            <span className="block text-[10px] tracking-wide opacity-60">Marathi</span>
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-6 text-center">
        <p className="font-body text-warm-black/20 text-[10px] tracking-widest uppercase">
          2 July 2026 · Chennai
        </p>
      </div>
    </main>
  );
}
