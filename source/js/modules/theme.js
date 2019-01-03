/** @param {enum} */
const Theming = {
  ATTR: 'theme',
  TOGGLE: 'themifier',
  ITEM: 'theme',
  ALT: 'dark',
  DEFAULT: 'light',
}

class Theme {
  constructor() {
    /** @param {string} */
    this.theme = localStorage.getItem(Theming.ITEM) || Theming.DEFAULT;
  }

  /**
   * @description Initializes theming.
   */
  init() {
    this.setTheme();
    this.updateTheme();
  }

  /**
   * @description Sets 'theme' attribute and stores it.
   */
  setTheme() {
    document.body.setAttribute(Theming.ATTR, this.theme);
    localStorage.setItem(Theming.ITEM, this.theme);
  }

  /**
   * @description Updates 'theme' on click.
   */
  updateTheme() {
    const html = `<a class="${Theming.TOGGLE}" href="#"></a>`;
    document.body.innerHTML += html;

    const themifier = document.querySelector(`.${Theming.TOGGLE}`);
    themifier.addEventListener('click', (e) => {
      e.preventDefault();
      this.theme = (this.theme === Theming.DEFAULT) ? Theming.ALT : Theming.DEFAULT;
      this.setTheme();
    });
  }
}

export { Theme };
