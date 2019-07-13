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
    this.fetchColors_();
  }

  /**
   * @description ...
   * @private
   */
  async fetchColors_() {
    const colorsDataSrc = this.getAttribute(Attribute.SRC);    
    if (colorsDataSrc) {
      this.removeAttribute(Attribute.SRC); 
      const response = await fetch(colorsDataSrc);
      this.colors_ = await response.json();
      console.log('fetchColors_() called!');

      this.setupDom_();
    }
  }

  /**
   * Sets a color and saves it to localStorage.
   * @private
   */
  updateColor_() {
    const colorName = this.getAttribute(Attribute.COLOR);
    const cssValues = this.colors_.find(color => color.name === colorName);
    for (const property in cssValues) {
      document.documentElement.style.setProperty(`--${property}`, cssValues[property]);
    }
    localStorage.setItem(Attribute.COLOR, colorName);
  }  
  
  /**
   * @description ...
   * @private
   */
  setupDom_() {
    console.log('setupDom_() called!');
    console.log('this.colors_', this.colors_);

    let listItems = '';
    
    this.colors_.forEach((color) => {
      listItems += this.menuItem_(color.name);
    });

    console.log(this);
    
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
   * Creates theming options and attaches them to an element.
   * @param {!string} name
   * @return HTML for a menu item.
   * @private
   */
  menuItem_(name) {
    return `
      <li class="${CssClass.MENU}__item">
        <input class="${CssClass.MENU}__item__option" type="radio" name="${name}" value="${name}">
        <label class="${CssClass.MENU}__item__label" for="${name}">${name}</label>
      </li>
    `;
  }

  /**
   * Sets current option and adds a listener to each option.
   * @param {!string} option - Color to set on the custom element,
   *     which is also the 'name' of the input.
   * @private
   */
  updateOptions_(option) {
    [...this.menuEl_.querySelectorAll(`[name=${option}]`)].forEach((el) => {
      if (currentAttr == el.value) {
        el.setAttribute(Attribute.CHECKED, '');
      }
      
      // TODO: Set single listener on element and add an event handler.
      el.addEventListener('click', () => {
        this.updateColor_(option, el.value);
      });
    });
  }
}

export { ColorPicker };
