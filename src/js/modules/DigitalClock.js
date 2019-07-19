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
    const h = now.getHours();
    const m = this.zeroPad_(now.getMinutes());
    const s = this.zeroPad_(now.getSeconds());
    
    this.textContent = `${h}:${m}:${s}`;
  }

  /**
   * Prepends a zero for values below 10.
   * @private
   */
  zeroPad_(n) {
    return (n < 10) ? `0${n}` : n;
  }
}

export { DigitalClock };
