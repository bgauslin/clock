require('dotenv').config();
import { AnalogClock } from './components/AnalogClock';
import { App } from './modules/App';
import { ColorPicker } from './components/ColorPicker';
import { DigitalClock } from './components/DigitalClock';
import { Themifier } from './components/Themifier';
import { Tools } from './modules/Tools';
import '../stylus/clock.styl'; // Stylesheet for Webpack

/**
 * Define all custom elements.
 */
customElements.define('analog-clock', AnalogClock);
customElements.define('color-picker', ColorPicker);
customElements.define('digital-clock', DigitalClock);
customElements.define('app-theme', Themifier);

/**
 * Create class instances.
 */ 
const app = new App();
const tools = new Tools();

/**
 * Initialize app when the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  app.init();
  tools.init();
}, { once: true } );

/**
 * Update 'vh' value when window is resized.
 */
window.addEventListener('resize', () => {
  tools.viewportHeight();
}, { passive: true });
