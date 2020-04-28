import {Utils} from '../modules/Utils';

const CLOCKS_CLASS: string = 'clocks';
const CONTENT_CLASS: string = 'content';
const COPYRIGHT_SELECTOR: string = '.copyright__years';
const YEAR_ATTR: string = 'year';

/**
 * Custom element that initializes site-wide utilities, renders analog clock
 * elements, and updates the copyright years.
 */
class App extends HTMLElement {
  constructor() {
    super();
    new Utils().init();
  }

  connectedCallback(): void {
    this.injectClocks_(9);
    this.updateCopyright_();
  }

  /**
   * Clears out content element and renders analog clocks inside of it.
   */
  private injectClocks_(n: number): void {
    const contentEl = this.querySelector(`.${CONTENT_CLASS}`);
    contentEl.classList.remove(CONTENT_CLASS);
    contentEl.classList.add(CLOCKS_CLASS);

    contentEl.innerHTML = '';
    for (let i = 1; i <= n; i++) {
      contentEl.innerHTML += '<analog-clock class="clock"></analog-clock>';
    }
  }

  /**
   * Updates copyright years with the current year.
   */
  private updateCopyright_(): void {
    const startYear = this.getAttribute(YEAR_ATTR);
    const currentYear = new Date().getFullYear().toString();

    const startDecade = startYear.substr(-2);
    const currentDecade = currentYear.substr(-2);

    const el = this.querySelector(COPYRIGHT_SELECTOR);
    el.textContent = (startDecade !== currentDecade) ? `© ${startYear}–${currentDecade}` : `© ${startYear}`;

    this.removeAttribute(YEAR_ATTR);
  }
}

export {App};
