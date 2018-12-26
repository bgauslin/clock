/** @const {number} */
const MINUTES_DIVISOR = 60;

/** @const {number} */
const HOURS_DIVISOR = 12;

/** @const {number} */
const CLOCKS_COUNT = 9;

class Clock {

  init() {
    this.renderClockEls();
    setInterval(this.tick, 1000)
  }

  renderClockEls() {
    const clocks = document.createElement('div');
    clocks.classList.add('clocks');

    for (let i = 1; i <= CLOCKS_COUNT; i++) {
      // TODO: Set all SVG values via constants and math...
      clocks.innerHTML += `
        <svg class="clock" viewbox="0 0 100 100">
          <g>
            <line class="hours" x1="50" y1="50" x2="50" y2="3"/>
            <line class="minutes" x1="50" y1="50" x2="50" y2="20"/>
          </g>
        </svg>
      `;
    }
    const appEl = document.querySelector('.app');
    appEl.appendChild(clocks);
  }

  tick() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hoursAngle = hours * (360 / HOURS_DIVISOR);
    const minutesPerHourAngle = (minutes / MINUTES_DIVISOR) * (360 / HOURS_DIVISOR);

    let hoursPlusMinutesAngle = hoursAngle + minutesPerHourAngle;
    let minutesAngle = minutes * (360 / MINUTES_DIVISOR);

    // TODO: Set these once instead of repeatedly...
    const hourHands = document.querySelectorAll('.hours');
    const minuteHands = document.querySelectorAll('.minutes');

    Array.from(hourHands).forEach((hourHand) => {
      hourHand.setAttribute('transform', `rotate(${hoursPlusMinutesAngle}, 50, 50)`);
    });

    Array.from(minuteHands).forEach((minuteHand) => {
      minuteHand.setAttribute('transform', `rotate(${minutesAngle}, 50, 50)`);
    });
  }
}

export { Clock };