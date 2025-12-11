import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {Settings, STORAGE_ITEM} from '../../shared';
import shadowStyles from './app.scss';


/**
 * Web component for a clock with nine sets of hands.
 */
@customElement('clock-app') class App extends LitElement {
  @state() digital: boolean = false;
  @state() seconds: boolean = true;
  @state() theme: string = 'blue';

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.getStorage();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  private getStorage() {
    const storage = JSON.parse(localStorage.getItem(STORAGE_ITEM));
    if (storage) {
      this.getSettings(storage);
    }
  }

  private updateSettings(event: CustomEvent) {
    const settings = event.detail;
    this.getSettings(settings);
    localStorage.setItem(STORAGE_ITEM, JSON.stringify(settings));
  }

  private getSettings(settings: Settings) {
    const {digital, seconds, theme} = settings;
    this.digital = digital;
    this.seconds = seconds;
    this.theme = theme;
  }

  protected render() {
    return html`
      <clock-settings
        .digital="${this.digital}"
        .seconds=${this.seconds}
        .theme=${this.theme}
        @settingsChanged=${this.updateSettings}></clock-settings>
      <clock-faces
        theme="${this.theme}"
        ?seconds=${this.seconds}
        .digital=${this.digital}></clock-faces>
    `;
  }

  static styles = css`${shadowStyles}`;
}
