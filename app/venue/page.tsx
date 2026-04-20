import Nav from "@/app/components/Nav";
import Image from "next/image";

const accommodation = [
  {
    name: "The Leela Palace Chennai",
    type: "Luxury",
    distance: "~15 min drive",
    note: "Book directly at your convenience.",
    url: "#",
  },
  {
    name: "Taj Coromandel",
    type: "5-Star",
    distance: "~25 min drive",
    note: "Book directly at your convenience.",
    url: "#",
  },
  {
    name: "ITC Grand Chola",
    type: "5-Star",
    distance: "~20 min drive",
    note: "Book directly at your convenience.",
    url: "#",
  },
  {
    name: "Hyatt Regency Chennai",
    type: "Upscale",
    distance: "~20 min drive",
    note: "Book directly at your convenience.",
    url: "#",
  },
  {
    name: "Placeholder Hotel",
    type: "Mid-range",
    distance: "~10 min drive",
    note: "To be confirmed — more options to be added.",
    url: "#",
  },
];

export default function VenuePage() {
  return (
    <>
      <Nav />
      <main className="pt-16 bg-cream">
        <section className="py-20 px-6 text-center bg-ivory">
          <p className="font-body text-xs text-saffron tracking-widest uppercase mb-3">Getting there</p>
          <h1 className="font-display text-5xl md:text-7xl text-maroon font-light mb-4">Venue</h1>
          <div className="w-16 h-px bg-saffron/40 mx-auto mb-6" />
          <h2 className="font-display text-2xl text-maroon font-light mb-2">Dwaraka Palace</h2>
          <p className="font-body text-warm-gray text-sm">
            1st Sea Ward Road, Valmiki Nagar, Thiruvanmiyur, Chennai 600 041
          </p>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-64 md:h-96 bg-ivory border border-saffron/20 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#C8702A" strokeWidth="1" className="mx-auto mb-3">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#C8702A" fillOpacity="0.3" stroke="none" />
                </svg>
                <p className="font-body text-warm-gray text-sm mb-4">Interactive map</p>
                <a
                  href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs tracking-widest uppercase bg-maroon text-cream py-2 px-6 hover:bg-deep-maroon transition-colors inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-ivory">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl text-maroon font-light mb-3">Getting Here</h2>
              <div className="w-12 h-px bg-saffron/40 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream p-8 border border-saffron/15">
                <h3 className="font-display text-xl text-maroon mb-3">By Air</h3>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  Chennai International Airport (MAA) is approximately 30–40 minutes from the venue. Take a cab via Ola or Uber — recommend booking in advance during peak hours.
                </p>
              </div>
              <div className="bg-cream p-8 border border-saffron/15">
                <h3 className="font-display text-xl text-maroon mb-3">By Train</h3>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  Chennai Central and Chennai Egmore are the main railway stations. The venue is in Thiruvanmiyur — approximately 20–30 minutes via cab from both stations.
                </p>
              </div>
              <div className="bg-cream p-8 border border-saffron/15">
                <h3 className="font-display text-xl text-maroon mb-3">Local Transport</h3>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  Ola and Uber are widely available in Chennai. The Thiruvanmiyur MRTS station is nearby for those using Chennai's suburban rail.
                </p>
              </div>
              <div className="bg-cream p-8 border border-saffron/15">
                <h3 className="font-display text-xl text-maroon mb-3">Parking</h3>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  Parking is available at Dwaraka Palace. For outstation guests, we recommend arriving by cab to avoid the hassle of parking during the celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-cream">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-xs text-saffron tracking-widest uppercase mb-3">For outstation guests</p>
              <h2 className="font-display text-3xl text-maroon font-light mb-3">Where to Stay</h2>
              <div className="w-12 h-px bg-saffron/40 mx-auto mb-4" />
              <p className="font-body text-warm-gray text-sm max-w-md mx-auto">
                We recommend these options — book directly at your convenience. These are not sponsored or provided by the family.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {accommodation.map((hotel) => (
                <div key={hotel.name} className="border border-saffron/20 p-6 bg-ivory hover:border-saffron/40 transition-colors">
                  <div className="w-full h-28 bg-cream border border-saffron/10 mb-4 flex items-center justify-center">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#C8702A" strokeWidth="1" className="opacity-40">
                      <rect x="2" y="7" width="20" height="15" rx="1" />
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                    </svg>
                  </div>
                  <span className="font-body text-xs text-saffron tracking-widest uppercase">{hotel.type}</span>
                  <h3 className="font-display text-lg text-maroon font-light mt-1 mb-1">{hotel.name}</h3>
                  <p className="font-body text-xs text-warm-gray mb-3">{hotel.distance} from venue</p>
                  <a
                    href={hotel.url}
                    className="font-body text-xs tracking-widest uppercase text-maroon border border-maroon/30 py-2 px-4 block text-center hover:bg-maroon hover:text-cream transition-colors"
                  >
                    Book Directly
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
