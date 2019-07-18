/** @const {string} */
const THEME_ATTR = 'theme';

/** @enum {string} */
const Theme = {
  ALT: 'dark',
  DEFAULT: 'light',
}

/** @class */
class Themifier extends HTMLElement {
  constructor() {
    super();

    // Set theme to stored value if it exists; default otherwise.
    this.setAttribute(THEME_ATTR,
      localStorage.getItem(THEME_ATTR) || Theme.DEFAULT);

    // Toggle theme when clicked.
    this.addEventListener('click', () => {
      const newTheme = (
        this.getAttribute(THEME_ATTR) === Theme.DEFAULT
        ? Theme.ALT
        : Theme.DEFAULT
      );
      this.setAttribute(THEME_ATTR, newTheme);
    });
  }

  static get observedAttributes() {
    return [THEME_ATTR];
  }

  /** @callback */
  attributeChangedCallback(name, oldValue, newValue) {
    document.body.setAttribute(THEME_ATTR, newValue);
    localStorage.setItem(THEME_ATTR, newValue);
  }
}

export { Themifier };
