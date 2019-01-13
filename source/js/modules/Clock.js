// NOTE: All 'ClockDimensions' enum values need to stay coordinated with
// values in 'source/stylus/clock/_config.styl'

/** @enum {number} */
const ClockDimensions = {
  SIZE: 100,
  CENTER: 50, // Half of SIZE
  STROKE_WIDTH: 3,
  HOURS_HAND_LENGTH: 30,
}

/** @const {number} */
const HOURS_HAND_END = ClockDimensions.CENTER - ClockDimensions.HOURS_HAND_LENGTH;

/** @const {number} */
const MINUTES_HAND_LENGTH = ClockDimensions.CENTER - ClockDimensions.STROKE_WIDTH;

/** @const {number} */
const MINUTES_HAND_END = ClockDimensions.CENTER - MINUTES_HAND_LENGTH;

/** @class */
class Clock extends HTMLElement {
  constructor() {
    super();

    /** @const {number} */
    this.previousMinutesAngle = null;
  }
  
  /** @callback */
  connectedCallback() {
    // Render clock immediately since screen is blank for a second otherwise.
    this.setHands_(); 

    // Check the time every second.
    setInterval(() => this.setHands_(), 1000);
  }
  
  /**
   * Calculates rotations for hours and minutes hands and renders an SVG.
   * @private
   */
  setHands_() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hoursAngle = (hours * 60 + minutes) * .5; 
    const minutesAngle = minutes * 6;

    // Redraw clock only when the minutes angle has changed (i.e. every minute).
    if (minutesAngle !== this.previousMinutesAngle) {
      this.previousMinutesAngle = minutesAngle;
      this.innerHTML = `
        <svg viewbox="0 0 ${ClockDimensions.SIZE} ${ClockDimensions.SIZE}">
          <g>
            <line
              class="clock__hand"
              x1="${ClockDimensions.CENTER}" y1="${ClockDimensions.CENTER}"
              x2="${ClockDimensions.CENTER}" y2="${HOURS_HAND_END}"
              transform="rotate(${hoursAngle}, ${ClockDimensions.CENTER}, ${ClockDimensions.CENTER})"/>
            <line
              class="clock__hand"
              x1="${ClockDimensions.CENTER}" y1="${ClockDimensions.CENTER}"
              x2="${ClockDimensions.CENTER}" y2="${MINUTES_HAND_END}"
              transform="rotate(${minutesAngle}, ${ClockDimensions.CENTER}, ${ClockDimensions.CENTER})"/>
            <circle
              class="clock__pivot"
              cx="${ClockDimensions.CENTER}"
              cy="${ClockDimensions.CENTER}"
              r="${ClockDimensions.STROKE_WIDTH}"/>
          </g>
        </svg>
      `;
    }
  }
}

export { Clock };