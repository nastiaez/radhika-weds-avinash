"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import { MusicContext } from "./MusicContext";
import MusicPlayer from "./MusicPlayer";

export default function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [started, setStarted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const lastVolumeRef = useRef(0.7);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const startMusic = useCallback(() => {
    if (started) return;
    timerRef.current = setTimeout(() => {
      if (!audioRef.current) return;
      audioRef.current.volume = lastVolumeRef.current;
      audioRef.current.play().catch(() => {});
      setStarted(true);
    }, 1000);
  }, [started]);

  const handleVolumeChange = useCallback((v: number) => {
    if (v > 0) lastVolumeRef.current = v;
    setVolume(v);
    setMuted(v <= 0.01);
    if (audioRef.current) audioRef.current.volume = v;
  }, []);

  const toggleMute = useCallback(() => {
    if (muted || volume <= 0.01) {
      const restore = lastVolumeRef.current > 0 ? lastVolumeRef.current : 0.7;
      handleVolumeChange(restore);
    } else {
      lastVolumeRef.current = volume;
      handleVolumeChange(0);
    }
  }, [muted, volume, handleVolumeChange]);

  return (
    <MusicContext.Provider value={{ startMusic }}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src="/media/music.mp4" loop preload="auto" />
      {children}
      {started && (
        <MusicPlayer
          volume={volume}
          muted={muted}
          onVolumeChange={handleVolumeChange}
          onToggleMute={toggleMute}
        />
      )}
    </MusicContext.Provider>
  );
}
