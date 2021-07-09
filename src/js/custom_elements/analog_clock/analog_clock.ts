const INTERVAL_MS: number = 1000;

/**
 * Custom element that renders the minute and hours hands of analog clock via
 * SVG based on system time.
 */
export class AnalogClock extends HTMLElement {
  private interval: number;
  private previousMinutesAngle: number;
  private template: any;

  constructor() {
    super();
    this.interval = window.setInterval(() => this.setHands(), INTERVAL_MS);
    this.previousMinutesAngle = 0;
    this.template = require('./analog_clock.pug');
  }

  connectedCallback() {
    this.setHands();
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  /**
   * Calculates rotations for hours and minutes hands and renders an SVG.
   */
  private setHands() {
    // Get the current time.
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Set angles for clock hands.
    const hoursAngle = (hours * 60 + minutes) * .5; 
    const minutesAngle = minutes * 6;

    // Redraw clock only when the minutes angle has changed (i.e. every minute).
    if (minutesAngle !== this.previousMinutesAngle) {
      this.previousMinutesAngle = minutesAngle;
      this.innerHTML = this.template({
        hoursAngle,
        minutesAngle,
      });
    }
  }
}

customElements.define('analog-clock', AnalogClock);
