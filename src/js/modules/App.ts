import { Utils } from './Utils';

enum FooterInfo {
  label = 'Ben Gauslin',
  title = 'Ben Gauslin’s Website',
  url = 'https://gauslin.com',
  yearStart = '2018',
}

class App {
  private utils_: any;

  constructor() {
    this.utils_ = new Utils();
  }

  /**
   * Renders all elements into the DOM.
   */
  public init(): void {
    this.utils_.init();
    this.removeNoScript_();
    this.updateHeader_();
    this.injectClocks_();
    this.updateFooter_();
  }

  /**
   * Removes all noscript elements from the DOM.
   */
  private removeNoScript_() {
    const noscriptEls = document.getElementsByTagName('noscript');
    [...noscriptEls].forEach(el => el.parentNode.removeChild(el));
  }

  /**
   * Injects custom elements into the header.
   */
  private updateHeader_() {
    const frameEl = document.querySelector('.header__frame');
    const sitenameEl = document.querySelector('.site-name');

    const digitalClock = document.createElement('digital-clock');
    sitenameEl.replaceChild(digitalClock, sitenameEl.childNodes[0]);

    const frameHtml = `\
      <color-picker class="color-picker"></color-picker>\
      <app-theme class="themifier"></app-theme>\
    `;
    frameEl.innerHTML += frameHtml.replace(/\s\s/g, '');
  }

  /**
   * Renders clock elements.
   */
  private injectClocks_(n: number = 9): void {
    const clocksEl = document.querySelector('.clocks');
    let i = 1;
    while (i <= n) {
      clocksEl.innerHTML += '<analog-clock class="clock"></analog-clock>';
      i++;
    }
  }

  /**
   * Renders a footer with a copyright notice and link.
   */
  private updateFooter_(): void {
    const { label, title, url, yearStart } = FooterInfo;
    const yearEnd = new Date().getFullYear().toString().substr(-2);

    const yearsEl = document.querySelector('.copyright__years');
    const ownerEl = document.querySelector('.copyright__owner');

    const ownerElHtml = `\
      <a class="copyright__owner" \
          href="${url}" \
          title="${title} (opens in a new window)" \
          target="_blank" \
          rel="noopener">${label}</a>\
    `;

    yearsEl.textContent = `© ${yearStart}–${yearEnd}`;
    ownerEl.innerHTML = ownerElHtml.replace(/\s\s/g, '');
  }
}

export { App };
