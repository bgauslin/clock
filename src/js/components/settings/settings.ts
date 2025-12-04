import {LitElement, css, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {Events} from '../../shared';
import shadowStyles from './settings.scss';


/**
 * Web component that renders theme swatches for a user to choose from.
 */
@customElement('clock-settings') class SettingsWidget extends LitElement {
  private clickHandler: EventListenerObject;
  private keyHandler: EventListenerObject;
  private touchTarget: HTMLElement;
  
  @property() digital: boolean;
  @property() seconds: boolean;
  @property() theme: string;

  @query('dialog') dialog: HTMLDialogElement;
  @query('form') form: HTMLFormElement;

  @state() open: boolean = false;
  @state() themes: string[] = ['Default', 'Red', 'Orange', 'Yellow', 'Teal',
      'Blue', 'Indigo', 'Purple', 'Brown', 'None'];

  constructor() {
    super();
    this.clickHandler = this.handleClick.bind(this);
    this.keyHandler = this.handleKey.bind(this);
  }
  
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(Events.Click, this.clickHandler);
    document.addEventListener(Events.KeyDown, this.keyHandler);
    document.addEventListener(Events.TouchStart, this.handleTouchStart, {passive: true});
    document.addEventListener(Events.TouchEnd, this.handleTouchEnd, {passive: true});
  }

  disconnectedCallback() { 
    super.disconnectedCallback();
    document.removeEventListener(Events.Click, this.clickHandler);
    document.removeEventListener(Events.KeyDown, this.keyHandler);
    document.removeEventListener(Events.TouchStart, this.handleTouchStart);
    document.removeEventListener(Events.TouchEnd, this.handleTouchEnd);
  }

  private toggleOpen() {
    if (this.dialog.open) {
      this.open = false;
      this.dialog.addEventListener(Events.TransitionEnd, () => {
        this.dialog.close();
      }, {once: true});
    } else {
      this.dialog.showModal();
      this.open = true;
    }
  }

  private updateSettings() {
    this.dispatchEvent(new CustomEvent(Events.Settings, {
      detail: {
        digital: this.digital,
        seconds: this.seconds,
        theme: this.theme,
      }
    }));
  }

  private handleClick(event: Event) {
    if (!event.composedPath().includes(this.form)) {
      this.toggleOpen();  
    }
  }

  private handleKey(event: KeyboardEvent) {
    if (event.code === 'Space' && !this.open) {
      this.toggleOpen();
    }

    if (event.code === 'Escape') {
      event.preventDefault();
      this.toggleOpen();
    }
  }

  private handleTouchStart(event: TouchEvent) {
    this.touchTarget = <HTMLElement>event.composedPath()[0];

    if (['theme'].includes(this.touchTarget.className)) {
      this.touchTarget.classList.add('touch');
    }
  }

  private handleTouchEnd() {
    this.touchTarget.classList.remove('touch');
  }

  protected render() {
    return html`
      <dialog
        ?inert="${!this.open}"  
        ?open="${this.open}">
        <form @change=${this.updateSettings}>
          <label id="seconds">
            <span>Seconds</span>
            <input
              name="seconds"
              type="checkbox"
              ?checked=${this.seconds}
              @click=${() => this.seconds = !this.seconds}>
          </label>

          <label id="digital">
            <span>Digital</span>
            <input
              name="digital"
              type="checkbox"
              ?checked=${this.digital}
              @click=${() => this.digital = !this.digital}>
          </label>

          <ul>
          ${this.themes.map((theme) => {
            const value = theme.toLowerCase();
            return html`
              <li>
                <input
                  aria-label="${theme}"
                  class="theme"
                  name="theme"
                  type="radio"
                  value="${value}"
                  ?checked=${value === this.theme}
                  @click=${() => this.theme = value}>
              </li>`
          })}
          </ul>
        </form>
      </dialog>
    `;
  }

  static styles = css`${shadowStyles}`;
}
