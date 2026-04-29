"use client";

import { useState } from "react";
import FamilySelectPage from "@/app/components/FamilySelectPage";
import WeddingPage from "@/app/components/WeddingPage";

type Lang = "en" | "ta" | "mr";

export default function Page() {
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState<Lang>("mr");
  if (ready) return <WeddingPage lang={lang} type="2" onLangChange={setLang} />;
  return <FamilySelectPage lang={lang} type="2" onReady={() => setReady(true)} />;
}
