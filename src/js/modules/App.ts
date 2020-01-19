import {Utils} from './Utils';

enum CssClass {
  CLOCKS = 'clocks',
  CONTENT = 'content',
  HEADER = 'header__frame',
  SITE_NAME = 'site-name',
}

class App {
  private startYear_: string;
  private utils_: Utils;

  constructor(startYear: string) {
    this.startYear_ = startYear || '';
    this.utils_ = new Utils();
  }

  /**
   * Renders all elements into the DOM.
   */
  public init(): void {
    this.utils_.init();
    this.updateHeader_();
    this.injectClocks_();
    this.updateCopyright_();
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
   * Clears out content element and renders clocks inside of it.
   */
  private injectClocks_(n: number = 9): void {
    const contentEl = document.querySelector(`.${CssClass.CONTENT}`);
    contentEl.innerHTML = '';

    for (let i = 1; i <= n; i++) {
      contentEl.innerHTML += '<analog-clock class="clock"></analog-clock>';
    }

    contentEl.classList.remove(CssClass.CONTENT);
    contentEl.classList.add(CssClass.CLOCKS);
  }

  /**
   * Updates copyright blurb with current year.
   */
  private updateCopyright_(): void {
    const el = document.querySelector('.copyright__years');
    const currentYear = new Date().getFullYear().toString().substr(-2);
    el.textContent = `© ${this.startYear_}–${currentYear}`;
  }
}

export {App};
