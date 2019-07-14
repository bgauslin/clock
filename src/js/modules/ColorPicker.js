/** @enum {string} */
const COLOR_ATTR = 'color';

/** @const {Array} */
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
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === COLOR_ATTR) {
      this.updateColor_(oldValue, newValue);
    }
  }
  
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
   * Sets initial color when custom element is first connected.
   * @private
   */
  setInitialColor_() {
    this.initialColor_ = localStorage.getItem(COLOR_ATTR) || Colors[0];
    this.setAttribute(COLOR_ATTR, this.initialColor_);
  }

  /**
   * Creates all DOM elements and attached them to the DOM.
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
      <div class="menu">
        <ul class="menu__list">
          ${listItems}
        </ul>
      </div>
      <div class="${CssClass.MASK}"></div>
    `;
  }

  /**
   * Updates the color when a new color option is clicked.
   * @private
   */
  handleEvents_() {
    this.addEventListener('click', (e) => {
      const value = e.target.getAttribute('for');
      if (value) {
        this.setAttribute(COLOR_ATTR, value);
      }
    });

    const clickMask = document.querySelector(`.${CssClass.MASK}`);
    const toggle = this.querySelector(`.${CssClass.TOGGLE}`);
    clickMask.addEventListener('click', (e) => {
      toggle.checked = false;
    });
  }
}

export { ColorPicker };
