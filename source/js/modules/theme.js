/** @param {enum} */
const Theming = {
  ATTR: 'theme',
  ITEM: 'theme',
  ALT: 'dark',
  DEFAULT: 'light',
}

class Theme {
  constructor() {
    /** @param {string} */
    this.theme = localStorage.getItem(Theming.ITEM) || Theming.DEFAULT;
  }

  init() {
    this.setTheme(this.theme);
    this.updateTheme();
  }

  /** @description Set 'theme' attribute and stores it. */
  setTheme() {
    document.body.setAttribute(Theming.ATTR, this.theme);
    localStorage.setItem(Theming.ITEM, this.theme);
  }

  /** @description Updates 'theme' on click. */
  updateTheme() {
    window.addEventListener('click', () => {
      this.theme = (this.theme === Theming.DEFAULT) ? Theming.ALT : Theming.DEFAULT;
      this.setTheme();
    });
  }
}

export { Theme };
