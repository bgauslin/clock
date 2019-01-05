import { Clock } from './modules/customClock';
import { Theme } from './modules/theme';
import { Utilities } from './modules/utilities';

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
 * @param {!string} selector - Parent element's selector for attaching rendered clocks.
 * @param {?number=} n - Number of clocks to render.
 * @public
 */
const renderClocks = (selector, n = 9) => {
  const clocksEl = document.querySelector(selector);
  for (let i = 1; i <= n; i++) {
    clocksEl.innerHTML += '<n-clock></n-clock>\n';
  }
}

/**
 * Initializes app when the DOM is ready.
 * @listens
 */
document.addEventListener('DOMContentLoaded', () => {
  customElements.define('n-clock', Clock);
  renderClocks('.clocks__frame');
  theme.init();
  utilities.init();
}, { once: true } );

/**
 * Updates 'vh' value when window is resized.
 * @listens 
 */
window.addEventListener('resize', () => {
  utilities.viewportHeight();
}, { passive: true });
