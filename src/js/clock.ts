require('dotenv').config();

import './custom_elements/analog_clock/analog_clock';
import './custom_elements/color_picker/color_picker';
import './custom_elements/digital_clock/digital_clock';
import './custom_elements/shifty_header/shifty_header';
import './custom_elements/tools/tools';

// Import styles for injecting into DOM.
import '../stylus/index.styl';

// Render analog clocks into <main> with an IIFE and add a class for styling.
(() => {
  const count = 9;
  const main = document.querySelector('main');

  while (main.firstChild) {
    main.firstChild.remove();
  }

  for (let i = 1; i <= count; i++) {
    const clock = document.createElement('analog-clock');
    main.appendChild(clock);
  }

  main.classList.add('clocks');
})();

// Register the Service Worker.
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
}