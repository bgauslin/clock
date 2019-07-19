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

    let hours = now.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    const ampm = (hours >= 12) ? 'pm' : 'am';

    const minutes = this.zeroPad_(now.getMinutes());
    const seconds = this.zeroPad_(now.getSeconds());
  
    this.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
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
