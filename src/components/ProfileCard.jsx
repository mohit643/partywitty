import React from 'react';
import './ProfileCard.css';
import { profileData } from '../data/mockData';

export default function ProfileCard({ onGoTonight, onLike, onSkip }) {
  return (
    <div className="profile-card-wrap">
      <div className="explore-btn-wrap">
        <button className="explore-feed-btn">EXPLORE FEED</button>
      </div>
      <div className="profile-card fade-in">
        <div className="card-image-wrap">
          <img src={profileData.image} alt={profileData.name} className="card-img" />
          <div className="card-vibe-tag">{profileData.vibe}</div>
          <div className="make-first-move-label">Make Your First Move</div>
          <div className="card-info">
            <div className="card-name-row">
              <h2>{profileData.name}, {profileData.age}</h2>
              <span className="verified-badge">✓</span>
              <button className="mate-btn">+ Mate</button>
            </div>
            <p className="card-mutual">{profileData.mutualMates} Mutual Mates</p>
            <div className="card-tags">
              {profileData.tags.map(tag => (
                <span key={tag} className="card-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="card-actions">
          <button className="action-skip" onClick={onSkip}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <button className="action-go btn-primary" onClick={onGoTonight}>
            <span>🎉</span> Go Tonight
          </button>
          <button className="action-like" onClick={onLike}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
