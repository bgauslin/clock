require('dotenv').config();
import fastclick from 'fastclick';
import { App } from './modules/App';
import { Tools } from './modules/Tools';
import '../stylus/clock.styl';

/** @instance */
const app = new App();

/** @instance */
const tools = new Tools();

/**
 * Initializes app when the DOM is ready.
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
  app.init();
  tools.init();
  fastclick.attach(document.body);
}, { once: true } );

/**
 * Updates 'vh' value when window is resized.
 * @listens resize
 */
window.addEventListener('resize', () => {
  tools.viewportHeight();
}, { passive: true });
