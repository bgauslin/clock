const INTERVAL_MS: number = 1000;

class DigitalClock extends HTMLElement {
  private interval_: any;

  constructor() {
    super();
    this.setTime_();
    this.interval_ = setInterval(() => this.setTime_(), INTERVAL_MS);
  }
  
  disconnectedCallback(): void {
    clearInterval(this.interval_);
  }

  private setTime_(): void {
    const now = new Date();
    this.textContent = now.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
  }
}

export {DigitalClock};
