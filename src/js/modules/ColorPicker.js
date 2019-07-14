/** @enum {string} */
const Attribute = {
  CHECKED: 'checked',
  COLOR: 'color',
  INACTIVE: 'inactive',
  SRC: 'src',
};

/** @enum {string} */
const CssClass = {
  MENU: 'menu',
};

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
    return [Attribute.COLOR];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === Attribute.COLOR) {
      this.updateColor_();
    }
  }
  
  connectedCallback() {
    this.setupDom_();
    this.handleEvents_();
  }

  /**
   * Sets a color and saves it to localStorage.
   * @private
   */
  updateColor_() {
    const colorName = this.getAttribute(Attribute.COLOR);
    document.body.setAttribute(Attribute.COLOR, colorName);
    localStorage.setItem(Attribute.COLOR, colorName);
  }  
  
  /**
   * @description ...
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
        <input type="checkbox" class="settings__toggle" checked>
        <div class="${CssClass.MENU}">
          <ul class="${CssClass.MENU}__list">
            ${listItems}
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * TODO...
   * @private
   */
  handleEvents_() {
    this.addEventListener('click', (e) => {
      console.log('clicked', e.target);
      e.preventDefault();

      const value = e.target.getAttribute('for');
      if (value) {
        this.setAttribute(Attribute.COLOR, value);
      }
    });
  }
}

export { ColorPicker };
