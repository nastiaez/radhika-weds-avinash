"use client";
import { createContext, useContext } from "react";

interface MusicContextValue {
  startMusic: () => void;
}

export const MusicContext = createContext<MusicContextValue>({
  startMusic: () => {},
});

export function useMusicContext(): MusicContextValue {
  return useContext(MusicContext);
}
