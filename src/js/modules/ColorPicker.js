/** @enum {string} */
const COLOR_ATTR = 'color';

/** @enum {string} */
const OPEN_ATTR = 'open';

/** @const {Array<string>} */
const Colors = [
  'white',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'black',
];

/** @enum {string} */
const CssClass = {
  MASK: 'click-mask',
  TOGGLE: 'toggle',
};

/** @class */
class ColorPicker extends HTMLElement {
  constructor() {
    super();

    /** @const {string} */
    this.initialColor_ = null;
  }
  
  static get observedAttributes() {
    return [COLOR_ATTR];
  }
  
  /** @callback */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === COLOR_ATTR) {
      this.updateColor_(oldValue, newValue);
    }
  }
  
  /** @callback */
  connectedCallback() {
    this.setInitialColor_();
    this.setupDom_();
    this.handleEvents_();
  }

  /**
   * Sets a color and saves it to localStorage.
   * @private
   */
  updateColor_(oldValue, newValue) {
    const colorName = this.getAttribute(COLOR_ATTR);
    const oldEl = this.querySelector(`[value=${oldValue}]`);
    const newEl = this.querySelector(`[value=${newValue}]`);

    if (oldEl) oldEl.checked = false;
    if (newEl) newEl.checked = true;

    document.body.setAttribute(COLOR_ATTR, colorName);
    localStorage.setItem(COLOR_ATTR, colorName);
  }  
  
  /**
   * Sets initial color when element is first connected.
   * @private
   */
  setInitialColor_() {
    this.initialColor_ = localStorage.getItem(COLOR_ATTR) || Colors[0];
    this.setAttribute(COLOR_ATTR, this.initialColor_);
  }

  /**
   * Creates elements and attaches them to the DOM.
   * @private
   */
  setupDom_() {
    let listItems = '';
    Colors.forEach((color) => {
      const checked = (color === this.initialColor_) ? 'checked' : '';
      listItems += `
        <li class="item">
          <label for="${color}" class="item__label">
            <input class="option" type="radio" name="color" value="${color}" ${checked}>
            <span class="option__label" option="${color}">${color}</span>
          </label>
        </li>
      `;
    });

    this.innerHTML = `      
      <input class="${CssClass.TOGGLE}" type="checkbox" aria-label="Color options">
      <ul class="menu">
        ${listItems}
      </ul>
      <div class="${CssClass.MASK}"></div>
    `;
  }

  /**
   * Updates the color when a new color option is clicked.
   * @private
   */
  handleEvents_() {
    this.addEventListener('click', (e) => {
      // Toggle the menu open/closed.
      if (e.target.classList.contains('toggle')) {
        if (this.hasAttribute(OPEN_ATTR)) {
          this.removeAttribute(OPEN_ATTR);
        } else {
          this.setAttribute(OPEN_ATTR, '');
        }
      }

      // Change the current color.
      const value = e.target.getAttribute('for');
      if (value) {
        this.setAttribute(COLOR_ATTR, value);
      }
    });

    // Close the menu when clicking outside of the menu.
    document.querySelector(`.${CssClass.MASK}`).addEventListener('click', (e) => {
      this.removeAttribute(OPEN_ATTR);
    });
  }
}

export { ColorPicker };
