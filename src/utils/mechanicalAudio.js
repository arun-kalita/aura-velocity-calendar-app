/**
 * Neural Sound Engine - Synthesizes mechanical sounds using Web Audio API
 * No external files required.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  // A soft, premium mechanical "Thump"
  playClunk() {
    this.init();
    const { ctx } = this;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(60, now);
    osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.15);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  // A sharp but quiet "Tick"
  playClick() {
    this.init();
    const { ctx } = this;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.02);
    
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.02);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.02);
  }

  // A haptic-style vibration buzz
  playBuzz() {
    this.init();
    const { ctx } = this;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, now);
    
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.1);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  play(type) {
    switch (type) {
      case 'click':
      case 'success':
        this.playClick();
        break;
      case 'clunk':
      case 'error':
        this.playClunk();
        break;
      case 'buzz':
      case 'warning':
        this.playBuzz();
        break;
      default:
        this.playClick();
    }
  }
}

export const mechanicalAudio = new SoundEngine();
