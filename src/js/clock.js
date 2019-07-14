require('dotenv').config();

import { Templates } from './modules/Templates';
import { Theme } from './modules/Theme';
import { Utilities } from './modules/Utilities';
import '../stylus/clock.styl';

/** @instance */
const templates = new Templates();

/** @instance */
const theme = new Theme();

/** @instance */
const utilities = new Utilities();

/**
 * Initializes app when the DOM is ready.
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
  templates.init();
  theme.init();
  utilities.init();
}, { once: true } );

/**
 * Updates 'vh' value when window is resized.
 * @listens resize
 */
window.addEventListener('resize', () => {
  utilities.viewportHeight();
}, { passive: true });
