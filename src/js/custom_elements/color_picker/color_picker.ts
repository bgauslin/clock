const ARIA_EXPANDED_ATTR: string = 'aria-expanded';
const ARIA_HIDDEN_ATTR: string = 'aria-hidden';
const COLOR_ATTR: string  = 'color';
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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.updateColor(oldValue, newValue);
  }

  connectedCallback() {
    this.setup();
    this.createStyles();
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keyup', this.handleKey);
    document.removeEventListener('click', this.closeMenuListener);
  }

  /**
   * Toggles the menu open/closed if the button was clicked, and changes the
   * color if a swatch was clicked. If the menu is open, the next click will
   * close it.
   */
  private handleClick(event: Event) {
    const target = event.target as HTMLElement;

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
  private handleKey(event: KeyboardEvent) {
    switch (event.code) {
      case 'Enter':
        this.setColor(event.target as HTMLElement);
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
  private closeMenu() {
    this.removeAttribute(OPEN_ATTR);
    document.removeEventListener('click', this.closeMenuListener);
    this.toggleButton.setAttribute(ARIA_EXPANDED_ATTR, 'false');
    this.menu.setAttribute(ARIA_HIDDEN_ATTR, 'true');
  }

  /**
   * Updates the 'color' attribute and closes the menu.
   */
  private setColor(target: HTMLElement) {
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
  private updateColor(oldValue: string, newValue: string) {
    const oldElement = this.querySelector(`[value=${oldValue}]`) as HTMLInputElement;
    const newElement = this.querySelector(`[value=${newValue}]`) as HTMLInputElement;

    if (oldElement) {
      oldElement.checked = false;
    }

    if (newElement) {
      newElement.checked = true;
    }

    document.body.setAttribute(COLOR_ATTR, newValue);
    localStorage.setItem(COLOR_ATTR, newValue);
  }  

  /**
   * Creates elements and attaches them to the DOM.
   */
  private setup() {
    this.setAttribute(COLOR_ATTR, localStorage.getItem(COLOR_ATTR) || ColorPalette[0][0]);
    const colorSelected = this.getAttribute(COLOR_ATTR);

    const template = require('./color_picker.pug');
    this.innerHTML = template({
      colors: ColorPalette,
      colorSelected,
    });

    this.toggleButton = this.querySelector('button');
    this.menu = this.querySelector('ul');
  }

  /**
   * Injects an inline <style> element with custom properties scoped to an
   * attribute selector for each color option.
   */
  private createStyles() {
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

customElements.define('color-picker', ColorPicker);
