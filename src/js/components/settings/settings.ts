import {LitElement, PropertyValues, css, html} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';
import {AppEvent, Settings} from '../../shared';

import shadowStyles from './settings.scss';

const THEMES: string[] = [
  'Default', 'Red', 'Orange',
  'Yellow', 'Teal',  'Blue',
  'Indigo', 'Purple', 'Brown',
];

const DEFAULT_THEME = THEMES[0].toLowerCase();

const STORAGE_ITEM = 'clock';

/**
 * Web component that renders theme swatches for a user to choose from.
 */
@customElement('clock-settings')
class SettingsWidget extends LitElement {
  private clickListener: EventListenerObject;
  private keyListener: EventListenerObject;

  @query('dialog') dialog: HTMLDialogElement;
  @query('form') form: HTMLFormElement;
  @state() open: boolean = false;
  @state() seconds: boolean = true;
  @state() theme = DEFAULT_THEME;
  @state() theming: boolean = true;
  
  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.clickListener = this.handleClick.bind(this);
    this.keyListener = this.handleKey.bind(this);
  }
  
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.clickListener);
    document.addEventListener('keydown', this.keyListener);
    this.setup();
  }

  disconnectedCallback() { 
    super.disconnectedCallback();
    document.removeEventListener('click', this.clickListener);
    document.removeEventListener('keydown', this.keyListener);
  }

  private setup() {
    const settings = JSON.parse(localStorage.getItem(STORAGE_ITEM));
    if (settings) {
      const {seconds, theme, theming} = settings;
      this.seconds = seconds;
      this.theme = theme;
      this.theming = theming;
    }
  }

  private handleClick(e: Event) {
    if (!e.composedPath().includes(this.form)) {
      this.toggleOpen();  
    }
  }

  private handleKey(e: KeyboardEvent) {
    if (e.code === 'Space' && !this.open) {
      this.toggleOpen();
    }

    if (e.code === 'Escape') {
      e.preventDefault();
      this.toggleOpen();
    }
  }

  private toggleOpen() {
    if (this.dialog.open) {
      this.open = false;
      this.dialog.addEventListener('transitionend', () => {
        this.dialog.close();
      }, {once: true});
    } else {
      this.dialog.showModal();
      this.open = true;
    }
  }

  protected updated(changed: PropertyValues<this>) {
    for (const key of changed.keys()) {
      if (['seconds', 'theme', 'theming'].includes(key.toString())) {
        const settings: Settings = {
          seconds: this.seconds,
          theme: this.theme,
          theming: this.theming,
        }
    
        this.dispatchEvent(new CustomEvent(AppEvent.SETTINGS, {
          bubbles: true,
          composed: true,
          detail: {settings},
        }));
    
        localStorage.setItem(STORAGE_ITEM, JSON.stringify(settings));
      }
    }
  }

  protected render() {
    return html`
      <dialog
        ?open="${this.open}"
        ?inert="${!this.open}">
        <form>
          ${this.renderTheming()}  
          ${this.renderSeconds()}
          ${this.renderSwatches()}
        </form>
      </dialog>
    `;
  }

  private renderSeconds() {
    return html`
      <label id="seconds">
        <span>Seconds</span>
        <input
          name="seconds"
          type="checkbox"
          ?checked=${this.seconds}
          @change=${() => this.seconds = !this.seconds}>
      </label>
    `;
  }

  private renderTheming() {
    return html`
      <label id="theme">
        <span>Theme</span>
        <input
          name="theming"
          type="checkbox"
          ?checked=${this.theming}
          @change=${() => this.theming = !this.theming}>
      </label>
    `;
  }

  private renderSwatches() {
    return html`
      <ul ?aria-disabled="${!this.theming}">
      ${THEMES.map((theme) => {
        const value = theme.toLowerCase();
        return html`
          <li>
            <input
              aria-label="${theme}"
              name="theme"
              tabindex="${this.theming ? '0' : '-1'}"
              type="radio"
              value="${value}"
              ?checked=${value === this.theme}
              @change=${() => this.theme = value}>
          </li>`
      })}
      </ul>
    `;
  }
}
