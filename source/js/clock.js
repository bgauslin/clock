import { Clock } from './modules/Clock';
import { Theme } from './modules/Theme';
import { Utilities } from './modules/Utilities';

/** @const {string} */
const CLOCK_ELEMENT = 'n-clock';

/** @const {string} */
const CLOCKS_SELECTOR = '.clocks__frame';

/** @instance */
const theme = new Theme();

/** @instance */
const utilities = new Utilities({
  analyticsSettings: {
    domain: 'clock.gauslin.com',
    id: 'UA-626192-16',
  },
});

/**
 * Renders custom elements for the app.
 * @function renderClocks
 * @param {!string} selector - Parent element's selector for attaching
 *     rendered clocks.
 * @param {?number=} n - Number of clocks to render.
 * @public
 */
const renderClocks = (selector, n = 9) => {
  const clocksEl = document.querySelector(selector);
  for (let i = 1; i <= n; i++) {
    clocksEl.innerHTML += `<${CLOCK_ELEMENT}></${CLOCK_ELEMENT}>\n`;
  }
}

/**
 * Initializes app when the DOM is ready.
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
  customElements.define(CLOCK_ELEMENT, Clock);
  renderClocks(CLOCKS_SELECTOR);
  theme.init();
  utilities.init();
}, { once: true } );

/**
 * Updates 'vh' value when window is resized.
 * @listens resize
 */
window.addEventListener('resize', () => {
  utilities.viewportHeight();
}, { passive: true });
