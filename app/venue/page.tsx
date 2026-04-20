import Nav from "@/app/components/Nav";

const accommodation = [
  { name: "The Leela Palace Chennai", type: "Luxury", distance: "~15 min drive", note: "Book directly at your convenience." },
  { name: "Taj Coromandel", type: "5-Star", distance: "~25 min drive", note: "Book directly at your convenience." },
  { name: "ITC Grand Chola", type: "5-Star", distance: "~20 min drive", note: "Book directly at your convenience." },
  { name: "Hyatt Regency Chennai", type: "Upscale", distance: "~20 min drive", note: "Book directly at your convenience." },
  { name: "Options to be added", type: "Mid-range", distance: "TBC", note: "Additional options will be added pre-wedding." },
];

export default function VenuePage() {
  return (
    <>
      <Nav />
      <main className="pt-14 bg-cream min-h-screen">
        <section className="py-16 px-6 text-center bg-blush/20">
          <p className="font-body text-xs text-marigold tracking-widest uppercase mb-3">Getting there</p>
          <h1 className="font-display text-burgundy text-5xl font-light mb-4">Venue</h1>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
          <h2 className="font-display text-burgundy text-xl font-light mt-4">Dwaraka Palace</h2>
          <p className="font-body text-burgundy/60 text-sm">1st Sea Ward Road, Valmiki Nagar, Thiruvanmiyur, Chennai 600 041</p>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="w-full h-52 bg-blush/30 border border-gold/20 flex items-center justify-center">
              <div className="text-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#7A2535" strokeWidth="1" className="mx-auto mb-2 opacity-30">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
                <p className="font-body text-xs text-burgundy/40 mb-2">Map placeholder</p>
                <a href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] text-teal hover:text-burgundy tracking-widest uppercase transition-colors">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-blush/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-burgundy text-2xl font-light mb-3">Getting Here</h2>
              <div className="w-12 h-px bg-gold/40 mx-auto" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "By Air", body: "Chennai International Airport (MAA) — ~35 min by cab. Recommend booking Ola/Uber in advance during peak hours." },
                { title: "By Train", body: "Chennai Central and Chennai Egmore — ~20–30 min by cab to Thiruvanmiyur." },
                { title: "Local Transport", body: "Ola and Uber widely available. MRTS Thiruvanmiyur station is nearby." },
                { title: "Parking", body: "Parking available at Dwaraka Palace. Cab recommended to avoid parking hassle." },
              ].map((item) => (
                <div key={item.title} className="bg-cream border border-gold/20 p-5">
                  <h3 className="font-display text-burgundy text-lg font-light mb-2">{item.title}</h3>
                  <p className="font-body text-burgundy/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-body text-xs text-marigold tracking-widest uppercase mb-2">For outstation guests</p>
              <h2 className="font-display text-burgundy text-2xl font-light">Where to Stay</h2>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-3" />
              <p className="font-body text-burgundy/50 text-xs mt-3 max-w-md mx-auto">
                We recommend these options — book directly at your convenience.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {accommodation.map((h) => (
                <div key={h.name} className="border border-gold/20 p-4 bg-blush/10">
                  <span className="font-body text-[10px] text-marigold tracking-widest uppercase">{h.type}</span>
                  <h3 className="font-display text-burgundy text-base font-light mt-1 mb-1">{h.name}</h3>
                  <p className="font-body text-xs text-burgundy/50 mb-2">{h.distance} from venue</p>
                  <p className="font-body text-xs text-burgundy/50">{h.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
