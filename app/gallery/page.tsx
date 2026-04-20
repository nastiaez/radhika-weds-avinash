import Nav from "@/app/components/Nav";

function PhotoPlaceholder({ index }: { index: number }) {
  return (
    <div className="w-full aspect-square bg-blush/30 border border-gold/15 flex flex-col items-center justify-center gap-1">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="opacity-20">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="font-body text-[10px] text-burgundy/30">{index}</span>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="pt-14 bg-cream min-h-screen">
        <section className="py-16 px-6 text-center bg-blush/20">
          <p className="font-body text-xs text-marigold tracking-widest uppercase mb-3">Photos</p>
          <h1 className="font-display text-burgundy text-5xl font-light mb-4">Gallery</h1>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
          <p className="font-body text-burgundy/60 text-xs max-w-sm mx-auto mt-4 leading-relaxed">
            Pre-wedding photos always visible. Post-wedding full-res download via Google Sign-In after 2 July 2026.
          </p>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-burgundy text-xl font-light">Pre-Wedding</h2>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <PhotoPlaceholder key={i} index={i + 1} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-blush/20 border-t border-gold/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-burgundy text-xl font-light">Post-Wedding</h2>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-3" />
              <p className="font-body text-burgundy/50 text-xs mt-3 max-w-md mx-auto leading-relaxed">
                Coming after 2 July 2026. Sign in with Google to download full-resolution photos.
              </p>
              <div className="w-full max-w-xl aspect-video bg-blush/30 border border-gold/20 mx-auto mt-5 flex items-center justify-center">
                <div className="text-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="mx-auto mb-2 opacity-20">
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="font-body text-xs text-burgundy/40">Photos coming after wedding</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
