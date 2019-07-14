import fastclick from 'fastclick';
import { Clock } from './Clock';
import { ColorPicker } from './ColorPicker';
import { Themifier } from './Themifier';

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
    fastclick.attach(document.body);

    customElements.define('analog-clock', Clock);
    customElements.define('color-picker', ColorPicker);
    customElements.define('app-theme', Themifier);

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
          <app-theme is="button">${this.renderIcon_('contrast')}</app-theme>
        </div>
      </header>
    `;
  }

  /**
   * Renders clock custom elements.
   * @param {!string} selector - Element's selector for attaching clocks to.
   * @param {?number=} n - Number of clocks to render.
   * @private
   */
  renderClocks_(selector, n = 9) {
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
   * Renders an inline SVG icon.
   * @param {string} name - The icon's name.
   * @param {?string=} modifier - BEM classname modifier
   * @private
   */
  renderIcon_(name, modifier = name) {
    let svgPath;
    switch (name) {
      case 'contrast':
        svgPath = 'M0.375 12 C0.375 18.42 5.58 23.625 12 23.625 18.42 23.625 23.625 18.42 23.625 12 23.625 5.58 18.42 0.375 12 0.375 5.58 0.375 0.375 5.58 0.375 12 Z M12 20.625 L12 3.375 C16.767 3.375 20.625 7.233 20.625 12 20.625 16.767 16.767 20.625 12 20.625 Z';
        break;
      case 'palette':
        svgPath = 'M9.577 0.234 C4.917 1.144 1.162 4.889 0.244 9.534 -1.491 18.3 6.417 24.834 12.375 23.911 14.306 23.611 15.253 21.352 14.367 19.613 13.284 17.484 14.831 15 17.222 15 L20.958 15 C22.636 15 23.995 13.613 24 11.939 23.976 4.552 17.255 -1.261 9.577 0.234 Z M4.5 15 C3.67 15 3 14.33 3 13.5 3 12.67 3.67 12 4.5 12 5.33 12 6 12.67 6 13.5 6 14.33 5.33 15 4.5 15 Z M6 9 C5.17 9 4.5 8.33 4.5 7.5 4.5 6.67 5.17 6 6 6 6.83 6 7.5 6.67 7.5 7.5 7.5 8.33 6.83 9 6 9 Z M12 6 C11.17 6 10.5 5.33 10.5 4.5 10.5 3.67 11.17 3 12 3 12.83 3 13.5 3.67 13.5 4.5 13.5 5.33 12.83 6 12 6 Z M18 9 C17.17 9 16.5 8.33 16.5 7.5 16.5 6.67 17.17 6 18 6 18.83 6 19.5 6.67 19.5 7.5 19.5 8.33 18.83 9 18 9 Z';
        break;
    }

    return `
      <svg class="icon icon--${modifier}" viewbox="0 0 24 24">
        <path d="${svgPath}"/>
      </svg>
    `;
  }
}

export { Templates };
