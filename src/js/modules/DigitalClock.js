class DigitalClock extends HTMLElement {
  constructor() {
    super();
  }

  /** @callback */
  connectedCallback() {
    setInterval(() => {
      const now = new Date();
      this.textContent = now.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    }, 1000);
  }
  
  /** @callback */
  disconnectedCallback() {
    clearInterval();
  }
}

export { DigitalClock };
