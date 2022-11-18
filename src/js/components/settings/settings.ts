import {LitElement, css, html} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {when} from 'lit/directives/when.js';
import {Settings} from '../../shared';

import shadowStyles from './settings.scss';

/**
 * Web component that renders theme swatches for a user to choose from.
 */
@customElement('clock-settings')
class SettingsWidget extends LitElement {
  @query('button') button: HTMLButtonElement;
  @query('dialog') dialog: HTMLDialogElement;
  @query('form') form: HTMLFormElement;

  @state() clickListener: EventListenerObject;
  @state() colors = [
    'Default', 'Red', 'Orange',
    'Yellow', 'Teal',  'Blue',
    'Indigo', 'Purple', 'Brown',
  ];
  @state() keyListener: EventListenerObject;
  @state() open: boolean = false;
  @state() settings: Settings;
  @state() settingsEvent = 'updateSettings';
  @state() settingsListener: EventListenerObject;

  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.clickListener = this.handleClick.bind(this);
    this.keyListener = this.handleKey.bind(this);
    this.settingsListener = this.updateSettings.bind(this);
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(this.settingsEvent, this.updateSettings);
    document.addEventListener('click', this.clickListener);
    document.addEventListener('keydown', this.keyListener);
  }

  disconnectedCallback() { 
    super.disconnectedCallback();
    this.removeEventListener(this.settingsEvent, this.updateSettings);
    document.removeEventListener('click', this.clickListener);
    document.removeEventListener('keydown', this.keyListener);
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

  render() {
    return html`
      ${when(this.settings, () => {
        return html`
          <dialog ?inert="${!this.open}">
            <form @change="${this.getSettings}">
              ${this.renderTheming()}  
              ${this.renderSeconds()}
              ${this.renderSwatches()}
            </form>
          </dialog>
        `;
      })}
    `;
  }

  private renderSeconds() {
    const {seconds} = this.settings;
    return html`
      <label id="seconds">
        <span>Seconds</span>
        <input
          ?checked="${seconds}"
          name="seconds"
          type="checkbox">
      </label>
    `;
  }

  private renderTheming() {
    const {theming} = this.settings;
    return html`
      <label id="theme">
        <span>Theme</span>
        <input
          ?checked="${theming}"
          name="theming"
          type="checkbox">
      </label>
    `;
  }

  private renderSwatches() {
    const {theme, theming} = this.settings;
    const tabindex = theming ?? -1;
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
}
