import React from 'react';
import './YouChoseHer.css';
import { profileData } from '../data/mockData';

export default function YouChoseHer({ onClose, onMakeMove }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="ych-modal slide-up" onClick={e => e.stopPropagation()}>
        <button className="ych-close" onClick={onClose}>✕</button>
        <h2 className="ych-title">You chose her</h2>
        <p className="ych-sub">You're about to send her a <span className="ych-special">special invite</span></p>

        <div className="ych-card">
          <img src={profileData.image} alt={profileData.name} className="ych-img" />
          <div className="ych-vibe">{profileData.vibe}</div>
          <div className="ych-info">
            <div className="ych-name-row">
              <h3>{profileData.name}, {profileData.age}</h3>
              <span className="verified-badge">✓</span>
            </div>
            <p className="ych-mutual">{profileData.mutualMates} Mutual Mates</p>
            <div className="ych-tags">
              {profileData.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <button className="btn-primary ych-cta" onClick={onMakeMove}>
          Make Your Move
        </button>
        <p className="ych-drink">Add a drink to introduce yourself</p>
      </div>
    </div>
  );
}
