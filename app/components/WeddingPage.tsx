"use client";

import { useEffect, useRef } from "react";
import { translations } from "@/lib/translations";

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

  const t = translations[lang];
  const showDay1 = type === "2";
  const isFamily = type === "2";

  const langPaths = {
    en: isFamily ? "/family/en" : "/en",
    ta: isFamily ? "/family/ta" : "/ta",
    mr: isFamily ? "/family/mr" : "/mr",
  };
  const langLabels: Record<Lang, string> = {
    en: "English",
    ta: "தமிழ்",
    mr: "मराठी",
  };

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
        <a href={isFamily ? "/family" : "/"} className="nav-logo">
          <img src="/media/logo_transparent.png" alt="R & A" />
        </a>
        <ul className="nav-links">
          <li><a href="#story">{t.nav.ourStory}</a></li>
          <li><a href="#info">{t.nav.info}</a></li>
          <li><a href="#faq">{t.nav.faq}</a></li>
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
          {t.hero.namesLine1}<br />
          <em>{t.hero.namesLine2}</em>
        </h1>
        <p className="hero-para" ref={heroParaRef}>
          {t.hero.welcome}<br />
          {t.hero.tagline1}<br />
          {t.hero.tagline2}
        </p>
        <div className="hero-buttons" ref={heroButtonsRef}>
          <a href="#" className="btn btn-fill" download>{t.hero.ctaManjal}</a>
          <a href="#info" className="btn btn-outline">{t.hero.ctaMoreInfo}</a>
        </div>
      </section>

      {/* INFO */}
      <section id="info">
        <div className="section-inner">
          <h2 className="section-title">{t.info.sectionTitle}</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-card-icon">{t.info.whenLabel}</div>
              <h3>{t.info.whenDate}</h3>
              <p>{isFamily ? t.info.whenTimeFamilyDay1 : t.info.whenTime}</p>
            </div>
            {isFamily && (
              <div className="info-card">
                <div className="info-card-icon">{t.info.whenLabel}</div>
                <h3>{t.info.whenDate2}</h3>
                <p>{t.info.whenTime2}</p>
              </div>
            )}
            <div className="info-card">
              <div className="info-card-icon">{t.info.whereLabel}</div>
              <h3>{t.info.whereName}</h3>
              <p>
                <a href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9" target="_blank" rel="noreferrer">
                  {t.info.whereMapLink}
                </a>
              </p>
            </div>
          </div>
          <hr className="info-divider" />
          <div className="info-blocks-grid">
            <div className="info-block">
              <div className="info-block-label">{t.info.phonesLabel}</div>
              <h3>{t.info.phonesTitle}</h3>
              <p>{t.info.phonesBody}</p>
            </div>
            <div className="info-block">
              <div className="info-block-label">{t.info.photoLabel}</div>
              <h3>{t.info.photoTitle}</h3>
              <p>{t.info.photoBody}</p>
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
          <h2 className="section-title">{t.schedule.sectionTitle}</h2>
          <p className="schedule-venue-note">{t.schedule.venueNote}</p>

          <p className="schedule-day-label">{t.schedule.day1Label}</p>
          <div className="schedule-list">
            {isFamily && (
              <div className="schedule-event">
                <div className="schedule-dot" />
                <div className="schedule-time">{t.schedule.engagementTime}</div>
                <h3>{t.schedule.engagementTitle}</h3>
                <p>{t.schedule.engagementDesc}</p>
                <p className="schedule-dress">{t.schedule.engagementDress}</p>
              </div>
            )}
            <div className="schedule-event">
              <div className="schedule-dot" />
              <div className="schedule-time">{t.schedule.receptionTime}</div>
              <h3>{t.schedule.receptionTitle}</h3>
              <p>{t.schedule.receptionDesc}</p>
              <p className="schedule-dress">{t.schedule.receptionDress}</p>
            </div>
          </div>

          {isFamily && (
            <>
              <p className="schedule-day-label">{t.schedule.day2Label}</p>
              <div className="schedule-list">
                <div className="schedule-event">
                  <div className="schedule-dot" />
                  <div className="schedule-time">{t.schedule.weddingTime}</div>
                  <h3>{t.schedule.weddingTitle}</h3>
                  <p>{t.schedule.weddingDesc}</p>
                  <p className="schedule-dress">{t.schedule.weddingDress}</p>
                </div>
                <div className="schedule-event">
                  <div className="schedule-dot" />
                  <div className="schedule-time">{t.schedule.lunchTime}</div>
                  <h3>{t.schedule.lunchTitle}</h3>
                  <p>{t.schedule.lunchDesc}</p>
                  <p className="schedule-dress">{t.schedule.lunchDress}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* VENUE */}
      <section id="venue">
        <div className="section-inner">
          <h2 className="section-title">{t.venue.sectionTitle}</h2>
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
              <h3>{t.venue.addressName}</h3>
              <p>
                {t.venue.addressLine1}<br />
                {t.venue.addressLine2}<br />
                {t.venue.addressLine3}<br />
                {t.venue.addressLine4}
              </p>
              <a href="https://maps.app.goo.gl/9fZcvFQDEhY8fzKu9" target="_blank" rel="noreferrer">
                {t.venue.mapsLink}
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
            <h3>{t.venue.stayTitle}</h3>
            <p className="stay-intro">{t.venue.stayIntro}</p>
            <div className="hotel-grid">
              <div className="hotel-card">
                <div className="hotel-img">Hotel photo</div>
                <h4>{t.venue.hotel1Name}</h4>
                <p>{t.venue.hotel1Desc}</p>
                <a href="#" target="_blank" rel="noreferrer">{t.venue.seeMore}</a>
              </div>
              <div className="hotel-card">
                <div className="hotel-img">Hotel photo</div>
                <h4>{t.venue.hotel2Name}</h4>
                <p>{t.venue.hotel2Desc}</p>
                <a href="#" target="_blank" rel="noreferrer">{t.venue.seeMore}</a>
              </div>
              <div className="hotel-card">
                <div className="hotel-img">Hotel photo</div>
                <h4>{t.venue.hotel3Name}</h4>
                <p>{t.venue.hotel3Desc}</p>
                <a href="#" target="_blank" rel="noreferrer">{t.venue.seeMore}</a>
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
          <h2 className="section-title">{t.story.sectionTitle}</h2>
          <p className="story-tagline">{t.story.tagline}</p>
          <div className="story-chapters">
            <div className="story-chapter">
              <p className="story-chapter-label">{t.story.ch1Label}</p>
              <h3>{t.story.ch1Title}</h3>
              <p className="story-location">{t.story.ch1Location}</p>
              <p>{t.story.ch1p1}</p>
              <p>{t.story.ch1p2}</p>
            </div>
            <div className="story-chapter">
              <p className="story-chapter-label">{t.story.ch2Label}</p>
              <h3>{t.story.ch2Title}</h3>
              <p className="story-location">{t.story.ch2Location}</p>
              <p>{t.story.ch2p1}</p>
              <p>{t.story.ch2p2}</p>
            </div>
            <div className="story-chapter">
              <p className="story-chapter-label">{t.story.ch3Label}</p>
              <h3>{t.story.ch3Title}</h3>
              <p className="story-location">{t.story.ch3Location}</p>
              <p>{t.story.ch3p1}</p>
              <p className="story-quote">{t.story.ch3Quote}</p>
              <p>{t.story.ch3p2}</p>
            </div>
            <div className="story-chapter">
              <p className="story-chapter-label">{t.story.ch4Label}</p>
              <h3>{t.story.ch4Title}</h3>
              <p>{t.story.ch4p1}</p>
              <p>{t.story.ch4p2}</p>
              {t.story.ch4p3 && <p>{t.story.ch4p3}</p>}
              <p className="story-closing"><em>{t.story.ch4closing}</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="section-inner">
          <h2 className="section-title">{t.faq.sectionTitle}</h2>
          <div className="faq-list">
            <div className="faq-group-label">{t.faq.photosGroupLabel}</div>
            <div className="faq-item">
              <h3>{t.faq.q1Title}</h3>
              <p>{t.faq.q1Body}</p>
            </div>
            <div className="faq-item">
              <h3>{t.faq.q2Title}</h3>
              <p>{t.faq.q2Body}</p>
            </div>

            <div className="faq-group-label">{t.faq.dressGroupLabel}</div>
            <div className="faq-item">
              <h3>{t.faq.q3Title}</h3>
              <p>{t.faq.q3Body}</p>
            </div>
            <div className="faq-item">
              <h3>{t.faq.q4Title}</h3>
              <p>{t.faq.q4Body}</p>
            </div>

            <div className="faq-group-label">{t.faq.giftsGroupLabel}</div>
            <div className="faq-item">
              <h3>{t.faq.q5Title}</h3>
              <p>{t.faq.q5Body}</p>
            </div>

            <div className="faq-group-label">{t.faq.venueGroupLabel}</div>
            <div className="faq-item">
              <h3>{t.faq.q6Title}</h3>
              <p>{t.faq.q6Body}</p>
            </div>
            <div className="faq-item">
              <h3>{t.faq.q7Title}</h3>
              <p>{t.faq.q7Body}</p>
            </div>
            <div className="faq-item">
              <h3>{t.faq.q8Title}</h3>
              <p>{showDay1 ? t.faq.q8BodyFamily : t.faq.q8BodyAll}</p>
            </div>

            <div className="faq-group-label">{t.faq.foodGroupLabel}</div>
            <div className="faq-item">
              <h3>{t.faq.q9Title}</h3>
              <p>{showDay1 ? t.faq.q9BodyFamily : t.faq.q9BodyAll}</p>
            </div>

            <div className="faq-group-label">{t.faq.ceremoniesGroupLabel}</div>
            <div className="faq-item">
              <h3>{t.faq.q10Title}</h3>
              <p>{t.faq.q10Body}</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p style={{ marginBottom: "0.5rem" }}><strong>{t.footer.names}</strong></p>
        <p>{t.footer.date}</p>
        <p style={{ marginTop: "1rem", fontSize: "12px", opacity: 0.5 }}>{t.footer.closing}</p>
      </footer>
    </div>
  );
}
