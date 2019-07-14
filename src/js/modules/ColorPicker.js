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

    /** @const {?Element} */
    this.menuEl_ = null;
    
    /** @const {?Array} */
    this.colors_ = null;
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
        <li class="${CssClass.MENU}__item">
          <label for="${color}">
            <input type="radio" id="${color}" value="${color}">${color}
          </label>
        </li>
      `;
    });

    this.innerHTML = `
      <div class="${CssClass.MENU}">
        <input type="checkbox" class="${CssClass.MENU}__toggle">
        <ul class="${CssClass.MENU}__list">
          ${listItems}
        </ul>
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
      if (e.target.value) {
        this.setAttribute(Attribute.COLOR, e.target.value);
      }
    });
  }
}

export { ColorPicker };
