import React, { useState } from 'react';
import './index.css';

import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import RightPanel from './components/RightPanel';
import YouChoseHer from './components/YouChoseHer';
import PartyPackage from './pages/PartyPackage';
import BuyDrinks from './pages/BuyDrinks';
import OrderSummary from './pages/OrderSummary';
import { VerificationIntro, FaceScan, ShowVibe } from './components/Verification';

// Pages/Steps
const STEPS = {
  HOME: 'home',
  PARTY_PACKAGE: 'party_package',
  BUY_DRINKS: 'buy_drinks',
  ORDER_SUMMARY: 'order_summary',
  SUCCESS: 'success',
};

// Modals
const MODALS = {
  NONE: null,
  YOU_CHOSE_HER: 'you_chose_her',
  VERIF_INTRO: 'verif_intro',
  FACE_SCAN: 'face_scan',
  SHOW_VIBE: 'show_vibe',
};

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [step, setStep] = useState(STEPS.HOME);
  const [modal, setModal] = useState(MODALS.NONE);
  const [selectedDrink, setSelectedDrink] = useState(null);

  const closeModal = () => setModal(MODALS.NONE);

  // Flow: Home → YouChoseHer modal → PartyPackage → BuyDrinks → OrderSummary → Success
  const handleGoTonight = () => setModal(MODALS.YOU_CHOSE_HER);
  const handleMakeMove = () => {
    closeModal();
    setStep(STEPS.PARTY_PACKAGE);
  };
  const handleSelectVenue = () => setStep(STEPS.BUY_DRINKS);
  const handleDrinkContinue = (drink) => {
    setSelectedDrink(drink);
    setStep(STEPS.ORDER_SUMMARY);
  };
  const handleOrderMakeMove = () => setModal(MODALS.VERIF_INTRO);
  const handleVerifyStart = () => setModal(MODALS.FACE_SCAN);
  const handleFaceDone = () => setModal(MODALS.SHOW_VIBE);
  const handleVibeDone = () => {
    closeModal();
    setStep(STEPS.SUCCESS);
  };
  const handleGetVerified = () => setModal(MODALS.VERIF_INTRO);

  const renderMain = () => {
    switch (step) {
      case STEPS.HOME:
        return (
          <div className="home-layout">
            <div className="home-center">
              <ProfileCard
                onGoTonight={handleGoTonight}
                onLike={() => {}}
                onSkip={() => {}}
              />
            </div>
            <RightPanel onGetVerified={handleGetVerified} />
          </div>
        );
      case STEPS.PARTY_PACKAGE:
        return <PartyPackage onSelectVenue={handleSelectVenue} />;
      case STEPS.BUY_DRINKS:
        return <BuyDrinks onContinue={handleDrinkContinue} />;
      case STEPS.ORDER_SUMMARY:
        return (
          <OrderSummary
            selectedDrink={selectedDrink}
            onBack={() => setStep(STEPS.BUY_DRINKS)}
            onMakeMove={handleOrderMakeMove}
          />
        );
      case STEPS.SUCCESS:
        return (
          <div className="success-screen fade-in">
            <div className="success-card">
              <div className="success-emoji">🎉</div>
              <h2>Move Made!</h2>
              <p>Your invite has been sent to <strong>Zoe Miller</strong>.</p>
              <p className="success-sub">You'll be notified when she accepts. Go get ready!</p>
              <button className="btn-primary" onClick={() => { setStep(STEPS.HOME); setModal(MODALS.NONE); }}>
                Back to Home
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activeNav={activeNav} setActiveNav={(nav) => { setActiveNav(nav); setStep(STEPS.HOME); }} />
      <main className="main-content">
        {renderMain()}
      </main>

      {/* Modals */}
      {modal === MODALS.YOU_CHOSE_HER && (
        <YouChoseHer onClose={closeModal} onMakeMove={handleMakeMove} />
      )}
      {modal === MODALS.VERIF_INTRO && (
        <VerificationIntro onClose={closeModal} onVerify={handleVerifyStart} />
      )}
      {modal === MODALS.FACE_SCAN && (
        <FaceScan onClose={closeModal} onSuccess={handleFaceDone} />
      )}
      {modal === MODALS.SHOW_VIBE && (
        <ShowVibe onClose={closeModal} onDone={handleVibeDone} />
      )}
    </div>
  );
}
