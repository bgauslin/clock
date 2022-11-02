import {LitElement, css, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import shadowStyles from './faces.scss';

/**
 * Web component that renders nine analog clocks via SVG based on system time.
 */
@customElement('clock-faces')
class Faces extends LitElement {
  @property({attribute: 'aria-label', reflect: true}) ariaLabel ='';

  @state() framerate: number = 1000 / 60;
  @state() hoursAngle: number = 0;
  @state() interval = 0;
  @state() minutesAngle: number = 0;
  @state() secondsAngle: number = 0;

  static styles = css`${shadowStyles}`;

  connectedCallback() {
    super.connectedCallback();
    this.setTime();
    this.interval = window.setInterval(() => this.setTime(), this.framerate);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.interval);
  }

  /**
   * Calculates angles for hour, minute, and second hands, and updates ARIA
   * label with human-friendly version of the current time.
   */
  private setTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    this.hoursAngle = (hours * 60 + minutes) * .5; 
    this.minutesAngle = minutes * 6;
    this.secondsAngle = (seconds + (milliseconds / 1000)) * 6;

    this.ariaLabel = `Current time is ${now.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      dayPeriod: 'short',
    })}.`;
  }

  render() {
    const clocks = [];
    for (let i = 0; i < 9; i++) {
      clocks.push(html`
        <svg viewbox="0 0 100 100">
          <line
            class="hours"
            x1="50" y1="50"
            x2="50" y2="20"
            transform="rotate(${this.hoursAngle}, 50, 50)"/>
          <line
            class="minutes"
            x1="50" y1="50"
            x2="50" y2="0"
            transform="rotate(${this.minutesAngle}, 50, 50)"/>
          <circle class="lower-pivot" cx="50" cy="50" r="3"/>
          <line
            class="seconds"
            x1="50" y1="80"
            x2="50" y2="0"
            transform="rotate(${this.secondsAngle}, 50, 50)"/>
          <circle class="upper-pivot" cx="50" cy="50" r=".5"/>
        </svg>`
      );
    }
    return html`${clocks}`;
  }
}
