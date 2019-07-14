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

/** @const {Array<Object>} */
const Colors = [
  {
    name: "white",
    face: "white",
    hands: "black",
  },
  {
    name: "black",
    face: "black",
    hands: "white",
  },
  {
    name: "red",
    face: "#c00",
    hands: "white",
  },
  {
    name: "yellow",
    face: "mustard",
    hands: "black",
  }
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
    this.colors_ = Colors;
    let listItems = '';

    this.colors_.forEach((color) => {
      const name = color.name;
      listItems += `
        <li class="${CssClass.MENU}__item">
          <label for="${name}">
            <input type="radio" id="${name}" value="${name}">${name}
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
