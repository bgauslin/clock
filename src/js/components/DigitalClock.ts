class DigitalClock extends HTMLElement {
  constructor() {
    super();
  }

  /** @callback */
  connectedCallback(): void {
    this.setTime_();
    setInterval(() => this.setTime_(), 1000);
  }
  
  /** @callback */
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
