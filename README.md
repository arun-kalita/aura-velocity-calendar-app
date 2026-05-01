# Antigravity — Neural Efficiency Dashboard

Antigravity is a high-performance, mobile-first scheduling and efficiency engine designed to align daily activities with biological energy levels (circadian rhythms) and neural states. It features a custom temporal engine with mechanical haptic feedback and real-time Firestore synchronization.

![Dashboard Main](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/1.png)

## 📸 Visual Tour

| Dashboard Overview | Circadian Alignment | Activity Management |
|:---:|:---:|:---:|
| ![1](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/1.png) | ![2](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/2.png) | ![3](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/3.png) |

| Deep Work Analysis | Neural Retro-spec | Mechanical Feedback |
|:---:|:---:|:---:|
| ![4](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/4.png) | ![5](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/5.png) | ![6](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/6.png) |

| Mobile Optimization | Mastery Projections | System Settings |
|:---:|:---:|:---:|
| ![7](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/7.png) | ![8](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/8.png) | ![9](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/9.png) |

> *Full system capability including cross-platform synchronization (Image 10).*
> ![10](https://github.com/arun-kalita/aura-velocity-calendar-app/raw/main/public/10.png)

## 🚀 Key Features

- **Biological Alignment**: Dynamically calculates "Energy Levels" based on user chronotypes, providing an alignment score for every scheduled activity.
- **Robust Temporal Engine**: Custom-built scheduling engine that handles recursive exclusivity enforcement, preventing block overlaps and ensuring temporal integrity.
- **Mechanical UI Architecture**: Features high-fidelity haptic and auditory feedback ("Mechanical Pulses") for system interactions, creating a tactile digital experience.
- **Neural Retro-spec**: Integrated retrospective logic that analyzes past performance and "Regret Ratings" to predict future efficiency.
- **Real-time Sync**: Atomic Firestore synchronization with local optimistic state management for a zero-latency user experience.
- **Mobile-First Design**: Fully responsive, gesture-driven interface optimized for high-density scheduling on the go.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **State Management**: React Context + Custom Hooks
- **Backend**: Firebase (Firestore, Auth, Hosting)
- **Utilities**: Date-fns (Temporal logic), Lucide-React (Iconography)
- **Animations**: CSS Variables + RequestAnimationFrame (60fps drag operations)

## 🏗️ Technical Architecture

### Temporal Integrity Engine
The core scheduling logic is handled by a custom-built utility that processes incoming log updates through a chronological sorting and push-forward cascade. This ensures that the schedule remains exclusive and logically consistent even during rapid drag-and-drop interactions.

### Circular Energy Mapping
Integrates biological data (chronotype) with activity categories to visualize "Aura" and alignment scores. The UI adapts its color palette and glow effects based on the current energy state.

## 🚦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arun-kalita/aura-velocity-calendar-app.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run locally**:
   ```bash
   npm run dev
   ```

## 📜 License
MIT
