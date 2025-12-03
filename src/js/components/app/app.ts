import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {Settings, STORAGE_ITEM} from '../../shared';
import shadowStyles from './app.scss';


/**
 * Web component for a clock with nine sets of hands.
 */
@customElement('clock-app') class App extends LitElement {
  @state() seconds: boolean = true;
  @state() theme: string = 'brown';
  @state() theming: boolean = true;

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
    const {seconds, theme, theming} = settings;
    this.seconds = seconds;
    this.theme = theme;
    this.theming = theming; 
  }

  protected render() {
    const facesTheme = this.theming ? this.theme : undefined;

    return html`
      <clock-settings
        .seconds=${this.seconds}
        .theme=${this.theme}
        .theming=${this.theming}
        @settingsChanged=${this.updateSettings}></clock-settings>
      <clock-faces
        aria-level="1"
        role="heading"
        ?seconds="${this.seconds}"
        theme=${ifDefined(facesTheme)}></clock-faces>
    `;
  }

  static styles = css`${shadowStyles}`;
}
