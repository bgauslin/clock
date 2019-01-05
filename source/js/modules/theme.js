/** @enum {string} */
const Theming = {
  ATTR: 'theme',
  TOGGLE: 'themifier',
  ITEM: 'theme',
  ALT: 'dark',
  DEFAULT: 'light',
}

/** @class */
class Theme {
  constructor() {
    /** @const {string} */
    this.theme = localStorage.getItem(Theming.ITEM) || Theming.DEFAULT;
  }

  /**
   * Initializes theming.
   * @public
   */
  init() {
    this.setTheme_();
    this.updateTheme_();
  }

  /**
   * Sets 'theme' attribute and stores it.
   * @private
   */
  setTheme_() {
    document.body.setAttribute(Theming.ATTR, this.theme);
    localStorage.setItem(Theming.ITEM, this.theme);
  }

  /**
   * Updates 'theme' on click.
   * @private
   */
  updateTheme_() {
    const html = `<a class="${Theming.TOGGLE}" href="#"></a>`;
    document.body.innerHTML += html;

    const themifier = document.querySelector(`.${Theming.TOGGLE}`);
    themifier.addEventListener('click', (e) => {
      e.preventDefault();
      this.theme = (this.theme === Theming.DEFAULT) ? Theming.ALT : Theming.DEFAULT;
      this.setTheme_();
    });
  }
}

export { Theme };
