"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Lang = "en" | "ta" | "mr";
type GuestType = "1" | "2";

interface Props {
  lang: Lang;
  type: GuestType;
  onReady?: () => void;
}

export default function FamilySelectPage({ lang, type, onReady }: Props) {
  const router = useRouter();
  const [screen, setScreen] = useState<"select" | "card">("select");
  const [selectedFamily, setSelectedFamily] = useState<"ranganathan" | "karandikar" | null>(null);
  const [clicking, setClicking] = useState<"ranganathan" | "karandikar" | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 768;

  const homeUrl = type === "2" ? "/family/en" : "/en";

  function showCard(family: "ranganathan" | "karandikar") {
    setSelectedFamily(family);
    setScreen("card");
  }

  function handleEnvelopeClick(family: "ranganathan" | "karandikar") {
    setClicking(family);
    const delay = isMobile() ? 150 : 200;
    setTimeout(() => {
      setClicking(null);
      showCard(family);
    }, delay);
  }

  function handleCTA(e: React.MouseEvent) {
    e.preventDefault();
    setTransitioning(true);
    setTimeout(() => {
      if (onReady) {
        onReady();
      } else {
        router.push(homeUrl);
      }
    }, 400);
  }

  function handleBack() {
    setSelectedFamily(null);
    setScreen("select");
  }

  return (
    <div className={`family-select-root lang-${lang}${loaded ? " loaded" : ""}`}>
      {screen === "select" && (
        <section id="screen-select">
          <p className="eyebrow">You are invited to</p>
          <p className="eyebrow">The Wedding of</p>
          <h1 className="names-heading">Radhika &amp; Avinash</h1>
          <div className="shimmer-rule" aria-hidden="true" />
          <p className="prompt">Please select whose guest are you:</p>

          <div className="envelopes">
            {(["ranganathan", "karandikar"] as const).map((family) => (
              <div
                key={family}
                className={`envelope-wrapper${clicking === family ? " clicking" : ""}`}
                role="button"
                tabIndex={0}
                aria-label={
                  family === "ranganathan"
                    ? "Select Groom's family — The Ranganathans"
                    : "Select Bride's family — The Karandikars"
                }
                onClick={() => handleEnvelopeClick(family)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    showCard(family);
                  }
                }}
              >
                <div className="envelope-area">
                  <img className="env-base" src="/media/base ractangle 1.png" alt="" />
                  <img className="env-flap" src="/media/letter on hover 2 - back.png" alt="" />
                  <img className="env-letter-rect" src="/media/letter on hover 2 - envelope.png" alt="" />
                  <img className="env-front" src="/media/envelope on the front 3.png" alt="" />
                  <div className="envelope-label">
                    <p className="family-name">
                      {family === "ranganathan" ? "The Ranganathans" : "The Karandikars"}
                    </p>
                    <p className="family-role">
                      {family === "ranganathan" ? "Groom's Family" : "Bride's Family"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {screen === "card" && selectedFamily && (
        <section id="screen-card" className="visible" aria-live="polite">
          <div className="invitation-card">
            <img className="card-bells" src="/media/hanging bells.png" alt="" onLoad={e => e.currentTarget.classList.add('img-ready')} />
            <div className="card-body">
              {selectedFamily === "ranganathan" ? (
                <>
                  <p className="card-parents">
                    C.K. Ranganathan &amp;<br />Shanthi Ranganathan
                  </p>
                  <p className="card-label">
                    Request the pleasure of your company<br />at the marriage of
                  </p>
                  <div className="card-branch-row">
                    <img className="card-branch" src="/media/botanical branch.png" alt="" onLoad={e => e.currentTarget.classList.add('img-ready')} />
                    <img className="card-branch mirror" src="/media/botanical branch.png" alt="" onLoad={e => e.currentTarget.classList.add('img-ready')} />
                  </div>
                  <p className="card-label">Their Son</p>
                  <p className="card-main-name">Avinash Ranganathan</p>
                  <p className="card-with">With</p>
                  <p className="card-main-name">Radhika Karandikar</p>
                  <p className="card-partner-sub">
                    (Daughter of Ramesh Vitthalrao<br />Karandikar &amp; Suvarna Ramesh<br />Karandikar)
                  </p>
                </>
              ) : (
                <>
                  <p className="card-parents">
                    Ramesh Vitthalrao Karandikar &amp;<br />Suvarna Ramesh Karandikar
                  </p>
                  <p className="card-label">
                    Request the pleasure of your company<br />at the marriage of
                  </p>
                  <div className="card-branch-row">
                    <img className="card-branch" src="/media/botanical branch.png" alt="" onLoad={e => e.currentTarget.classList.add('img-ready')} />
                    <img className="card-branch mirror" src="/media/botanical branch.png" alt="" onLoad={e => e.currentTarget.classList.add('img-ready')} />
                  </div>
                  <p className="card-label">Their Daughter</p>
                  <p className="card-main-name">Radhika Karandikar</p>
                  <p className="card-with">With</p>
                  <p className="card-main-name">Avinash Ranganathan</p>
                  <p className="card-partner-sub">
                    (Son of C.K. Ranganathan &amp;<br />Shanthi Ranganathan)
                  </p>
                </>
              )}
              <button className="btn-cta" onClick={handleCTA}>
                See What Awaits
              </button>
              <button className="btn-back" onClick={handleBack}>← choose differently</button>
            </div>
          </div>
        </section>
      )}

      <div id="cinematic-overlay" className={transitioning ? "active" : ""} />
    </div>
  );
}
