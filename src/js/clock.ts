require('dotenv').config();
import { App } from './modules/App';
import { Tools } from './modules/Tools';
import '../stylus/clock.styl';

const app = new App();
const tools = new Tools();

/**
 * Initializes app when the DOM is ready.
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
  app.init();
  tools.init();
}, { once: true } );

/**
 * Updates 'vh' value when window is resized.
 * @listens resize
 */
window.addEventListener('resize', () => {
  tools.viewportHeight();
}, { passive: true });
