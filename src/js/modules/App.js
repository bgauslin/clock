import { Clock } from './Clock';
import { ColorPicker } from './ColorPicker';
import { Themifier } from './Themifier';

/** @class */
class App {
  /**
   * Defines custom elements then renders all elements into the DOM.
   * @public
   */
  init() {
    customElements.define('analog-clock', Clock);
    customElements.define('color-picker', ColorPicker);
    customElements.define('x-theme', Themifier);

    this.renderHeader_();
    this.renderClocks_();
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
          <color-picker class="color-picker"></color-picker>
          <x-theme class="themifier">${this.renderIcon_()}</x-theme>
        </div>
      </header>
    `;
  }

  /**
   * Renders clock custom elements.
   * @param {?number=} n - Number of clocks to render.
   * @private
   */
  renderClocks_(n = 9) {
    let clocks = '';
    for (let i = 1; i <= n; i++) {
      clocks += '<analog-clock></analog-clock>';
    }

    document.body.innerHTML += `
      <main class="clocks">
        <div class="clocks__frame">
          ${clocks}
        </div>
      </main>
    `;
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

  /**
   * Renders an inline theming SVG icon.
   * @private
   */
  renderIcon_() {
    const svgPath = 'M0.375 12 C0.375 18.42 5.58 23.625 12 23.625 18.42 23.625 23.625 18.42 23.625 12 23.625 5.58 18.42 0.375 12 0.375 5.58 0.375 0.375 5.58 0.375 12 Z M12 20.625 L12 3.375 C16.767 3.375 20.625 7.233 20.625 12 20.625 16.767 16.767 20.625 12 20.625 Z';
    return `
      <svg class="icon icon--themifier" viewbox="0 0 24 24">
        <path d="${svgPath}"/>
      </svg>
    `;
  }
}

/** @const {Object} */
const FOOTER_INFO = {
  label: 'Ben Gauslin',
  title: 'Ben Gauslin’s Website',
  url: 'https://gauslin.com',
  yearStart: '2018',
  yearEnd: new Date().getFullYear().toString().substr(-2),
}

export { App };
