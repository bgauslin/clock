import {LitElement, PropertyValues, css, html} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';
import {Events, Settings} from '../../shared';
import shadowStyles from './settings.scss';


/**
 * Web component that renders theme swatches for a user to choose from.
 */
@customElement('clock-settings')
class SettingsWidget extends LitElement {
  private clickHandler: EventListenerObject;
  private keyHandler: EventListenerObject;
  private storageItem: string = 'clock';
  private themes: string[] = [
    'Default', 'Red', 'Orange',
    'Yellow', 'Teal',  'Blue',
    'Indigo', 'Purple', 'Brown',
  ];

  @query('dialog') dialog: HTMLDialogElement;
  @query('form') form: HTMLFormElement;
  @state() open: boolean = false;
  @state() seconds: boolean;
  @state() theme: string;
  @state() theming: boolean;
  
  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.clickHandler = this.handleClick.bind(this);
    this.keyHandler = this.handleKey.bind(this);
  }
  
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.clickHandler);
    document.addEventListener('keydown', this.keyHandler);
    this.setup();
  }

  disconnectedCallback() { 
    super.disconnectedCallback();
    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('keydown', this.keyHandler);
  }

  /**
   * Gets settings from localStorage; sets default values otherwise, which
   * triggers a Lit update that lets the app know this element is ready.
   */
  private setup() {
    const settings = JSON.parse(localStorage.getItem(this.storageItem));

    if (settings) {
      const {seconds, theme, theming} = settings;
      this.seconds = seconds;
      this.theme = theme;
      this.theming = theming;
    } else {
      this.seconds = true;
      this.theme = 'brown'; // Arbitrary default.
      this.theming = true;
    }
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
    
        this.dispatchEvent(new CustomEvent(Events.Settings, {
          bubbles: true,
          composed: true,
          detail: {settings},
        }));
    
        localStorage.setItem(this.storageItem, JSON.stringify(settings));
      }
    }
  }

  protected render() {
    return html`
      <dialog
        ?inert="${!this.open}"  
        ?open="${this.open}">
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
          ?checked="${this.theming}"  
          name="theming"
          type="checkbox"
          @change="${() => this.theming = !this.theming}">
      </label>
    `;
  }

  private renderSwatches() {
    return html`
      <ul ?aria-disabled="${!this.theming}">
      ${this.themes.map((theme) => {
        const value = theme.toLowerCase();
        return html`
          <li>
            <input
              aria-label="${theme}"
              class="theme"
              name="theme"
              tabindex="${this.theming ? '0' : '-1'}"
              type="radio"
              value="${value}"
              ?checked="${value === this.theme}"
              @change="${() => this.theme = value}">
          </li>`
      })}
      </ul>
    `;
  }
}
