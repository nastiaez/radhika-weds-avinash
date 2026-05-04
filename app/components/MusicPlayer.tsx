"use client";

interface Props {
  volume: number;       // 0–1
  muted: boolean;
  onVolumeChange: (v: number) => void;
  onToggleMute: () => void;
}

function SpeakerIcon({ volume, muted }: { volume: number; muted: boolean }) {
  const level =
    muted || volume === 0 ? "muted"
    : volume < 0.34 ? "low"
    : volume < 0.67 ? "medium"
    : "full";

  return (
    <svg width="24" height="24" viewBox="0 0 32 28" fill="none" aria-hidden="true">
      <path
        d="M4 10H10L18 4V24L10 18H4V10Z"
        fill={level === "muted" ? "#bbb" : "#C9972A"}
      />
      {level === "muted" && (
        <>
          <line x1="23" y1="8" x2="30" y2="20" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="8" x2="23" y2="20" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {(level === "low" || level === "medium" || level === "full") && (
        <path
          d="M22 10C23.5 11.5 24.5 12.8 24.5 14C24.5 15.2 23.5 16.5 22 18"
          stroke="#C9972A" strokeWidth="2" strokeLinecap="round"
        />
      )}
      {(level === "medium" || level === "full") && (
        <path
          d="M22 8C24.5 10 26 13 26 14C26 15 24.5 18 22 20"
          stroke="#C9972A" strokeWidth="2" strokeLinecap="round"
        />
      )}
      {level === "full" && (
        <path
          d="M25 5C28.5 8 30 11.5 30 14C30 16.5 28.5 20 25 23"
          stroke="#C9972A" strokeWidth="1.5" strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function MusicPlayer({ volume, muted, onVolumeChange, onToggleMute }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "16px",
        zIndex: 9999,
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.13)",
        border: "1px solid #e8ddd4",
        padding: "14px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        width: "52px",
      }}
    >
      <button
        onClick={onToggleMute}
        aria-label="Toggle mute"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          minWidth: "44px",
          minHeight: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <SpeakerIcon volume={volume} muted={muted} />
      </button>

      {/* Vertical slider: rotate a horizontal range input */}
      <div style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={muted ? 0 : volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          aria-label="Music volume"
          style={{
            width: "80px",
            transform: "rotate(-90deg)",
            accentColor: "#C9972A",
            cursor: "pointer",
          }}
        />
      </div>

      <span
        style={{
          fontSize: "9px",
          color: "#C9972A",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontFamily: "sans-serif",
          userSelect: "none",
        }}
      >
        Vol
      </span>
    </div>
  );
}
