import React from 'react';
import './RightPanel.css';
import { currentUser } from '../data/mockData';

const howItWorks = [
  { step: 1, title: "Spot Your Person", desc: "Pick someone you'd genuinely enjoy going out with.", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=60&h=60&fit=crop" },
  { step: 2, title: "Send a Drink", desc: "Offer their first drink your way of saying let's go out.", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=60&h=60&fit=crop" },
  { step: 3, title: "They Accept → You're Set", desc: "Once accepted, it's a confirmed plan. No endless chatting.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=60&h=60&fit=crop" },
];

const benefits = [
  "Get noticed faster",
  "Higher chances your invite gets accepted",
  "Unlock drink invites & premium interactions",
  "Build trust with every profile visit",
];

export default function RightPanel({ onGetVerified }) {
  return (
    <div className="right-panel fade-in">
      <div className="rp-user-row">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="rp-avatar" />
        <div>
          <h3 className="rp-title">Make Your First Move</h3>
          <p className="rp-sub">Verify your profile to start sending invites and offering drinks.</p>
        </div>
      </div>

      <div className="rp-section">
        <h4 className="rp-section-title">How It Works</h4>
        <div className="how-it-works">
          {howItWorks.map((item) => (
            <div key={item.step} className="hiw-item">
              <div className="hiw-step-badge">{item.step}</div>
              <div className="hiw-img-wrap">
                <img src={item.img} alt={item.title} />
              </div>
              <div>
                <p className="hiw-title">{item.title}</p>
                <p className="hiw-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rp-benefits">
        {benefits.map((b, i) => (
          <div key={i} className="benefit-item">
            <span className="benefit-icon">✓</span>
            <span>{b}</span>
          </div>
        ))}
      </div>

      <button className="btn-primary get-verified-btn" onClick={onGetVerified}>
        Get Verified
      </button>
      <p className="takes-less">Takes less than 60 seconds</p>
      <button className="maybe-later">Maybe later</button>
    </div>
  );
}
