import fastclick from 'fastclick';

/**
 * Custom element that sets up the DOM and initialize site-wide features.
 */
export class Tools extends HTMLElement {
  private hasSetup: boolean;

  constructor() {
    super();
    this.hasSetup = false;
  }

  connectedCallback() {
    if (!this.hasSetup) {
      document.body.removeAttribute('no-js');
      this.touchEnabled();
      this.hasSetup = true;
    }
  }

  /**
   * Removes 'no-touch' attribute and adds fastclick if device is touch-enabled.
   */
  private touchEnabled() {
    if ('ontouchstart' in window || (window as any).DocumentTouch) {
      document.body.removeAttribute('no-touch');
      fastclick['attach'](document.body);
    }
  }
}

customElements.define('x-tools', Tools);
