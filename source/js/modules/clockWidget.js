/** @const {number} */
const CLOCKS_COUNT = 9;

// TODO: Convert to 'clock' custom element.
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
class Clock {

  constructor() {
    /** @const {number} */
    this.clockSize = 100;

    /** @const {number} */
    this.hoursHandLength = 30;

    /** @const {number} */
    this.minutesHandLength = 45;

    /** @const {number} */
    this.clockCenter = this.clockSize / 2;

    /** @const {number} */
    this.hoursHandEnd = this.clockCenter - this.hoursHandLength;

    /** @const {number} */
    this.minutesHandEnd = this.clockCenter - this.minutesHandLength;

    /** @const {Array} */
    this.hourHands = [];

    /** @const {Array} */
    this.minuteHands = [];
  }

  init() {
    this.renderClockEls();
    setInterval(this.tick, 500);
  }

  // Renders clocks into the DOM.
  renderClockEls() {
    const clocksEl = document.querySelector('.clocks__frame');

    for (let i = 1; i <= CLOCKS_COUNT; i++) {
      clocksEl.innerHTML += `
        <svg class="clock" viewbox="0 0 ${this.clockSize} ${this.clockSize}">
          <g>
            <line class="hours" x1="${this.clockCenter}" y1="${this.clockCenter}" x2="${this.clockCenter}" y2="${this.hoursHandEnd}"/>
            <line class="minutes" x1="${this.clockCenter}" y1="${this.clockCenter}" x2="${this.clockCenter}" y2="${this.minutesHandEnd}"/>
          </g>
        </svg>
      `;
    }
  }

  // Sets rotation for hours and minutes hands.
  tick() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hoursAngle = (hours * 60 + minutes) * .5; 
    const minutesAngle = minutes * 6;

    if (!this.hourHands || !this.minuteHands) {
      this.hourHands = document.querySelectorAll('.hours');
      this.minuteHands = document.querySelectorAll('.minutes');
    }

    Array.from(this.hourHands).forEach((hourHand) => {
      hourHand.setAttribute('transform', `rotate(${hoursAngle}, 50, 50)`);
    });

    Array.from(this.minuteHands).forEach((minuteHand) => {
      minuteHand.setAttribute('transform', `rotate(${minutesAngle}, 50, 50)`);
    });
  }

  // Display current time in the document title.
  updateDocumentTitle(hours, minutes, seconds) {
    const h = (hours > 12) ? (hours - 12) : hours;
    const m = (minutes < 10) ? `0${minutes}` : minutes;
    const s = (seconds < 10) ? `0${seconds}` : seconds;
    const p = (hours > 12) ? 'PM' : 'AM';
    document.title = `${h}:${m}:${s} ${p}`;
  }
}

export { Clock };