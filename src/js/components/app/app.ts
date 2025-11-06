import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {Events, Settings} from '../../shared';
import shadowStyles from './app.scss';


/**
 * Web component for a clock with nine sets of hands.
 */
@customElement('clock-app')
class App extends LitElement {
  private settingsHandler: EventListenerObject;
  private touchTarget: HTMLElement;

  @state() settings: Settings;
  
  static styles = css`${shadowStyles}`;

  constructor() {
    super();
    this.settingsHandler = this.updateSettings.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(Events.Settings, this.settingsHandler);
    this.addEventListener(Events.Touchstart, this.handleTouchstart, {passive: true});
    this.addEventListener(Events.Touchend, this.handleTouchend, {passive: true});
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(Events.Settings, this.settingsHandler);
    this.removeEventListener(Events.Touchstart, this.handleTouchstart);
    this.removeEventListener(Events.Touchend, this.handleTouchend);
  }

  private updateSettings(event: CustomEvent) {
    this.settings = event.detail.settings;
  }

  private handleTouchstart(event: TouchEvent) {
    this.touchTarget = <HTMLElement>event.composedPath()[0];

    if (['theme'].includes(this.touchTarget.className)) {
      this.touchTarget.classList.add('touch');
    }
  }

  private handleTouchend() {
    this.touchTarget.classList.remove('touch');
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
