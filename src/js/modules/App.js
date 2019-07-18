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
    customElements.define('app-theme', Themifier, {extends: 'button'});

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
          <color-picker></color-picker>
          <button is="app-theme"></button>
        </div>
      </header>
    `;
  }

  /**
   * Renders clock elements.
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
    const label = 'Ben Gauslin';
    const title = 'Ben Gauslin’s Website';
    const url = 'https://gauslin.com';
    const yearStart = '2018';
    const yearEnd = new Date().getFullYear().toString().substr(-2);

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

export { App };
