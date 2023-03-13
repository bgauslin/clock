import {LitElement, css, html} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {AppEvent, Settings} from '../../shared';

import shadowStyles from './app.scss';

const STORAGE_ITEM = 'clock';

/**
 * Web component for a clock with nine sets of hands.
 */
@customElement('clock-app')
class App extends LitElement {
  private settingsListener: EventListenerObject;

  @query('clock-settings') settingsWidget: HTMLElement;

  @state() settings: Settings = {
    seconds: true,
    theme: 'default',
    theming: true,
  };
  
  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.settingsListener = this.updateSettings.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.applySettings();
    this.addEventListener(AppEvent.SETTINGS, this.settingsListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(AppEvent.SETTINGS, this.settingsListener);
  }

  private updateSettings(e: CustomEvent) {
    this.settings = e.detail.settings;
    localStorage.setItem(STORAGE_ITEM, JSON.stringify(this.settings));
  }

  private async applySettings() {
    const settings = JSON.parse(localStorage.getItem(STORAGE_ITEM));
    if (settings) {
      this.settings = settings;
    }
    await this.updateComplete;
    this.settingsWidget.dispatchEvent(new CustomEvent(AppEvent.SETTINGS, {
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
