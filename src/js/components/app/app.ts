import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
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
    this.getLocalStorage();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  private getLocalStorage() {
    const storage = JSON.parse(localStorage.getItem(STORAGE_ITEM));
    if (!storage) return;
    this.setSettings(storage);
  }

  private setLocalStorage() {
    const settings = {
      digital: this.digital,
      seconds: this.seconds,
      theme: this.theme,
    }
    localStorage.setItem(STORAGE_ITEM, JSON.stringify(settings));
  }

  private updateSettings(event: CustomEvent) {
    this.setSettings(event.detail);
    this.setLocalStorage();
  }

  private setSettings(settings: Settings) {
    const {digital, seconds, theme} = settings;
    this.digital = digital;
    this.seconds = seconds;
    this.theme = theme;
  }

  protected render() {
    return html`
      <clock-settings
        .digital=${this.digital}
        .seconds=${this.seconds}
        .theme=${this.theme}
        @settingsChanged=${this.updateSettings}></clock-settings>
      <clock-faces
        theme="${this.theme}"
        ?seconds=${this.seconds}
        .digital=${this.digital}></clock-faces>
      <clock-touch></clock-touch>
    `;
  }

  // Shadow DOM stylesheet.
  static styles = css`${shadowStyles}`;
}
