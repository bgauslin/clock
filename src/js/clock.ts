require('dotenv').config();

import {AnalogClock} from './components/AnalogClock';
import {App} from './modules/App';
import {ColorPicker} from './components/ColorPicker';
import {DigitalClock} from './components/DigitalClock';
import {ShiftyHeader} from './components/ShiftyHeader';
import {Themifier} from './components/Themifier';

import '../stylus/clock.styl';

// Define all custom elements.
const map = new Map();
map.set(AnalogClock, 'analog-clock');
map.set(ColorPicker, 'color-picker');
map.set(DigitalClock, 'digital-clock');
map.set(ShiftyHeader, 'app-header');
map.set(Themifier, 'app-theme');
map.forEach((key, value) => customElements.define(key, value));

// Initialize the app.
window.addEventListener('DOMContentLoaded', () => new App('2018').init());

// Register the Service Worker.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}