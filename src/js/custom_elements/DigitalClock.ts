const INTERVAL_MS: number = 1000;
const TARGET_ATTR: string = 'target';

/**
 * Custom element that renders a digital clock based on system time.
 */
class DigitalClock extends HTMLElement {
  private targetEl_: HTMLElement;
  private interval_: any;

  constructor() {
    super();
    this.interval_ = setInterval(() => this.setTime_(), INTERVAL_MS);
  }

  connectedCallback(): void {
    this.targetEl_ = this.querySelector(this.getAttribute(TARGET_ATTR));
    this.removeAttribute(TARGET_ATTR);
    this.setTime_();
  }

  disconnectedCallback(): void {
    clearInterval(this.interval_);
  }

  private setTime_(): void {
    const now = new Date();
    this.targetEl_.textContent = now.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
  }
}

export {DigitalClock};
