const INTERVAL_MS: number = 1000;
const TARGET_ATTR: string = 'target';

/**
 * Custom element that renders a digital clock based on system time.
 */
export class DigitalClock extends HTMLElement {
  private targetEl: HTMLElement;
  private interval: any;

  constructor() {
    super();
    this.interval = setInterval(() => this.setTime(), INTERVAL_MS);
  }

  connectedCallback() {
    this.targetEl = this.querySelector(this.getAttribute(TARGET_ATTR));
    this.removeAttribute(TARGET_ATTR);
    this.setTime();
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  private setTime() {
    const now = new Date();
    this.targetEl.textContent = now.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
  }
}

customElements.define('digital-clock', DigitalClock);
