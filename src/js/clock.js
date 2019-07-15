require('dotenv').config();

import fastclick from 'fastclick';
import { Templates } from './modules/Templates';
import { Utilities } from './modules/Utilities';
import '../stylus/clock.styl';

/** @instance */
const templates = new Templates();

/** @instance */
const utilities = new Utilities();

/**
 * Initializes app when the DOM is ready.
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
  fastclick.attach(document.body);
  templates.init();
  utilities.init();
}, { once: true } );

/**
 * Updates 'vh' value when window is resized.
 * @listens resize
 */
window.addEventListener('resize', () => {
  utilities.viewportHeight();
}, { passive: true });
