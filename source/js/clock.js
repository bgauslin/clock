import { Clock } from './modules/clockWidget';
import { Utilities } from './modules/utilities';

/** @instance */
const utilities = new Utilities({
  analyticsSettings: {
    domain: 'clock.gauslin.com',
    id: 'UA-626192-XX',
  },
});

/** @instance */
const clock = new Clock();

/** @description Waits until DOM is ready before initializing app. */
document.addEventListener('DOMContentLoaded', () => {
  clock.init();
  utilities.init();
}, { once: true } );

/** @description Updates 'vh' value when window is resized. */
window.addEventListener('resize', () => {
  utilities.viewportHeight();
}, { passive: true });
