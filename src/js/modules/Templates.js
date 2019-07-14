import { Clock } from './Clock';
import { ColorPicker } from './ColorPicker';
import { Themifier } from './Themifier';

/** @const {string} */
const CLOCKS_SELECTOR = '.clocks__frame';

/** @const {Object} */
const FOOTER_INFO = {
  label: 'Ben Gauslin',
  title: 'Ben Gauslin’s Website',
  url: 'https://gauslin.com',
  yearStart: '2018',
  yearEnd: new Date().getFullYear().toString().substr(-2),
}

/** @class */
class Templates {
  /**
   * Defines custom elements then renders all elements into the DOM.
   * @public
   */
  init() {
    customElements.define('analog-clock', Clock);
    customElements.define('color-picker', ColorPicker);
    customElements.define('app-theme', Themifier);

    this.renderHeader_();
    this.renderClockContainer_();
    this.renderClocks_(CLOCKS_SELECTOR);
    this.renderFooter_();
  }

  /**
   * Renders header element.
   * @private
   */
  renderHeader_() {
    document.body.innerHTML += `
      <header class="header">
        <div class="header__frame">
          <h1 class="site-name">${document.title}</h1>
          <color-picker></color-picker>
          <app-theme is="button"></app-theme>
        </div>
      </header>
    `;
  }

  /**
   * Renders container element for all clock custom elements.
   * @private
   */
  renderClockContainer_() {
    document.body.innerHTML += `
      <main class="clocks">
        <div class="clocks__frame"></div>
      </main>
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
      containerEl.innerHTML += `<analog-clock></analog-clock>\n`;
    }
  }

  /**
   * Renders a footer with a copyright notice and link.
   * @private
   */
  renderFooter_() {
    const { label, title, url, yearStart, yearEnd } = FOOTER_INFO;
    document.body.innerHTML += `
      <footer class="footer">
        <p class="copyright">
          <span class="copyright__years">© ${yearStart}-${yearEnd}</span>
          <a class="copyright__owner"
              href="${url}"
              title="${title} (opens in a new window)"
              target="_blank"
              rel="noopener">${label}</a>
        </p>
      </footer>
    `;
  }
}

export { Templates };
