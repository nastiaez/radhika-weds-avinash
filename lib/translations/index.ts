// lib/translations/index.ts
import type { Translations } from "./types";
import { en } from "./en";
import { ta } from "./ta";
import { mr } from "./mr";

export type { Translations };
export const translations: Record<"en" | "ta" | "mr", Translations> = { en, ta, mr };
