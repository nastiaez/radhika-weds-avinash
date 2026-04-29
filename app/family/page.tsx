"use client";

import { useState } from "react";
import FamilySelectPage from "@/app/components/FamilySelectPage";
import WeddingPage from "@/app/components/WeddingPage";

export default function Page() {
  const [ready, setReady] = useState(false);
  if (ready) return <WeddingPage lang="en" type="2" />;
  return <FamilySelectPage lang="en" type="2" onReady={() => setReady(true)} />;
}
