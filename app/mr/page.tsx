"use client";

import { useState } from "react";
import FamilySelectPage from "@/app/components/FamilySelectPage";
import WeddingPage from "@/app/components/WeddingPage";

export default function Page() {
  const [ready, setReady] = useState(false);
  if (ready) return <WeddingPage lang="mr" type="1" />;
  return <FamilySelectPage lang="mr" type="1" onReady={() => setReady(true)} />;
}
