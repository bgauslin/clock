/** @const {number} */
const CLOCKS_COUNT = 9;

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
  }

  init() {
    this.renderClockEls();
    setInterval(this.tick, 1000);
  }

  renderClockEls() {
    const clocksEl = document.querySelector('.clocks');

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

  tick() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hoursAngle = .5 * (hours * 60 + minutes); 
    const minutesAngle = 6 * minutes;

    // TODO: Set these once instead of on every tick...
    const hourHands = document.querySelectorAll('.hours');
    const minuteHands = document.querySelectorAll('.minutes');

    Array.from(hourHands).forEach((hourHand) => {
      hourHand.setAttribute('transform', `rotate(${hoursAngle}, 50, 50)`);
    });

    Array.from(minuteHands).forEach((minuteHand) => {
      minuteHand.setAttribute('transform', `rotate(${minutesAngle}, 50, 50)`);
    });
  }
}

export { Clock };