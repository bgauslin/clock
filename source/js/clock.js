import { Clock } from './modules/customClock';
import { Utilities } from './modules/utilities';

/** @const {number} */
const CLOCKS_COUNT = 9;

/** @const {Element} */
const clocksEl = document.querySelector('.clocks__frame');

/** @instance */
const utilities = new Utilities({
  analyticsSettings: {
    domain: 'clock.gauslin.com',
    id: 'UA-626192-XX',
  },
});

// Register custom elements.
customElements.define('n-clock', Clock);

/** @description Waits until DOM is ready before initializing app. */
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= CLOCKS_COUNT; i++) {
    clocksEl.innerHTML += '<n-clock></n-clock>';
  }
  utilities.init();
}, { once: true } );

/** @description Updates 'vh' value when window is resized. */
window.addEventListener('resize', () => {
  utilities.viewportHeight();
}, { passive: true });
