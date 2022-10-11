import {LitElement, css, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import shadowStyles from './settings.scss';

/**
 * Web component that renders theme swatches for a user to choose from.
 */
@customElement('clock-settings')
class Settings extends LitElement {
  @property() colors = [
    'Red', 'Orange', 'Yellow',
    'Teal', 'Default', 'Blue',
    'Indigo', 'Purple', 'Brown',
  ];
  @property() settingsEvent = 'updateSettings';
  @query('dialog') dialog: HTMLFormElement;
  @query('form') form: HTMLFormElement;
  @state() clickListener: EventListenerObject;
  @state() closeListener: EventListenerObject;
  @state() settings = {
    seconds: true,
    theme: '',
    theming: true,
  };
  @state() settingsListener: EventListenerObject;

  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.clickListener = this.handleClick.bind(this);
    this.closeListener = this.removeListeners.bind(this);
    this.settingsListener = this.updateSettings.bind(this);
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(this.settingsEvent, this.updateSettings);
  }

  disconnectedCallback() { 
    super.disconnectedCallback();
    this.removeListeners();
  }

  private updateSettings(e: CustomEvent) {
    this.settings = e.detail.settings;
  }

  private getSettings() {
    const formData = new FormData(this.form);

    this.settings = {
      seconds: Boolean(formData.get('seconds')),
      theme: String(formData.get('theme')),
      theming: Boolean(formData.get('theming')),
    };

    this.dispatchEvent(new CustomEvent(this.settingsEvent, {
      bubbles: true,
      composed: true,
      detail: {
        settings: this.settings,
      },
    }));
  }

  private openDialog() {
    this.dialog.showModal();
    window.requestAnimationFrame(() => {
      this.dialog.addEventListener('close', this.closeListener);
      document.addEventListener('click', this.clickListener);
    });
  }

  private handleClick(e: Event) {
    const path = e.composedPath();
    if (!path.includes(this.form)) {
      this.dialog.close();
      this.removeListeners();
    }
  }

  private removeListeners() {
    this.dialog.removeEventListener('close', this.closeListener);
    document.removeEventListener('click', this.clickListener);
  }

  render() {
    return html`
      ${this.renderButton()}
      ${this.renderDialog()}
    `;
  }

  private renderButton() {
    const label = 'Update clock settings';
    return html`
      <button
        aria-label="${label}"
        id="button"
        title="${label}"
        type="button"
        @click="${this.openDialog}">
        ${this.renderIcon()}
      </button>
    `;
  }

  private renderDialog() {
    return html`
      <dialog aria-labelledby="button">
        <form @change="${this.getSettings}">
          ${this.renderThemingToggle()}
          ${this.renderSwatches()}
          ${this.renderSecondsToggle()}
        </form>
      </dialog>
    `;
  }

  private renderThemingToggle() {
    const {theming} = this.settings;
    return html`
      <label>
        <span>Use theme</span>
        <input
          ?checked="${theming}"
          name="theming"
          type="checkbox">
      </label>
    `;
  }

  private renderSecondsToggle() {
    const {seconds} = this.settings;
    return html`
      <label>
        <span>Show seconds</span>
        <input
          ?checked="${seconds}"
          name="seconds"
          type="checkbox">
      </label>
    `;
  }

  private renderSwatches() {
    const {theme, theming} = this.settings;
    const tabindex = theming ? null : -1;
    return html`
      <ul ?aria-disabled="${!theming}">
      ${this.colors.map((color) => {
        const value = color.toLowerCase();
        return html`
          <li>
            <input
              aria-label="${color}"
              ?checked="${value === theme}"
              name="theme"
              tabindex="${ifDefined(tabindex)}"
              type="radio"
              value="${value}">
          </li>`
      })}
      </ul>
    `;
  }

  private renderIcon() {
    return html`
      <svg aria-hidden="true" viewbox="0 0 24 24">
        <circle cx="4" cy="4" r="2.5"/>
        <circle cx="12" cy="4" r="2.5"/>
        <circle cx="20" cy="4" r="2.5"/>
        <circle cx="4" cy="12" r="2.5"/>
        <circle cx="12" cy="12" r="2.5"/>
        <circle cx="20" cy="12" r="2.5"/>
        <circle cx="4" cy="20" r="2.5"/>
        <circle cx="12" cy="20" r="2.5"/>
        <circle cx="20" cy="20" r="2.5"/>
      </svg>
    `;
  }
}
