const ARIA_EXPANDED_ATTR: string = 'aria-expanded';
const ARIA_HIDDEN_ATTR: string = 'aria-hidden';
const COLOR_ATTR: string  = 'color';
const ICON_PATH: string = 'M9.577 0.234 C4.917 1.144 1.162 4.889 0.244 9.534 -1.491 18.3 6.417 24.834 12.375 23.911 14.306 23.611 15.253 21.352 14.367 19.613 13.284 17.484 14.831 15 17.222 15 L20.958 15 C22.636 15 23.995 13.613 24 11.939 23.976 4.552 17.255 -1.261 9.577 0.234 Z M4.5 15 C3.67 15 3 14.33 3 13.5 3 12.67 3.67 12 4.5 12 5.33 12 6 12.67 6 13.5 6 14.33 5.33 15 4.5 15 Z M6 9 C5.17 9 4.5 8.33 4.5 7.5 4.5 6.67 5.17 6 6 6 6.83 6 7.5 6.67 7.5 7.5 7.5 8.33 6.83 9 6 9 Z M12 6 C11.17 6 10.5 5.33 10.5 4.5 10.5 3.67 11.17 3 12 3 12.83 3 13.5 3.67 13.5 4.5 13.5 5.33 12.83 6 12 6 Z M18 9 C17.17 9 16.5 8.33 16.5 7.5 16.5 6.67 17.17 6 18 6 18.83 6 19.5 6.67 19.5 7.5 19.5 8.33 18.83 9 18 9 Z';
const OPEN_ATTR: string = 'open';

const ColorPalette: string[][] = [
  ['white', 'black'],
  ['darkred', 'white'],
  ['crimson', 'white'],
  ['tomato', 'black'],
  ['orange', 'black'],
  ['gold', 'black'],
  ['khaki', 'black'],
  ['yellowgreen', 'black'],
  ['seagreen', 'white'],
  ['teal', 'white'],
  ['lightskyblue', 'black'],
  ['steelblue', 'white'],
  ['royalblue', 'white'],
  ['midnightblue', 'white'],
  ['indigo', 'white'],
  ['blueviolet', 'white'],
  ['violet', 'black'],
  ['hotpink', 'black'],
  ['silver', 'black'],
  ['black', 'white'],
];

/**
 * Custom element that renders color swatches for a user to select that then
 * sets an attribute coordinated with CSS rules to change the color styles of
 * the clock's face and hands.
 */
export class ColorPicker extends HTMLElement {
  private closeMenuListener: any;
  private menu: HTMLElement;
  private toggleButton: HTMLButtonElement;

  constructor() {
    super();
    this.closeMenuListener = this.closeMenu.bind(this);
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keyup', this.handleKey);
  }
  
  static get observedAttributes(): string[] {
    return [COLOR_ATTR];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    this.updateColor(oldValue, newValue);
  }

  connectedCallback(): void {
    this.setup();
    this.createStyles();
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keyup', this.handleKey);
    document.removeEventListener('click', this.closeMenuListener);
  }

  /**
   * Toggles the menu open/closed if the button was clicked, and changes the
   * color if a swatch was clicked. If the menu is open, the next click will
   * close it.
   */
  private handleClick(e: Event): void {
    const target = e.target as HTMLElement;

    if (target === this.toggleButton) {
      if (this.hasAttribute(OPEN_ATTR)) {
        this.closeMenu();
      } else {
        this.setAttribute(OPEN_ATTR, '');
        this.toggleButton.setAttribute(ARIA_EXPANDED_ATTR, 'true');
        this.menu.setAttribute(ARIA_HIDDEN_ATTR, 'false');
        window.requestAnimationFrame(() => {
          document.addEventListener('click', this.closeMenuListener);
        });
      }
    } else {
      this.setColor(target);
    }
  }

  /**
   * Adds keyboard navigation to the menu.
   */
  private handleKey(e: KeyboardEvent) {
    switch (e.code) {
      case 'Enter':
        this.setColor(e.target as HTMLElement);
        break;
      case 'Escape':
        this.closeMenu();
        break;
    }
  }

  /**
   * Closes the menu and removes the click-to-close listener that's added when
   * the menu is opened by the toggle button.
   */
  private closeMenu(): void {
    this.removeAttribute(OPEN_ATTR);
    document.removeEventListener('click', this.closeMenuListener);
    this.toggleButton.setAttribute(ARIA_EXPANDED_ATTR, 'false');
    this.menu.setAttribute(ARIA_HIDDEN_ATTR, 'true');
  }

  /**
   * Updates the 'color' attribute and closes the menu.
   */
  private setColor(target: HTMLElement): void {
    const newColor = target.getAttribute('for');
    if (newColor) {
      this.setAttribute(COLOR_ATTR, newColor);
      this.closeMenu();
    }
  }

  /**
   * Updates the current color and saves it to localStorage when the 'color'
   * attribute changes.
   */
  private updateColor(oldValue: string, newValue: string): void {
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
  private setup(): void {
    this.setAttribute(
        COLOR_ATTR, localStorage.getItem(COLOR_ATTR) || ColorPalette[0][0]);

    let listItems = '';
    ColorPalette.forEach((color) => {
      const [colorName] = color;
      const checked =
          (colorName === this.getAttribute(COLOR_ATTR)) ? 'checked' : '';
      listItems += `\
        <li class="${this.className}__item">\
          <label \
            class="${this.className}__label" \
            for="${colorName}" tabindex="0">\
            <input \
              class="${this.className}__option" \
              type="radio" name="color" \
              value="${colorName}" \
              ${checked}>\
            <span \
              class="${this.className}__swatch" \
              option="${colorName}" \
              color="${colorName}">${colorName}</span>\
            <div \
              class="${this.className}__marker" \
              color="${colorName}"></span>\
          </div>\
        </li>\
      `;
    });

    const label = 'Color options';
    const html = `\
      <button \
        class="${this.className}__toggle" \
        id="menu-toggle" \
        title="${label}" \
        aria-haspopup="true" \
        aria-label="${label}" \
        aria-controls="color-menu" \
        ${ARIA_EXPANDED_ATTR}="false">\
        <svg \
          class="${this.className}__icon" \
          viewbox="0 0 24 24" \
          aria-hidden="true">\
          <path d="${ICON_PATH}"/>\
        </svg>\
      </button>\
      <ul \
        class="${this.className}__menu" \
        id="color-menu" \
        role="menu" \
        aria-labelledby="menu-toggle" \
        ${ARIA_HIDDEN_ATTR}="true">\
        ${listItems}\
      </ul>\
    `;
    this.innerHTML = html.replace(/\s\s/g, '');

    this.toggleButton = this.querySelector(`.${this.className}__toggle`);
    this.menu = this.querySelector(`.${this.className}__menu`);
  }

  /**
   * Injects an inline <style> element with custom properties scoped to an
   * attribute selector for each color option.
   */
  private createStyles(): void {
    const style = document.createElement('style');
    ColorPalette.forEach((color) => {
      const [colorName, constrastColor] = color;
      const theme = `\
        [color=${colorName}] {\
          --face: ${colorName};\
          --hands: ${constrastColor};\
        }\
      `;
      style.innerHTML += theme.replace(/\s\s/g, '');
    });
    document.body.appendChild(style);
  }
}
