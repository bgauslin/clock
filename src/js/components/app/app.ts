import {LitElement, css, html} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {Settings} from '../../shared';

import shadowStyles from './app.scss';

/**
 * Web component for a clock with nine sets of hands.
 */
@customElement('clock-app')
class App extends LitElement {
  @query('clock-settings') settingsWidget: HTMLElement;
  @state() settings: Settings = {
    seconds: true,
    theme: 'default',
    theming: true,
  };
  @state() settingsEvent = 'updateSettings';
  @state() settingsListener: EventListenerObject;
  @state() storageItem = 'clock';

  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.settingsListener = this.updateSettings.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.applySettings();
    this.addEventListener(this.settingsEvent, this.settingsListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(this.settingsEvent, this.settingsListener);
  }

  private updateSettings(e: CustomEvent) {
    this.settings = e.detail.settings;
    localStorage.setItem(this.storageItem, JSON.stringify(this.settings));
  }

  private async applySettings() {
    const settings = JSON.parse(localStorage.getItem(this.storageItem));
    if (settings) {
      this.settings = settings;
    }
    await this.updateComplete;
    this.settingsWidget.dispatchEvent(new CustomEvent(this.settingsEvent, {
      detail: {
        settings: this.settings,
      }
    }));
  }

  render() {
    const {seconds, theme, theming} = this.settings;
    const _theme = theming ? theme : null;
    return html`
      <clock-faces
        aria-level="1"
        role="heading"
        ?seconds="${seconds}"
        theme="${ifDefined(_theme)}">
      </clock-faces>
      <clock-settings></clock-settings>
    `;
  }
}
