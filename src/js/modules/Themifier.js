/** @enum {string} */
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

    /** @private {?string} */
    this.initialTheme_ = null;
  }

  static get observedAttributes() {
    return [THEME_ATTR];
  }
  
  /** @callback */
  attributeChangedCallback(name) {
    if (name === THEME_ATTR) {
      this.updateTheme_();
    }
  }

  /** @callback */
  connectedCallback() {
    this.setInitialTheme_();
    this.handleEvents_();
  }

  /**
   * Sets initial color when custom element is first connected.
   * @private
   */
  setInitialTheme_() {
    this.initialTheme_ = localStorage.getItem('theme') || Theme.DEFAULT;
    this.setAttribute(THEME_ATTR, this.initialTheme_);
  }

  /**
   * Sets 'theme' attribute and stores its value for later visits.
   * @private
   */
  updateTheme_() {
    const theme = this.getAttribute(THEME_ATTR);
    document.body.setAttribute(THEME_ATTR, theme);
    localStorage.setItem('theme', theme);
  }

  /**
   * Adds a DOM element that toggles the theme when clicked.
   * @private
   */
  handleEvents_() {
    this.addEventListener('click', (e) => {
      const theme = this.getAttribute(THEME_ATTR);
      const newTheme = (theme === Theme.DEFAULT) ? Theme.ALT : Theme.DEFAULT;
      this.setAttribute(THEME_ATTR, newTheme);
    });
  }
}

export { Themifier };
