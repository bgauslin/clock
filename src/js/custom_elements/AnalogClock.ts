const HOURS_HAND_LENGTH: number = 30;
const STROKE_WIDTH: number = 3;
const SIZE: number = 100;
const CENTER: number = SIZE / 2;
const HOURS_HAND_END: number = CENTER - HOURS_HAND_LENGTH;
const MINUTES_HAND_END: number = 0;
const INTERVAL_MS: number = 1000;

class AnalogClock extends HTMLElement {
  private interval_: any;
  private previousMinutesAngle_: number;

  constructor() {
    super();
    this.previousMinutesAngle_ = 0;
    this.setHands_();
    this.interval_ = setInterval(() => this.setHands_(), INTERVAL_MS);
  }

  disconnectedCallback(): void {
    clearInterval(this.interval_);
  }

  /**
   * Calculates rotations for hours and minutes hands and renders an SVG.
   */
  private setHands_(): void {
    // Get the current time.
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Set angles for clock hands.
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

export {AnalogClock};