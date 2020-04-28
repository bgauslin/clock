const COLOR_ATTR: string  = 'color';
const OPEN_ATTR: string = 'open';

const Colors: string[] = [
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

/**
 * Custom element that renders color swatches for a user to select that then
 * sets an attribute coordinated with CSS rules to change the color styles of
 * the clock's face and hands.
 */
class ColorPicker extends HTMLElement {
  private closeMenuListener_: any;
  private toggleButton_: HTMLButtonElement;

  constructor() {
    super();
    this.closeMenuListener_ = this.closeMenu_.bind(this);
    this.addEventListener('click', this.handleClick_);
    this.addEventListener('keyup', this.handleKey_);
  }
  
  static get observedAttributes(): string[] {
    return [COLOR_ATTR];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    this.updateColor_(oldValue, newValue);
  }

  connectedCallback(): void {
    this.setup_();
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.handleClick_);
    this.removeEventListener('keyup', this.handleKey_);
    document.removeEventListener('click', this.closeMenuListener_);
  }

  /**
   * Toggles the menu open/closed if the button was clicked, and changes the
   * color if a swatch was clicked. If the menu is open, the next click will
   * close it.
   */
  private handleClick_(e: Event): void {
    const target = e.target as HTMLElement;

    if (target === this.toggleButton_) {
      if (this.hasAttribute(OPEN_ATTR)) {
        this.closeMenu_();
      } else {
        this.setAttribute(OPEN_ATTR, '');
        window.requestAnimationFrame(() => {
          document.addEventListener('click', this.closeMenuListener_);
        });
      }
    } else {
      this.setColor_(target);
    }
  }

  /**
   * Adds keyboard navigation to the menu.
   */
  private handleKey_(e: KeyboardEvent) {
    switch (e.code) {
      case 'Enter':
        this.setColor_(e.target as HTMLElement);
        break;
      case 'Escape':
        this.closeMenu_();
        break;
    }
  }

  /**
   * Closes the menu and removes the click-to-close listener that's added when
   * the menu is opened by the toggle button.
   */
  private closeMenu_(): void {
    this.removeAttribute(OPEN_ATTR);
    document.removeEventListener('click', this.closeMenuListener_);
  }

  /**
   * Updates the 'color' attribute and closes the menu.
   */
  private setColor_(target: HTMLElement): void {
    const newColor = target.getAttribute('for');
    if (newColor) {
      this.setAttribute(COLOR_ATTR, newColor);
      this.closeMenu_();
    }
  }

  /**
   * Updates the current color and saves it to localStorage when the 'color'
   * attribute changes.
   */
  private updateColor_(oldValue: string, newValue: string): void {
    const oldEl = this.querySelector(`[value=${oldValue}]`) as HTMLInputElement;
    const newEl = this.querySelector(`[value=${newValue}]`) as HTMLInputElement;

    if (oldEl) {
      oldEl.checked = false;
    }

    if (newEl) {
      newEl.checked = true;
    }

    document.body.setAttribute(COLOR_ATTR, newValue);
    localStorage.setItem(COLOR_ATTR, newValue);
  }  

  /**
   * Creates elements and attaches them to the DOM.
   */
  private setup_(): void {
    this.setAttribute(COLOR_ATTR, localStorage.getItem(COLOR_ATTR) || Colors[0]);

    let listItems = '';
    Colors.forEach((color) => {
      const checked = (color === this.getAttribute(COLOR_ATTR)) ? 'checked' : '';
      listItems += `\
        <li class="${this.className}__item">\
          <label class="${this.className}__label" for="${color}" tabindex="0">\
            <input class="${this.className}__option" type="radio" name="color" value="${color}" ${checked}>\
            <span class="${this.className}__swatch" option="${color}">${color}</span>
          </label>\
        </li>\
      `;
    });

    const html = `\
      <button class="${this.className}__toggle" aria-label="Color options">\
        <svg class="${this.className}__icon" viewbox="0 0 24 24">\
          <path d="M9.577 0.234 C4.917 1.144 1.162 4.889 0.244 9.534 -1.491 18.3 6.417 24.834 12.375 23.911 14.306 23.611 15.253 21.352 14.367 19.613 13.284 17.484 14.831 15 17.222 15 L20.958 15 C22.636 15 23.995 13.613 24 11.939 23.976 4.552 17.255 -1.261 9.577 0.234 Z M4.5 15 C3.67 15 3 14.33 3 13.5 3 12.67 3.67 12 4.5 12 5.33 12 6 12.67 6 13.5 6 14.33 5.33 15 4.5 15 Z M6 9 C5.17 9 4.5 8.33 4.5 7.5 4.5 6.67 5.17 6 6 6 6.83 6 7.5 6.67 7.5 7.5 7.5 8.33 6.83 9 6 9 Z M12 6 C11.17 6 10.5 5.33 10.5 4.5 10.5 3.67 11.17 3 12 3 12.83 3 13.5 3.67 13.5 4.5 13.5 5.33 12.83 6 12 6 Z M18 9 C17.17 9 16.5 8.33 16.5 7.5 16.5 6.67 17.17 6 18 6 18.83 6 19.5 6.67 19.5 7.5 19.5 8.33 18.83 9 18 9 Z"/>\
        </svg>\
      </button>\
      <ul class="${this.className}__menu">\
        ${listItems}\
      </ul>\
    `;
    this.innerHTML = html.replace(/\s\s/g, '');

    this.toggleButton_ = this.querySelector(`.${this.className}__toggle`);
  }
}

export {ColorPicker};
