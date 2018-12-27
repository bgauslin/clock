/** @const {number} */
const CLOCK_SIZE = 100;

/** @const {number} */
const STROKE_WIDTH = 3; // Half of CSS stroke-width.

/** @const {number} */
const CLOCK_CENTER = CLOCK_SIZE / 2;

/** @const {number} */
const HOURS_HAND_LENGTH = 30; // Coordinate with CSS offset value.

/** @const {number} */
const HOURS_HAND_END = CLOCK_CENTER - HOURS_HAND_LENGTH;

/** @const {number} */
const MINUTES_HAND_LENGTH = CLOCK_CENTER - STROKE_WIDTH;

/** @const {number} */
const MINUTES_HAND_END = CLOCK_CENTER - MINUTES_HAND_LENGTH;

/** @const {number} */
const REFRESH_INTERVAL = 30000; // 30 seconds

/** @class */
class Clock extends HTMLElement {

  constructor() {
    super();
  }
  
  connectedCallback() {
    this.setHands();
    setInterval(() => this.setHands(), REFRESH_INTERVAL);
  }
  
  setHands() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hoursAngle = (hours * 60 + minutes) * .5; 
    const minutesAngle = minutes * 6;

    this.innerHTML = `
      <svg viewbox="0 0 ${CLOCK_SIZE} ${CLOCK_SIZE}">
        <g>
          <line
            x1="${CLOCK_CENTER}" y1="${CLOCK_CENTER}"
            x2="${CLOCK_CENTER}" y2="${HOURS_HAND_END}"
            transform="rotate(${hoursAngle}, ${CLOCK_CENTER}, ${CLOCK_CENTER})"/>
          <line
            x1="${CLOCK_CENTER}" y1="${CLOCK_CENTER}"
            x2="${CLOCK_CENTER}" y2="${MINUTES_HAND_END}"
            transform="rotate(${minutesAngle}, ${CLOCK_CENTER}, ${CLOCK_CENTER})"/>
          <circle cx="${CLOCK_CENTER}" cy="${CLOCK_CENTER}" r="${STROKE_WIDTH}"/>
        </g>
      </svg>
    `;
  }
}

export { Clock };