import { Templates } from './modules/Templates';
import { Theme } from './modules/Theme';
import { Utilities } from './modules/Utilities';
import '../stylus/clock.styl';

if (process.env.NODE_ENV !== 'production') {
  console.warn('Development mode');
}

/** @instance */
const templates = new Templates();

/** @instance */
const theme = new Theme();

/** @instance */
const utilities = new Utilities({
  analyticsSettings: {
    domain: 'clock.gauslin.com',
    id: 'UA-626192-16',
  },
});

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
