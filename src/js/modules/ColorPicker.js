/** @const {string} */
const CLASSNAME = 'color-picker';

/** @enum {string} */
const COLOR_ATTR = 'color';

/** @enum {string} */
const OPEN_ATTR = 'open';

/** @const {Array<string>} */
const Colors = [
  'white',
  'darkred',
  'crimson',
  'tomato',
  'orange',
  'gold',
  'khaki',
  'yellowgreen',
  'seagreen',
  'teal',
  'lightskyblue',
  'steelblue',
  'royalblue',
  'midnightblue',
  'indigo',
  'blueviolet',
  'violet',
  'hotpink',
  'silver',
  'black',
];

/** @class */
class ColorPicker extends HTMLElement {
  constructor() {
    super();

    this.classList.add(CLASSNAME);

    this.setAttribute(COLOR_ATTR,
      localStorage.getItem(COLOR_ATTR) || Colors[0]);

    this.addEventListener('click', (e) => {
      // Toggle the menu open/closed.
      if (e.target.classList.contains(`${CLASSNAME}__toggle`)) {
        if (this.hasAttribute(OPEN_ATTR)) {
          this.removeAttribute(OPEN_ATTR);
        } else {
          this.setAttribute(OPEN_ATTR, '');

          // If it's open, close the menu on the next click.
          window.requestAnimationFrame(() => {
            document.addEventListener('click', (e) => {
              this.removeAttribute(OPEN_ATTR);
            }, { once: true });
          });
        }
      }

      // Change the current color.
      const newColor = e.target.getAttribute('for');
      if (newColor) {
        this.setAttribute(COLOR_ATTR, newColor);
      }
    });
  }
  
  static get observedAttributes() {
    return [COLOR_ATTR];
  }

  /** @callback */
  attributeChangedCallback(name, oldValue, newValue) {
    this.updateColor_(oldValue, newValue);
  }
  
  /** @callback */
  connectedCallback() {
    this.setupDom_();
  }

  /**
   * Sets a color and saves it to localStorage.
   * @private
   */
  updateColor_(oldValue, newValue) {
    const oldEl = this.querySelector(`[value=${oldValue}]`);
    const newEl = this.querySelector(`[value=${newValue}]`);

    if (oldEl) oldEl.checked = false;
    if (newEl) newEl.checked = true;

    document.body.setAttribute(COLOR_ATTR, newValue);
    localStorage.setItem(COLOR_ATTR, newValue);
  }  
  
  /**
   * Creates elements and attaches them to the DOM.
   * @private
   */
  setupDom_() {
    let listItems = '';
    Colors.forEach((color) => {
      const checked = (color === this.getAttribute(COLOR_ATTR)) ? 'checked' : '';
      listItems += `
        <li class="${CLASSNAME}__item">
          <label class="${CLASSNAME}__label" for="${color}">
            <input class="${CLASSNAME}__option" type="radio" name="color" value="${color}" ${checked}>
            <span class="${CLASSNAME}__swatch" option="${color}">${color}</span>
          </label>
        </li>
      `;
    });

    this.innerHTML = `      
      <button class="${CLASSNAME}__toggle" aria-label="Color options">
        <svg class="${CLASSNAME}__icon" viewbox="0 0 24 24">
          <path d="M9.577 0.234 C4.917 1.144 1.162 4.889 0.244 9.534 -1.491 18.3 6.417 24.834 12.375 23.911 14.306 23.611 15.253 21.352 14.367 19.613 13.284 17.484 14.831 15 17.222 15 L20.958 15 C22.636 15 23.995 13.613 24 11.939 23.976 4.552 17.255 -1.261 9.577 0.234 Z M4.5 15 C3.67 15 3 14.33 3 13.5 3 12.67 3.67 12 4.5 12 5.33 12 6 12.67 6 13.5 6 14.33 5.33 15 4.5 15 Z M6 9 C5.17 9 4.5 8.33 4.5 7.5 4.5 6.67 5.17 6 6 6 6.83 6 7.5 6.67 7.5 7.5 7.5 8.33 6.83 9 6 9 Z M12 6 C11.17 6 10.5 5.33 10.5 4.5 10.5 3.67 11.17 3 12 3 12.83 3 13.5 3.67 13.5 4.5 13.5 5.33 12.83 6 12 6 Z M18 9 C17.17 9 16.5 8.33 16.5 7.5 16.5 6.67 17.17 6 18 6 18.83 6 19.5 6.67 19.5 7.5 19.5 8.33 18.83 9 18 9 Z"/>
        </svg>
      </button>
      <ul class="${CLASSNAME}__menu">
        ${listItems}
      </ul>
    `;
  }
}

export { ColorPicker };
