/** @const {number} */
const HOURS_HAND_LENGTH = 30;

/** @const {number} */
const STROKE_WIDTH = 3;

/** @const {number} */
const SIZE = 100;

/** @const {number} */
const CENTER = SIZE / 2;

/** @const {number} */
const HOURS_HAND_END = CENTER - HOURS_HAND_LENGTH;

/** @const {number} */
const MINUTES_HAND_END = 0;

/** @class */
class AnalogClock extends HTMLElement {
  constructor() {
    super();

    /** @private {?number} */
    this.previousMinutesAngle_ = null;
  }
  
  /** @callback */
  connectedCallback() {
    // Render clock immediately since screen is blank for a second otherwise.
    this.setHands_(); 

    // Check the time every second.
    setInterval(() => this.setHands_(), 1000);
  }

  /** @callback */
  disconnectedCallback() {
    clearInterval();
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
    if (minutesAngle !== this.previousMinutesAngle_) {
      this.previousMinutesAngle_ = minutesAngle;
      const html = `\
        <svg viewbox="0 0 ${SIZE} ${SIZE}">\
          <g>\
            <line \
              class="clock__hand" \
              x1="${CENTER}" y1="${CENTER}" \
              x2="${CENTER}" y2="${HOURS_HAND_END}" \
              transform="rotate(${hoursAngle}, ${CENTER}, ${CENTER})"/>\
            <line \
              class="clock__hand" \
              x1="${CENTER}" y1="${CENTER}" \
              x2="${CENTER}" y2="${MINUTES_HAND_END}" \
              transform="rotate(${minutesAngle}, ${CENTER}, ${CENTER})"/>\
            <circle \
              class="clock__pivot" \
              cx="${CENTER}" \
              cy="${CENTER}" \
              r="${STROKE_WIDTH}"/>\
          </g>\
        </svg>\
      `;
      this.innerHTML = html.replace(/\s\s/g, '');
    }
  }
}

export { AnalogClock };