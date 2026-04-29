"use client";

import { useEffect, useRef } from "react";

type Lang = "en" | "ta" | "mr";
type GuestType = "1" | "2";

interface Props {
  lang: Lang;
  type: GuestType;
  onLangChange?: (lang: Lang) => void;
}

export default function WeddingPage({ lang, type, onLangChange }: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const heroNamesRef = useRef<HTMLHeadingElement>(null);
  const heroParaRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const showDay1 = type === "2";

  const isFamily = type === "2";
  const langPaths = {
    en: isFamily ? "/family" : "/",
    ta: isFamily ? "/family/ta" : "/ta",
    mr: isFamily ? "/family/mr" : "/mr",
  };
  const langLabels = { en: "English", ta: "தமிழ்", mr: "मराठी" };

  useEffect(() => {
    const reveal = (el: HTMLElement | null, delay: number) => {
      if (!el) return;
      setTimeout(() => el.classList.add("revealed"), delay);
    };
    reveal(heroRef.current, 0);
    reveal(heroNamesRef.current, 300);
    reveal(heroParaRef.current, 600);
    if (navRef.current) {
      const nav = navRef.current;
      setTimeout(() => { nav.style.opacity = "1"; }, 700);
    }
    reveal(heroButtonsRef.current, 800);
  }, []);

  return (
    <div className={`wedding-page lang-${lang}`}>
      {/* NAV */}
      <nav ref={navRef} style={{ opacity: 0, transition: "opacity 0.4s ease" }}>
        <a href="#hero" className="nav-logo">
          <img src="/media/logo_transparent.png" alt="R & A" />
        </a>
        <ul className="nav-links">
          <li><a href="#story">Our Story</a></li>
          <li><a href="#info">Info</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li className="nav-lang">
            <a href={langPaths[lang]}>{langLabels[lang]}</a>
            <div className="lang-dropdown">
              {(["en", "ta", "mr"] as Lang[]).map((l) => (
                <a
                  key={l}
                  href={langPaths[l]}
                  onClick={(e) => {
                    if (onLangChange) {
                      e.preventDefault();
                      onLangChange(l);
                    }
                  }}
                >
                  {langLabels[l]}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" ref={heroRef}>
        <h1 className="hero-names" ref={heroNamesRef}>
          Radhika<br />
          <em>&amp; Avinash</em>
        </h1>
        <p className="hero-para" ref={heroParaRef}>
          With hearts full of joy, the Ranganathans and the Karandikars welcome you!<br />
          Come. Celebrate with us. Laugh loudly. Bless deeply.<br />
          Love freely. And enjoy wholeheartedly.
        </p>
        <div className="hero-buttons" ref={heroButtonsRef}>
          <a href="#" className="btn btn-fill" download>Manjal Pathirikkai</a>
          <a href="#info" className="btn btn-outline">More Info</a>
        </div>
      </section>

      {/* INFO */}
      <section id="info">
        <div className="section-inner">
          <h2 className="section-title">The Celebration</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-card-icon">When</div>
              <h3>2 July 2026</h3>
              <p>Thursday · 11:00 onwards</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">Where</div>
              <h3>Dwaraka Palace</h3>
              <p>
                <a href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9" target="_blank" rel="noreferrer">
                  Open in Google Maps →
                </a>
              </p>
            </div>
          </div>
          <hr className="info-divider" />
          <div className="info-blocks-grid">
            <div className="info-block">
              <div className="info-block-label">Phones &amp; Cameras</div>
              <h3>A Presence-First Celebration</h3>
              <p>To ensure an intimate atmosphere, we will be masking guest phone cameras at the door. While you&apos;ll have full access to your phone for calls and texts, we kindly ask that you join us in a camera-free environment. Our photographers will be delighted to share all the special moments with you later!</p>
            </div>
            <div className="info-block">
              <div className="info-block-label">Official Photography</div>
              <h3>Every Moment Captured</h3>
              <p>Our official photography team will capture all the special moments, and we&apos;ll be delighted to share the memories with you. Specially for you, we have planned a photo booth — strike a pose, make a pout, smile. Our photographers will be delighted to capture it all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section
        id="schedule"
        style={{
          backgroundImage: "url('/media/illustration_rituals.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="section-inner">
          <h2 className="section-title">Schedule &amp; Rituals</h2>
          <p className="schedule-venue-note">All events take place at Dwaraka Palace, Thiruvanmiyur, Chennai.</p>

          {showDay1 && (
            <>
              <p className="schedule-day-label">Day 1 — Wednesday, 1 July 2026</p>
              <p className="schedule-day-note">Close family and friends only</p>
              <div className="schedule-list">
                <div className="schedule-event">
                  <div className="schedule-dot" />
                  <div className="schedule-time">5:00 pm</div>
                  <h3>Engagement Ceremony</h3>
                  <p>Glass Hall, Dwaraka Palace. The formal engagement of Radhika and Avinash — an intimate ceremony with our nearest and dearest.</p>
                  <p className="schedule-dress">Dress: Traditional Indian attire</p>
                </div>
                <div className="schedule-event">
                  <div className="schedule-dot" />
                  <div className="schedule-time">7:00 pm</div>
                  <h3>Reception</h3>
                  <p>Dwaraka Palace. An evening reception with dinner and music. Dine in the open lawn with beach access.</p>
                  <p className="schedule-dress">Dress: Festive Indian attire</p>
                </div>
              </div>
            </>
          )}

          <p className="schedule-day-label">Day 2 — Thursday, 2 July 2026</p>
          <div className="schedule-list">
            <div className="schedule-event">
              <div className="schedule-dot" />
              <div className="schedule-time">9:00 am</div>
              <h3>Wedding Ceremony</h3>
              <p>Dwaraka Palace. A beautiful blend of Tamil Iyer Brahmin and Maharashtrian Konkanastha Brahmin traditions. Please be available by 8:50 AM.</p>
              <p className="schedule-dress">Dress: Traditional Indian attire</p>
            </div>
            <div className="schedule-event">
              <div className="schedule-dot" />
              <div className="schedule-time">11:30 am onwards</div>
              <h3>Wedding Luncheon</h3>
              <p>Dining Hall, Dwaraka Palace. A traditional South Indian lunch on banana leaves (Elai Sappadu).</p>
              <p className="schedule-dress">Dress: Traditional Indian attire</p>
            </div>
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section id="venue">
        <div className="section-inner">
          <h2 className="section-title">The Venue</h2>
          <div className="venue-photos">
            <div className="venue-photo">
              <img src="/media/Dwaraka-1.jpg" alt="Dwaraka Palace dining" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="venue-photo">
              <img src="/media/DWARAKA-mid.jpg" alt="Dwaraka Palace hall" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="venue-photo">
              <img src="/media/DWARAKA-3.jpg" alt="Dwaraka Palace garden" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div className="venue-details">
            <div className="venue-address">
              <h3>Dwaraka Palace</h3>
              <p>
                63, 1st Seaward Rd<br />
                Valmiki Nagar, Thiruvalluvar Nagar<br />
                Thiruvanmiyur, Chennai 600041<br />
                Tamil Nadu, India
              </p>
              <a href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9" target="_blank" rel="noreferrer">
                Open in Google Maps →
              </a>
            </div>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps?q=63+1st+Seaward+Rd+Valmiki+Nagar+Thiruvalluvar+Nagar+Thiruvanmiyur+Chennai+Tamil+Nadu+600041&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dwaraka Palace map"
              />
            </div>
          </div>
          <div className="accommodation">
            <h3>Where to Stay</h3>
            <div className="hotel-grid">
              <div className="hotel-card">
                <div className="hotel-img">Hotel photo</div>
                <h4>Vivanta Chennai</h4>
                <p>Luxury hotel, ~10 min drive. Excellent amenities and warm hospitality.</p>
                <a href="#" target="_blank" rel="noreferrer">See More →</a>
              </div>
              <div className="hotel-card">
                <div className="hotel-img">Hotel photo</div>
                <h4>Radisson Blu GRT</h4>
                <p>Comfortable and well-located, ~15 min from Dwaraka Palace.</p>
                <a href="#" target="_blank" rel="noreferrer">See More →</a>
              </div>
              <div className="hotel-card">
                <div className="hotel-img">Hotel photo</div>
                <h4>The Raintree Hotel</h4>
                <p>Boutique eco-friendly stay near the beach, ~12 min from venue.</p>
                <a href="#" target="_blank" rel="noreferrer">See More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        style={{
          backgroundImage: "url('/media/illustration_romance.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="section-inner">
          <h2 className="section-title">Our Story</h2>
          <p className="story-tagline">
            From a chance encounter at 30,000 feet to a promise over a Salzburg city — this is how Radhika and Avinash found each other.
          </p>
          <div className="story-chapters">
            <div className="story-chapter">
              <p className="story-chapter-label">Chapter 01 · 26 January 2024</p>
              <h3>How We Met</h3>
              <p className="story-location">Chennai — somewhere above the clouds</p>
              <p>It started with a coincidence that felt a little too perfect to be one. Avinash was heading home to Chennai from Pune, still glowing from a week of paragliding in the mountains. Radhika was boarding the same flight — a Kathak dancer mid-tour, carrying grace in every step even through an airport terminal.</p>
              <p>The seat next to hers was empty. Of course it was. What followed was a flight neither of them wanted to end — conversations that wandered from dance and adventure to family and dreams, the kind that make two hours feel like twenty minutes.</p>
            </div>
            <div className="story-chapter">
              <p className="story-chapter-label">Chapter 02 · 2024</p>
              <h3>Across the Distance</h3>
              <p className="story-location">India ↔ Germany, one call at a time</p>
              <p>Avinash flew back to Germany. Radhika was back in Pune. But the conversation never really stopped — it just moved to a screen. Late-night calls bridging Pune and Leipzig, voice notes, long texts, the slow and certain process of falling in love across four and a half time zones.</p>
              <p>There were no grand gestures, just the quiet consistency of two people choosing each other, day after day, from opposite ends of the world.</p>
            </div>
            <div className="story-chapter">
              <p className="story-chapter-label">Chapter 03 · January 2025</p>
              <h3>The Proposal</h3>
              <p className="story-location">Salzburg, Austria</p>
              <p>A year after they met, Radhika and her father travelled to Germany to visit Avinash. As her trip drew to a close, Avinash took her to Salzburg — cobblestone streets, alpine air, and the still blue of a lake reflecting the sky.</p>
              <p className="story-quote">&ldquo;Will you marry me?&rdquo;</p>
              <p>Standing by the water, in one of Europe&apos;s most quietly romantic cities, he asked. She said yes. The lake didn&apos;t move. Everything else did.</p>
            </div>
            <div className="story-chapter">
              <p className="story-chapter-label">Chapter 04 · Now</p>
              <h3>And Now — July 2026</h3>
              <p>Surrounded by family, friends, and everything they love — on a dance floor in Chennai, with the people who watched them grow — Radhika and Avinash begin the next chapter.</p>
              <p>Thank you for being part of our story.</p>
              <p className="story-closing"><em>And so begins forever.</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="section-inner">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list">
            <div className="faq-group-label">Phone &amp; Photography</div>
            <div className="faq-item">
              <h3>Can I take photos?</h3>
              <p>To ensure everyone can be fully present, we have chosen to keep our ceremonies camera-free. Our admin will mask the camera on your phone at the entrance — this applies to everyone without exception. Our official photographer will cover everything, and the full gallery will be shared after the wedding.</p>
            </div>
            <div className="faq-item">
              <h3>Will photos be shared?</h3>
              <p>Yes. The complete gallery will be shared with all guests following the celebrations.</p>
            </div>

            <div className="faq-group-label">Dress Code</div>
            <div className="faq-item">
              <h3>What should I wear?</h3>
              <p>Traditional Indian attire for both days. Sarees, lehengas, kurtas, sherwanis, dhotis — all welcome. Day 1 leans festive; Day 2 is the full wedding so the more traditional the better.</p>
            </div>
            <div className="faq-item">
              <h3>Do children need to dress up?</h3>
              <p>Encouraged, but comfort comes first — especially for little ones in the Chennai July heat.</p>
            </div>

            <div className="faq-group-label">Gifts</div>
            <div className="faq-item">
              <h3>What should I bring?</h3>
              <p>Your presence and blessings are the gifts we require. Should you wish to honour us with a gift, a cash envelope is welcome. Please do not feel obligated.</p>
            </div>

            <div className="faq-group-label">Venue &amp; Logistics</div>
            <div className="faq-item">
              <h3>Where is the venue?</h3>
              <p>Dwaraka Palace, 63 1st Seaward Rd, Valmiki Nagar, Thiruvalluvar Nagar, Thiruvanmiyur, Chennai 600041. See the Venue section for directions and a map.</p>
            </div>
            <div className="faq-item">
              <h3>Is parking available?</h3>
              <p>Yes, parking is available at Dwaraka Palace. If you are coming from a hotel, an Ola or Uber is the easier option.</p>
            </div>
            <div className="faq-item">
              <h3>What time should I arrive?</h3>
              <p>
                {showDay1
                  ? "Day 1: By 4:45 PM for the Engagement; 6:45 PM for the Reception. Day 2: 8:50 AM for the Wedding Ceremony. Luncheon from 11:30 AM."
                  : "Day 2: 8:50 AM for the Wedding Ceremony. Luncheon from 11:30 AM."}
              </p>
            </div>

            <div className="faq-group-label">Food</div>
            <div className="faq-item">
              <h3>What kind of food is served?</h3>
              <p>
                {showDay1
                  ? "Both days are fully vegetarian. Day 1 is a multi-cuisine buffet dinner. Day 2 is a traditional South Indian banana-leaf lunch. Please let the family know in advance of any dietary requirements."
                  : "The wedding day is fully vegetarian. A traditional South Indian banana-leaf lunch is served. Please let the family know in advance of any dietary requirements."}
              </p>
            </div>

            <div className="faq-group-label">Ceremonies</div>
            <div className="faq-item">
              <h3>Can you explain the wedding rituals?</h3>
              <p>The wedding blends two beautiful traditions — Tamil Iyer Brahmin and Maharashtrian Konkanastha Brahmin. From the Kashi Yatra and Oonjal to the Antarpaat, Thaali tying, and Sapthapadhi: seven steps around the sacred fire.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p style={{ marginBottom: "0.5rem" }}><strong>Radhika &amp; Avinash</strong></p>
        <p>2 July 2026 · Dwaraka Palace · Chennai</p>
        <p style={{ marginTop: "1rem", fontSize: "12px", opacity: 0.5 }}>With love, the Ranganathans &amp; Karandikars</p>
      </footer>
    </div>
  );
}
