import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {AppEvent, Settings} from '../../shared';

import shadowStyles from './app.scss';

/**
 * Web component for a clock with nine sets of hands.
 */
@customElement('clock-app')
class App extends LitElement {
  private settingsListener: EventListenerObject;

  @state() settings: Settings;
  
  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.settingsListener = this.updateSettings.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(AppEvent.SETTINGS, this.settingsListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(AppEvent.SETTINGS, this.settingsListener);
  }

  private updateSettings(event: CustomEvent) {
    this.settings = event.detail.settings;
  }

  protected render() {
    return html`
      <clock-settings></clock-settings>  
      ${this.renderFaces()}
    `;
  }

  private renderFaces() {
    if (!this.settings) return;

    const {seconds, theme, theming} = this.settings;
    const facesTheme = theming ? theme : undefined;
    return html`
      <clock-faces
        aria-level="1"
        role="heading"
        ?seconds="${seconds}"
        theme="${ifDefined(facesTheme)}"></clock-faces>
    `;
  }
}
