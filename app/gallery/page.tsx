import Nav from "@/app/components/Nav";

function PhotoPlaceholder({ index }: { index: number }) {
  return (
    <div className="w-full aspect-square bg-ivory border border-saffron/15 flex flex-col items-center justify-center gap-2 group relative">
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#C8702A" strokeWidth="1" className="opacity-30">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="font-body text-xs text-warm-gray opacity-40">{index}</span>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 bg-cream min-h-screen">
        <section className="py-20 px-6 text-center bg-ivory">
          <p className="font-body text-xs text-saffron tracking-widest uppercase mb-3">Photos</p>
          <h1 className="font-display text-5xl md:text-7xl text-maroon font-light mb-4">Gallery</h1>
          <div className="w-16 h-px bg-saffron/40 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-sm max-w-sm mx-auto leading-relaxed">
            Pre-wedding photos are always visible below. Post-wedding photos will be available after 2 July 2026 — sign in with Google to download.
          </p>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl text-maroon font-light mb-2">Pre-Wedding</h2>
              <div className="w-12 h-px bg-saffron/40 mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <PhotoPlaceholder key={i} index={i + 1} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-ivory border-t border-saffron/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl text-maroon font-light mb-2">Post-Wedding</h2>
              <div className="w-12 h-px bg-saffron/40 mx-auto mb-4" />
              <p className="font-body text-warm-gray text-xs mb-6 leading-relaxed max-w-md mx-auto">
                Coming after 2 July 2026. Sign in with your Google account to view and download full-resolution photos.
              </p>
              <div className="w-full aspect-video bg-cream border border-saffron/20 flex items-center justify-center max-w-xl mx-auto">
                <div className="text-center">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#C8702A" strokeWidth="1" className="mx-auto mb-3 opacity-40">
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="font-body text-warm-gray text-xs opacity-50">Photos coming after the wedding</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
