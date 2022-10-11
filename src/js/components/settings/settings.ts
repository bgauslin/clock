import {LitElement, css, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {when} from 'lit/directives/when.js';
import {Settings} from '../../shared';

import shadowStyles from './settings.scss';

/**
 * Web component that renders theme swatches for a user to choose from.
 */
@customElement('clock-settings')
class SettingsWidget extends LitElement {
  @property() colors = [
    'Default', 'Red', 'Orange',
    'Yellow', 'Teal',  'Blue',
    'Indigo', 'Purple', 'Brown',
  ];
  @property() settingsEvent = 'updateSettings';
  @query('button') button: HTMLButtonElement;
  @query('dialog') dialog: HTMLFormElement;
  @query('form') form: HTMLFormElement;
  @state() clickListener: EventListenerObject;
  @state() settings: Settings;
  @state() settingsListener: EventListenerObject;

  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.clickListener = this.handleClick.bind(this);
    this.settingsListener = this.updateSettings.bind(this);
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(this.settingsEvent, this.updateSettings);
    document.addEventListener('click', this.clickListener);
  }

  disconnectedCallback() { 
    super.disconnectedCallback();
    this.removeEventListener(this.settingsEvent, this.updateSettings);
    document.removeEventListener('click', this.clickListener);
  }

  private handleClick(e: Event) {
    const path = e.composedPath();
    if (path.includes(this.form)) {
      return;
    }

    if (this.dialog.open) {
      this.dialog.close();
    } else if (path.includes(this.button) || this.settings.zen) {
      this.dialog.showModal();
    }
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
      zen: Boolean(formData.get('zen')),
    };

    this.dispatchEvent(new CustomEvent(this.settingsEvent, {
      bubbles: true,
      composed: true,
      detail: {
        settings: this.settings,
      },
    }));
  }

  render() {
    return html`
      ${when(this.settings, () => {
        const {zen} = this.settings;
        return html`
          ${when(!zen, () => {
            return html`${this.renderButton()}`
          })}
          ${this.renderDialog()}
        `;
      })}
    `;
  }

  private renderButton() {
    const label = 'Update clock settings';
    return html`
      <button
        aria-label="${label}"
        id="button"
        title="${label}"
        type="button">
        ${this.renderIcon()}
      </button>
    `;
  }

  private renderDialog() {
    return html`
      <dialog aria-labelledby="button">
        <form @change="${this.getSettings}">
          ${this.renderSwatches()}
          ${this.renderToggles()}
        </form>
      </dialog>
    `;
  }

  private renderToggles() {
    const {seconds, theming, zen} = this.settings;
    return html`
      <label>
        <span>Theme</span>
        <input
          ?checked="${theming}"
          name="theming"
          type="checkbox">
      </label>
      <label>
        <span>Seconds</span>
        <input
          ?checked="${seconds}"
          name="seconds"
          type="checkbox">
      </label>
      <label>
        <span>Zen Mode</span>
        <input
          ?checked="${zen}"
          name="zen"
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
