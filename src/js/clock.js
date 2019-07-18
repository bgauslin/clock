require('dotenv').config();
import fastclick from 'fastclick';
import { App } from './modules/App';
import { Utilities } from './modules/Utilities';
import '../stylus/clock.styl';

/** @instance */
const app = new App();

/** @instance */
const utilities = new Utilities();

/**
 * Initializes app when the DOM is ready.
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
  app.init();
  utilities.init();
  fastclick.attach(document.body);
}, { once: true } );

/**
 * Updates 'vh' value when window is resized.
 * @listens resize
 */
window.addEventListener('resize', () => {
  utilities.viewportHeight();
}, { passive: true });
