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

    /** @const {string} */
    this.initialTheme_ = null;
  }

  static get observedAttributes() {
    return [THEME_ATTR];
  }
  
  attributeChangedCallback(name) {
    if (name === THEME_ATTR) {
      this.updateTheme_();
    }
  }

  connectedCallback() {
    console.log('Themifier');

    this.setInitialTheme_();
    this.setupDom_();
    this.handleEvents_();
  }

  /**
   * Sets initial color when custom element is first connected.
   * @private
   */
  setInitialTheme_() {
    this.initialTheme_ = localStorage.getItem('theme') || Theme.DEFAULT;
    this.setAttribute(THEME_ATTR, this.initialTheme_);
    console.log('this.initialTheme_', this.initialTheme_);
  }

  /**
   * Adds a label to the custom element.
   * @private
   */
  setupDom_() {
    this.textContent = 'Theme';
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