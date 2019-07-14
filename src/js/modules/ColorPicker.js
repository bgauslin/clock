/** @enum {string} */
const COLOR_ATTR = 'color';

/** @const {Array} */
const Colors = [
  'white',
  'black',
  'red',
  'yellow',
];

/** @class */
class ColorPicker extends HTMLElement {
  constructor() {
    super();
  }
  
  static get observedAttributes() {
    return [COLOR_ATTR];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === COLOR_ATTR) {
      this.updateColor_();
    }
  }
  
  connectedCallback() {
    this.initialColor_();
    this.setupDom_();
    this.handleEvents_();
  }

  /**
   * Sets a color and saves it to localStorage.
   * @private
   */
  updateColor_() {
    const colorName = this.getAttribute(COLOR_ATTR);
    document.body.setAttribute(COLOR_ATTR, colorName);
    localStorage.setItem(COLOR_ATTR, colorName);
  }  
  
  /**
   * Sets initial color when custom element is first connected.
   * @private
   */
  initialColor_() {
    const initialColor = localStorage.getItem(COLOR_ATTR) || 'white';
    this.setAttribute(COLOR_ATTR, initialColor);
  }

  /**
   * Creates all DOM elements and attached them to the DOM.
   * @private
   */
  setupDom_() {
    let listItems = '';
    Colors.forEach((color) => {
      listItems += `
        <li class="item">
          <label for="${color}" class="item__label">
            <input class="option" type="radio" name="color" value="${color}">
            <span class="option__label" option="${color}">${color}</span>
          </label>
        </li>
      `;
    });

    this.innerHTML = `
      <div class="settings">
        <input type="checkbox" class="settings__toggle">
        <div class="menu">
          <ul class="menu__list">
            ${listItems}
          </ul>
        </div>
      </div>
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
  }
}

export { ColorPicker };
