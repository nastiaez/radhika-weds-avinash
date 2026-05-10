"use client";

import { useState } from "react";
import Image from "next/image";

interface HotelEntry {
  name: string;
  distance: string;
  address: string;
  price: string;
  priceNote: string;
  availability: string;
  bookingUrl: string;
  photos: string[];
}

interface HotelCardProps {
  hotel: HotelEntry;
  reserveRoom: string;
}

export default function HotelCard({ hotel, reserveRoom }: HotelCardProps) {
  const [offset, setOffset] = useState(0);
  const n = hotel.photos.length;

  const prev = () => setOffset((o) => (o - 1 + n) % n);
  const next = () => setOffset((o) => (o + 1) % n);

  const desktopPhotos = [0, 1, 2].map((i) => hotel.photos[(offset + i) % n]);
  const mobilePhoto = hotel.photos[offset % n];

  return (
    <div className="hotel-card scroll-reveal">
      {/* Desktop: 3 photos side by side with arrows */}
      <div className="hotel-carousel-desktop">
        <button className="hotel-arrow hotel-arrow-left" onClick={prev} aria-label="Previous photo">&#8249;</button>
        <div className="hotel-photos-strip">
          {desktopPhotos.map((photo, i) => (
            <div key={`${photo}-${i}`} className={`hotel-photo-slot${i === 2 ? " hotel-photo-slot--dim" : ""}`}>
              <Image
                src={`/media/${photo}`}
                alt={`${hotel.name} photo ${(offset + i) % n + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 700px) 0px, 33vw"
              />
            </div>
          ))}
        </div>
        <button className="hotel-arrow hotel-arrow-right" onClick={next} aria-label="Next photo">&#8250;</button>
      </div>

      {/* Mobile: single photo with arrows + dots */}
      <div className="hotel-carousel-mobile">
        <div className="hotel-photo-single">
          <Image
            src={`/media/${mobilePhoto}`}
            alt={`${hotel.name} photo ${offset + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          <div className="hotel-mobile-arrows">
            <button className="hotel-arrow hotel-arrow-left" onClick={prev} aria-label="Previous photo">&#8249;</button>
            <button className="hotel-arrow hotel-arrow-right" onClick={next} aria-label="Next photo">&#8250;</button>
          </div>
          <div className="hotel-mobile-overlay">
            <div className="hotel-dots">
              {hotel.photos.map((_, i) => (
                <button
                  key={i}
                  className={`hotel-dot${i === offset % n ? " hotel-dot--active" : ""}`}
                  onClick={() => setOffset(i)}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Details row */}
      <div className="hotel-details">
        <div className="hotel-details-left">
          <h4>{hotel.name}</h4>
          <p className="hotel-meta">↳ {hotel.distance}</p>
          <p className="hotel-meta">↳ {hotel.address}</p>
          <p className="hotel-meta">↳ {hotel.availability}</p>
        </div>
        <div className="hotel-details-right">
          <div className="hotel-price">{hotel.price}</div>
          <div className="hotel-price-note">{hotel.priceNote}</div>
          <a href={hotel.bookingUrl} target="_blank" rel="noreferrer" className="hotel-book-link">
            {reserveRoom}
          </a>
        </div>
      </div>
    </div>
  );
}
