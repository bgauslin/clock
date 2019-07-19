class DigitalClock extends HTMLElement {
  constructor() {
    super();
  }

  /** @callback */
  connectedCallback() {
    setInterval(() => this.displayTime_(), 1000);
  }
  
  /** @callback */
  disconnectedCallback() {
    clearInterval();
  }

  /**
   * Displays the current time.
   * @private
   */
  displayTime_() {
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
