require('dotenv').config();
import { App } from './modules/App';
import { Tools } from './modules/Tools';
import '../stylus/clock.styl'; // Stylesheet for Webpack

const app = new App();
const tools = new Tools();

/**
 * Initializes app when the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  app.init();
  tools.init();
}, { once: true } );

/**
 * Updates 'vh' value when window is resized.
 */
window.addEventListener('resize', () => {
  tools.viewportHeight();
}, { passive: true });
