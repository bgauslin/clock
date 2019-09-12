const INTERVAL_MS: number = 1000;

class DigitalClock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(): void {
    this.setTime_();
    setInterval(() => this.setTime_(), INTERVAL_MS);
  }
  
  disconnectedCallback(): void {
    clearInterval();
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

export { DigitalClock };
