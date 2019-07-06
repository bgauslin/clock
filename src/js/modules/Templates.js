import { Clock } from './Clock';

/** @const {string} */
const CLOCK_ELEMENT = 'my-clock';

/** @const {string} */
const CLOCKS_SELECTOR = '.clocks__frame';

/** @class */
class Templates {
  constructor() {};

  /**
   * Renders all app elements into the DOM.
   * @public
   */
  init() {
    this.renderClockContainer_();
    this.renderCopyright_();
    customElements.define(CLOCK_ELEMENT, Clock);
    this.renderClocks_(CLOCKS_SELECTOR);
  }

  /**
   * Renders container element for all clock custom elements.
   * @private
   */
  renderClockContainer_() {
    document.body.innerHTML += `
      <div class="clocks">
        <div class="clocks__frame"></div>
      </div>
    `;
  }

  /**
   * Renders clock custom elements.
   * @param {!string} selector - Element's selector for attaching clocks to.
   * @param {?number=} n - Number of clocks to render.
   * @private
   */
  renderClocks_(selector, n = 9) {
    const containerEl = document.querySelector(selector);
    for (let i = 1; i <= n; i++) {
      containerEl.innerHTML += `<${CLOCK_ELEMENT}></${CLOCK_ELEMENT}>\n`;
    }
  }

  /**
   * Renders a copyright notice and link.
   * @private
   */
  renderCopyright_() {
    const year = '2019';
    document.body.innerHTML += `
      <p class="copyright">
        <span class="copyright__bug">© ${year}</span>
        <a class="copyright__link" href="https://gauslin.com" title="Visit Gauslin.com" target="_blank" rel="noopener">Ben Gauslin</a>
      </p>
    `;
  }
}

export { Templates };
