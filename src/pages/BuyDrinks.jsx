import React, { useState } from 'react';
import './BuyDrinks.css';
import { drinks, gifts, profileData } from '../data/mockData';

function DrinkCard({ drink, selected, onSelect }) {
  const badgeColor = drink.badge === 'MOST LIKELY TO GET ACCEPTED' ? 'badge-green' :
    drink.badge === 'Most Popular' ? 'badge-purple' :
    drink.badge === 'Easy Choice' ? 'badge-blue' : 'badge-orange';

  return (
    <div className={`drink-card ${selected ? 'drink-selected' : ''}`} onClick={() => onSelect(drink)}>
      <img src={drink.image} alt={drink.name} className="drink-img" />
      <div className="drink-info">
        <div className="drink-price-tag">₹{drink.price}</div>
        <h4 className="drink-name">{drink.name}</h4>
        <p className="drink-desc">{drink.desc}</p>
        <span className={`drink-badge ${badgeColor}`}>{drink.badge}</span>
      </div>
    </div>
  );
}

export default function BuyDrinks({ onContinue }) {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedGift, setSelectedGift] = useState(null);

  return (
    <div className="buy-drinks fade-in">
      <div className="bd-header">
        <nav className="breadcrumb">
          <span>Home</span> / <span>Party Package</span> / <span className="bc-active">Selected Item</span>
        </nav>
        <div className="bd-user-row">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="bd-avatar" />
          <div>
            <p className="bd-uname">Alen Markram</p>
            <button className="get-verified-chip">Get Verified</button>
          </div>
        </div>
      </div>

      <div className="bd-layout">
        {/* Left - Profile */}
        <div className="bd-profile">
          <div className="bd-profile-card">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=400&fit=crop"
              alt="Zoe"
              className="bd-profile-img"
            />
            <div className="bd-profile-info">
              <div className="bd-name-row">
                <span>{profileData.name}, {profileData.age}</span>
                <span className="verified-sm">✓</span>
              </div>
              <p className="bd-venue">{profileData.venue}</p>
              <div className="bd-meta">
                <div className="bd-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Sector 38, Noida at ILLUSION</span>
                </div>
                <div className="bd-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Tonight, 10:30 PM -</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Drinks */}
        <div className="bd-right">
          <div className="bd-top">
            <h2 className="bd-title">One Step Before Your First Move</h2>
            <p className="bd-subtitle">Verify your profile to send invites and offer drinks.</p>
          </div>

          <div className="drinks-grid">
            {drinks.map(drink => (
              <DrinkCard
                key={drink.id}
                drink={drink}
                selected={selectedDrink?.id === drink.id}
                onSelect={setSelectedDrink}
              />
            ))}
          </div>

          <div className="gifts-row">
            {gifts.map(gift => (
              <button
                key={gift.id}
                className={`gift-btn ${selectedGift?.id === gift.id ? 'gift-selected' : ''}`}
                onClick={() => setSelectedGift(gift)}
              >
                <span className="gift-icon">{gift.icon}</span>
                <span className="gift-name">{gift.name}</span>
                <span className="gift-price">{gift.price === 0 ? 'FREE' : `₹${gift.price}`}</span>
              </button>
            ))}
          </div>

          <div className="bd-bio">
            <p className="bio-label">A Little About Me</p>
            <div className="bio-row">
              <p className="bio-text">{profileData.bio}</p>
              <button className="bio-edit">✏️</button>
            </div>
          </div>
        </div>
      </div>

      {selectedDrink && (
        <div className="bd-cta-bar">
          <p>Selected: <strong>{selectedDrink.name}</strong> — ₹{selectedDrink.price}</p>
          <button className="btn-primary" onClick={() => onContinue(selectedDrink)}>
            Continue to Order Summary
          </button>
        </div>
      )}
    </div>
  );
}
