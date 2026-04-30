"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FamilySelectPage from "@/app/components/FamilySelectPage";
import WeddingPage from "@/app/components/WeddingPage";

type Lang = "en" | "ta" | "mr";

export default function Page() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  if (ready) return <WeddingPage lang={lang} type="1" onLangChange={(l) => router.push(`/${l}`)} />;
  return <FamilySelectPage lang={lang} type="1" onReady={() => setReady(true)} />;
}
