import { Utils } from './Utils';

enum FooterInfo {
  label = 'Ben Gauslin',
  title = 'Ben Gauslin’s Website',
  url = 'https://gauslin.com',
  yearStart = '2018',
}

enum CssClass {
  CLOCKS = 'clocks',
  CONTENT = 'content',
  HEADER = 'header__frame',
  SITE_NAME = 'site-name',
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
    const headerEl = document.querySelector(`.${CssClass.HEADER}`);
    const sitenameEl = document.querySelector(`.${CssClass.SITE_NAME}`);

    const digitalClock = document.createElement('digital-clock');
    sitenameEl.replaceChild(digitalClock, sitenameEl.childNodes[0]);

    const frameHtml = `\
      <color-picker class="color-picker"></color-picker>\
      <app-theme class="themifier"></app-theme>\
    `;
    headerEl.innerHTML += frameHtml.replace(/\s\s/g, '');
  }

  /**
   * Renders clock elements.
   */
  private injectClocks_(n: number = 9): void {
    const contentEl = document.querySelector(`.${CssClass.CONTENT}`);
    let i = 1;
    while (i <= n) {
      contentEl.innerHTML += '<analog-clock class="clock"></analog-clock>';
      i++;
    }
    contentEl.classList.remove(CssClass.CONTENT);
    contentEl.classList.add(CssClass.CLOCKS);
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
