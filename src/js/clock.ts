require('dotenv').config();

import {AnalogClock} from './custom_elements/AnalogClock';
import {App} from './custom_elements/App';
import {ColorPicker} from './custom_elements/ColorPicker';
import {DigitalClock} from './custom_elements/DigitalClock';
import {ShiftyHeader} from './custom_elements/ShiftyHeader';

// Import styles for injecting into DOM.
import '../stylus/index.styl';

// Define all custom elements.
const map = new Map();
map.set(App, 'clock-app');
map.set(AnalogClock, 'analog-clock');
map.set(ColorPicker, 'color-picker');
map.set(DigitalClock, 'digital-clock');
map.set(ShiftyHeader, 'app-header');
map.forEach((key, value) => customElements.define(key, value));

// Register the Service Worker.
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
}