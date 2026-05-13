import React, { useState } from 'react';
import './Verification.css';

export function VerificationIntro({ onClose, onVerify }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="verif-modal slide-up" onClick={e => e.stopPropagation()}>
        <button className="verif-close" onClick={onClose}>✕</button>
        <div className="verif-icon-wrap">
          <div className="verif-face-icon">
            <svg width="60" height="60" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 4"/>
              <circle cx="40" cy="40" r="26" stroke="#d1d5db" strokeWidth="1.5"/>
              <circle cx="40" cy="36" r="12" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.5"/>
              <path d="M28 58c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <div className="verif-dot"></div>
        </div>
        <h2 className="verif-title">You're one step away</h2>
        <p className="verif-sub">Verify your profile to send this invite and connect with people around you.</p>
        <div className="verif-benefits">
          <span className="vb-item"><span className="vb-check">✓</span> Builds trust instantly</span>
          <span className="vb-item"><span className="vb-check">✓</span> Better chances she accepts</span>
          <span className="vb-item"><span className="vb-check">✓</span> Unlocks special invites</span>
        </div>
        <button className="btn-primary verif-btn" onClick={onVerify}>
          Verify & Send Invite
        </button>
        <p className="verif-time">TAKES LESS THAN 30 SECONDS</p>
      </div>
    </div>
  );
}

export function FaceScan({ onClose, onSuccess }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="face-modal slide-up" onClick={e => e.stopPropagation()}>
        <button className="verif-close face-close" onClick={onClose}>✕</button>
        <div className="face-scan-wrap">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            alt="face"
            className="face-img"
          />
          <div className="face-oval-overlay">
            <div className="face-oval"></div>
            <div className="face-line top-line"></div>
            <div className="face-line bottom-line"></div>
          </div>
          <div className="look-straight-badge">Look straight</div>
        </div>
        <div className="face-bottom">
          <h3 className="face-title">Keep your face within the frame</h3>
          <p className="face-sub">Center your face and wait for the scan to start</p>
          <div className="face-privacy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Used only for verification</span>
          </div>
        </div>
        <div className="face-controls">
          <button className="face-ctrl-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </button>
          <button className="face-capture-btn" onClick={onSuccess}></button>
          <button className="face-ctrl-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export function ShowVibe({ onClose, onDone }) {
  const [photos, setPhotos] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop", added: true },
    { id: 2, url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop", added: true },
    { id: 3, url: null, hint: "With friends", added: false },
    { id: 4, url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop", added: true },
    { id: 5, url: null, hint: "Candid • posed", added: false },
    { id: 6, url: null, hint: null, added: false },
  ]);

  const addedCount = photos.filter(p => p.added).length;

  const removePhoto = (id) => {
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, added: false, url: null } : p));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="vibe-modal slide-up" onClick={e => e.stopPropagation()}>
        <button className="verif-close" onClick={onClose}>✕</button>
        <h2 className="vibe-title">Show your vibe</h2>
        <p className="vibe-sub">Add up to 6 photos people will actually vibe with</p>
        <div className="vibe-progress-row">
          <span className="vibe-count">{addedCount}/6 ADDED</span>
          <div className="vibe-bar">
            <div className="vibe-bar-fill" style={{ width: `${(addedCount/6)*100}%` }}></div>
          </div>
        </div>
        <div className="vibe-tip">
          <span>➕</span> Profiles with 4+ photos get 3x more invites
        </div>
        <div className="vibe-grid">
          <div className="vibe-add-slot">
            <span className="vibe-add-icon">+</span>
            <span className="vibe-add-label">+ Add Photo</span>
          </div>
          {photos.map(photo => (
            <div key={photo.id} className="vibe-photo-slot">
              {photo.url ? (
                <>
                  <img src={photo.url} alt="vibe" className="vibe-photo" />
                  <button className="vibe-remove" onClick={() => removePhoto(photo.id)}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                    </svg>
                  </button>
                </>
              ) : (
                <div className="vibe-hint-slot">
                  {photo.hint ? (
                    <>
                      <div className="vibe-hint-icon">
                        {photo.hint.includes('friends') ? '👥' : '📸'}
                      </div>
                      <p className="vibe-hint-text">HINT</p>
                      <p className="vibe-hint-sub">{photo.hint}</p>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="btn-primary vibe-done-btn" onClick={onDone}>
          Done — Let's Go! 🎉
        </button>
      </div>
    </div>
  );
}
