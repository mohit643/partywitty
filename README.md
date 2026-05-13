# PartyWitty – React Assessment

A pixel-perfect React implementation of the PartyWitty app design, built as part of the frontend assessment.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd partywitty

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx / .css        # Left nav sidebar
│   ├── ProfileCard.jsx / .css    # Center swipe card (Home)
│   ├── RightPanel.jsx / .css     # Right CTA panel (How It Works)
│   ├── YouChoseHer.jsx / .css    # Modal – after tapping Go Tonight
│   └── Verification.jsx / .css  # Modals – VerificationIntro, FaceScan, ShowVibe
├── pages/
│   ├── PartyPackage.jsx / .css   # Tonight near you – venue grid
│   ├── BuyDrinks.jsx / .css      # Drink selection page
│   └── OrderSummary.jsx / .css   # Checkout / bill summary
├── data/
│   └── mockData.js               # All mock data (users, venues, drinks)
├── App.js                        # Root component – routing & state
├── App.css                       # Layout & global page styles
└── index.css                     # Design tokens (CSS variables), globals
```

---

## 🎯 Features Implemented

### Screens
1. **Home / Explore Feed** – Profile card with Go Tonight / Like / Skip actions + right panel with How It Works
2. **You Chose Her Modal** – Triggered on "Go Tonight", shows profile with Make Your Move CTA
3. **Party Package / Tonight Near You** – Venue grid with search, Happening Now badges, Zoya visited tags, discounts
4. **Buy Drinks** – Drink grid with badge system (Most Likely to Get Accepted, Most Popular, etc.), gift selection, bio section
5. **Order Summary** – Bill breakdown, ticket price, drink price, T&C checkbox, Make The Move Now
6. **Verification Intro Modal** – Benefits, Verify & Send Invite CTA
7. **Face Scan Modal** – Face frame overlay UI with capture controls
8. **Show Your Vibe Modal** – Photo grid with add/remove, 3x invite tip, progress bar
9. **Success Screen** – Confirmation after full flow

### User Flow
```
Home → [Go Tonight] → YouChoseHer Modal
     → [Make Your Move] → Party Package (venue selection)
     → [Select Venue] → Buy Drinks
     → [Continue] → Order Summary
     → [Make The Move Now] → Verification Intro Modal
     → [Verify & Send] → Face Scan Modal
     → [Capture] → Show Your Vibe Modal
     → [Done] → ✅ Success Screen
```

---

## 🎨 Design Decisions

- **CSS Variables** for the full design token system (colors, radii, shadows, fonts)
- **Syne** (display) + **DM Sans** (body) — matches the premium nightlife aesthetic
- **No external UI library** — all components built from scratch for maximum customizability
- **Reusable components**: `DrinkCard`, `VenueCard`, `Sidebar`, `ProfileCard` are all independently reusable
- **Gradient system**: Pink-to-orange (`#E91E8C → #FF6B35`) for CTAs, consistent across all screens
- **Smooth animations**: `fadeIn` + `slideUp` keyframes on every screen transition

---

## 🧩 Reusability

| Component | Reusable? | Props |
|-----------|-----------|-------|
| `Sidebar` | ✅ | `activeNav`, `setActiveNav` |
| `ProfileCard` | ✅ | `onGoTonight`, `onLike`, `onSkip` |
| `YouChoseHer` | ✅ | `onClose`, `onMakeMove` |
| `VenueCard` | ✅ | `venue`, `onSelect` |
| `DrinkCard` | ✅ | `drink`, `selected`, `onSelect` |
| `VerificationIntro` | ✅ | `onClose`, `onVerify` |
| `FaceScan` | ✅ | `onClose`, `onSuccess` |
| `ShowVibe` | ✅ | `onClose`, `onDone` |

---

## 📦 Tech Stack

- **React 18** (functional components + hooks)
- **Plain CSS** (no Tailwind/styled-components – per assessment scope)
- **CSS Custom Properties** for theming
- **Mock data** via `src/data/mockData.js` (no backend required)

---

## 📝 Additional Notes

- All data is mocked locally — no API calls needed
- The app is fully navigable end-to-end following the Figma user flow
- Responsive for desktop; optimized for 1280px+ viewport
- Images sourced from Unsplash (free, no attribution required for assessment)

---

## 👤 Author

Built for the PartyWitty React Developer Assessment.
