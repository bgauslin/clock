/** @const {number} */
const MINUTES_DIVISOR = 60;

/** @const {number} */
const HOURS_DIVISOR = 12;

class Clock {

  init() {
    setInterval(this.tick, 1000)
  }

  tick() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const minutesAngle = minutes * (360 / MINUTES_DIVISOR);
    const minutesPerHourAngle = (minutes / MINUTES_DIVISOR) * (360 / HOURS_DIVISOR);
    const hoursAngle = hours * (360 / HOURS_DIVISOR);
    const hoursPlusMinutesAngle = hoursAngle + minutesPerHourAngle;

    // console.log('hoursPlusMinutesAngle', hoursPlusMinutesAngle);
    // console.log('minutesAngle', minutesAngle);
  }
}

export { Clock };