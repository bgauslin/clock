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

// Register custom elements.
customElements.define('n-clock', Clock);

/**
 * @description Renders custom elements for the app.
 * @param {!Element} selector Parent element's selector for rendered clocks.
 * @param {?number=} n Number of clocks to render.
 */
const renderClocks = (selector, n=9) => {
  const clocksEl = document.querySelector(selector);
  for (let i = 1; i <= n; i++) {
    clocksEl.innerHTML += '<n-clock></n-clock>';
  }
}

/** @description Initializes app once the DOM is ready. */
document.addEventListener('DOMContentLoaded', () => {
  renderClocks('.clocks__frame');
  theme.init();
  utilities.init();
}, { once: true } );

/** @description Updates 'vh' value when window is resized. */
window.addEventListener('resize', () => {
  utilities.viewportHeight();
}, { passive: true });
