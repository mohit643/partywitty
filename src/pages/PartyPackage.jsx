import React, { useState } from 'react';
import './PartyPackage.css';
import { venues, currentUser } from '../data/mockData';

function VenueCard({ venue, onSelect }) {
  return (
    <div className="venue-card" onClick={onSelect}>
      <div className="venue-img-wrap">
        <img src={venue.image} alt={venue.name} className="venue-img" />
        {venue.happeningNow && <span className="happening-badge">HAPPENING NOW</span>}
        {venue.vibeMatches && <span className="vibe-badge">Vibe Matches</span>}
        <div className="venue-overlay">
          <span className="venue-club">{venue.club}</span>
          <h3 className="venue-name">{venue.name}</h3>
          <div className="venue-meta">
            <span className="venue-rating">⭐ {venue.rating}</span>
            <span className="venue-day">{venue.day}</span>
            <span className="venue-time">{venue.time}</span>
          </div>
        </div>
      </div>
      <div className="venue-bottom">
        {venue.zoeyHere && (
          <div className="zoey-tag">
            <span>💕</span> Zoya has been here twice
          </div>
        )}
        <div className="venue-details">
          <div className="venue-loc">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{venue.venue}</span>
            <span className="venue-dist">{venue.location.split('•')[1]}</span>
          </div>
          <button className="venue-expand">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
        <div className="venue-footer">
          <div className="venue-avatars">
            {[1,2,3].map(i => (
              <img key={i} src={`https://randomuser.me/api/portraits/women/${i+10}.jpg`} alt="user" />
            ))}
            <span className="venue-age">{venue.ageLimit} Your Circle</span>
          </div>
          <div className="venue-discount">
            <span className="discount-text">{venue.discount}</span>
            <span className="venue-amenity">{venue.amenity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PartyPackage({ onSelectVenue }) {
  const [search, setSearch] = useState('');

  return (
    <div className="party-package fade-in">
      <div className="pp-header">
        <nav className="breadcrumb">
          <span>Home</span> / <span>Party Package</span> / <span className="bc-active">Selected Item</span>
        </nav>
        <div className="pp-user-row">
          <div className="pp-pick">
            <p className="pp-pick-label">Pick a plan you'd both enjoy</p>
            <div className="pp-profile-chip">
              <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=40&h=40&fit=crop" alt="Zoe" />
              <span>Zoe Miller, 22</span>
              <span className="verified-sm">✓</span>
            </div>
          </div>
          <div className="pp-verify-chip">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
            <div>
              <p className="pp-uname">{currentUser.name}</p>
              <button className="get-verified-chip">Get Verified</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pp-content">
        <div className="pp-title-row">
          <h2 className="pp-title">Tonight near you</h2>
          <div className="pp-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              className="pp-search-input"
            />
            <button className="pp-mic">🎙️</button>
          </div>
        </div>

        <div className="venues-grid">
          {venues.filter(v =>
            v.name.toLowerCase().includes(search.toLowerCase()) ||
            v.venue.toLowerCase().includes(search.toLowerCase())
          ).map(venue => (
            <VenueCard key={venue.id} venue={venue} onSelect={() => onSelectVenue(venue)} />
          ))}
        </div>
      </div>
    </div>
  );
}
