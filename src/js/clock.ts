require('dotenv').config();

import {AnalogClock} from './custom_elements/AnalogClock';
import {App} from './modules/App';
import {ColorPicker} from './custom_elements/ColorPicker';
import {DigitalClock} from './custom_elements/DigitalClock';
import {ShiftyHeader} from './custom_elements/ShiftyHeader';

// Import styles for injecting into DOM.
import '../stylus/clock.styl';

// Define all custom elements.
const map = new Map();
map.set(AnalogClock, 'analog-clock');
map.set(ColorPicker, 'color-picker');
map.set(DigitalClock, 'digital-clock');
map.set(ShiftyHeader, 'app-header');
map.forEach((key, value) => customElements.define(key, value));

// Initialize the app.
window.addEventListener('DOMContentLoaded', () => new App('2018').init());

// Register the Service Worker.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}