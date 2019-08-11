const THEME_ATTR: string = 'theme';

enum Theme {
  Alt = 'dark',
  Default = 'light',
}

class Themifier extends HTMLElement {
  constructor() {
    super();

    // Set attributes for accessibility.
    this.setAttribute('aria-label', 'Change theme');
    this.setAttribute('tabindex', '0');

    // Set theme to stored value if it exists; default otherwise.
    this.setAttribute(THEME_ATTR, localStorage.getItem(THEME_ATTR) || Theme.Default);

    // Toggle theme when clicked, or with space bar or enter key.
    this.addEventListener('click', () => this.toggleTheme_());
    this.addEventListener('keydown', (e) => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        this.toggleTheme_();
      }
    });
  }

  static get observedAttributes(): string[] {
    return [THEME_ATTR];
  }

  connectedCallback(): void {
    const html = `\
      <svg class="${this.className}__icon" viewbox="0 0 24 24">\
        <path d="M0.375 12 C0.375 18.42 5.58 23.625 12 23.625 18.42 23.625 23.625 18.42 23.625 12 23.625 5.58 18.42 0.375 12 0.375 5.58 0.375 0.375 5.58 0.375 12 Z M12 20.625 L12 3.375 C16.767 3.375 20.625 7.233 20.625 12 20.625 16.767 16.767 20.625 12 20.625 Z"/>\
      </svg>\
    `;
    this.innerHTML = html.replace(/\s\s/g, '');
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    document.body.setAttribute(THEME_ATTR, newValue);
    localStorage.setItem(THEME_ATTR, newValue);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', null);
    this.removeEventListener('keydown', null);
  }

  /**
   * Toggles the theme.
   */
  private toggleTheme_(): void {
    const newTheme = (
      this.getAttribute(THEME_ATTR) === Theme.Default
      ? Theme.Alt
      : Theme.Default
    );
    this.setAttribute(THEME_ATTR, newTheme);
  }
}

export { Themifier };
