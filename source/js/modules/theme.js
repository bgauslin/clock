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
   * Sets 'theme' attribute and stores its value for later visits.
   * @private
   */
  setTheme_() {
    document.body.setAttribute(Theming.ATTR, this.theme);
    localStorage.setItem(Theming.ITEM, this.theme);
  }

  /**
   * Adds a DOM element that toggles the theme when clicked.
   * @private
   */
  updateTheme_() {
    document.body.innerHTML += `<a class="${Theming.TOGGLE}" href="#"></a>`;
    const themifier = document.querySelector(`.${Theming.TOGGLE}`);

    themifier.addEventListener('click', (e) => {
      e.preventDefault();
      this.theme = (this.theme === Theming.DEFAULT) ? Theming.ALT : Theming.DEFAULT;
      this.setTheme_();
    });
  }
}

export { Theme };
