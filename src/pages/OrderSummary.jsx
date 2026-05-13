import React, { useState } from 'react';
import './OrderSummary.css';
import { profileData } from '../data/mockData';

export default function OrderSummary({ selectedDrink, onBack, onMakeMove }) {
  const [agreed, setAgreed] = useState(false);
  const ticketPrice = 59;
  const platformFee = 5.90;
  const drinkPrice = selectedDrink?.price || 2199;

  return (
    <div className="order-summary-wrap fade-in">
      <div className="os-container">
        <div className="os-topbar">
          <button className="os-back" onClick={onBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Back
          </button>
          <div className="os-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="url(#lg2)"/>
              <defs><linearGradient id="lg2" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#E91E8C"/><stop offset="1" stopColor="#FF6B35"/></linearGradient></defs>
            </svg>
            <span>partywitty</span>
          </div>
        </div>

        <div className="os-card">
          <div className="os-venue-row">
            <div>
              <div className="os-venue-name-row">
                <h3 className="os-venue">Illusion</h3>
                <span className="os-rating">⭐ 4.1</span>
                <span className="os-review">Review (03)</span>
              </div>
              <div className="os-profile-row">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=50&h=50&fit=crop"
                  alt="Zoe"
                  className="os-avatar"
                />
                <div>
                  <p className="os-person">{profileData.name}, {profileData.age}
                    <span className="verified-sm" style={{marginLeft:6}}>✓</span>
                  </p>
                  <p className="os-venue-sub">{profileData.venue}</p>
                  <div className="os-loc">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="os-date">
              <p className="os-month">OCT</p>
              <p className="os-day-num">24</p>
            </div>
          </div>

          <div className="os-divider" />

          <div className="os-price-row">
            <span className="os-price-label">Tickets Price</span>
            <span className="os-price-val">₹{ticketPrice}.00</span>
          </div>

          <div className="os-drink-row">
            <img
              src={selectedDrink?.image || "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=60&h=60&fit=crop"}
              alt="drink"
              className="os-drink-img"
            />
            <div className="os-drink-info">
              <h4>{selectedDrink?.name || "Wine Glass"}</h4>
              <p>{selectedDrink?.desc || "Mint, Lime, Electric Glow"}</p>
              <span className="os-drink-note">You only pay for the drink if they accept your invite</span>
            </div>
            <span className="os-drink-price">₹{drinkPrice}</span>
          </div>

          <div className="os-divider" />

          <div className="os-bill">
            <h4 className="os-bill-title">Bill Details</h4>
            <div className="os-bill-row">
              <span>Tickets Amount</span>
              <span>₹{ticketPrice}</span>
            </div>
            <div className="os-bill-row">
              <span className="os-platform-link">Platform & Other Charges</span>
              <span style={{color:'var(--pink)'}}>₹{platformFee}</span>
            </div>
            <div className="os-bill-row os-grand-total">
              <span>Grand Total</span>
              <span>₹{(ticketPrice + platformFee).toFixed(2)}</span>
            </div>
          </div>

          <div className="os-agree-row">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              className="os-checkbox"
            />
            <label htmlFor="agree" className="os-agree-label">
              I agree to the <span className="os-link">Terms of Service</span> and <span className="os-link">Privacy Policy.</span>
            </label>
          </div>
        </div>

        <div className="os-actions">
          <button className="os-icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </button>
          <button className="os-icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
            </svg>
          </button>
          <button
            className={`btn-primary os-cta ${!agreed ? 'disabled' : ''}`}
            onClick={() => agreed && onMakeMove()}
            disabled={!agreed}
          >
            Make The Move Now
          </button>
        </div>
      </div>
    </div>
  );
}
