/**
 * Custom element that renders a digital clock based on system time.
 */
export class DigitalClock extends HTMLElement {
  private interval: number;

  constructor() {
    super();
    this.interval = window.setInterval(() => this.setTime(), 1000);
  }

  connectedCallback() {
    this.setTime();
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  private setTime() {
    const now = new Date();
    this.textContent = now.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });
  }
}

customElements.define('digital-clock', DigitalClock);
