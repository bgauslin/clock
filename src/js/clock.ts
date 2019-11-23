require('dotenv').config();

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import { AnalogClock } from './components/AnalogClock';
import { App } from './modules/App';
import { ColorPicker } from './components/ColorPicker';
import { DigitalClock } from './components/DigitalClock';
import { Themifier } from './components/Themifier';

import '../stylus/clock.styl';

// Define all custom elements.
const map = new Map();
map.set(AnalogClock, 'analog-clock');
map.set(ColorPicker, 'color-picker');
map.set(DigitalClock, 'digital-clock');
map.set(Themifier, 'app-theme');
map.forEach((key, value) => customElements.define(key, value));

// Install offline plugin runtime.
OfflinePluginRuntime.install();

// Create app instance and initialize it.
const app = new App();
app.init();
