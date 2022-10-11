import {LitElement, css, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import shadowStyles from './app.scss';

/**
 * Web component for a clock with nine sets of hands.
 */
@customElement('clock-app')
class App extends LitElement {
  @property() storageItem = 'clock';
  @property() settingsEvent = 'updateSettings';
  @query('clock-settings') settingsWidget: HTMLElement;
  @state() settings = {
    seconds: true,
    theme: 'default',
    theming: true,
  };
  @state() settingsListener: EventListenerObject;

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
    const myTheme = theming ? theme : null;
    return html`
      <clock-faces
        seconds="${seconds}"
        theme="${ifDefined(myTheme)}">
      </clock-faces>
      <clock-settings></clock-settings>
    `;
  }
}
