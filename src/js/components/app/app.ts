import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {when} from 'lit/directives/when.js';
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

  private updateSettings(e: CustomEvent) {
    this.settings = e.detail.settings;
  }

  protected render() {
    return html`
      ${when(this.settings, () => {
        const {seconds, theme, theming} = this.settings;
        const facesTheme = theming ? theme : undefined;
        return html`
          <clock-faces
            aria-level="1"
            role="heading"
            theme="${ifDefined(facesTheme)}"
            ?seconds="${seconds}"></clock-faces>
        `;
      })}
      <clock-settings></clock-settings>
    `;
  }
}
