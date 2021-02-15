require('dotenv').config();

import './custom_elements/analog_clock/analog_clock';
import './custom_elements/color_picker/color_picker';
import './custom_elements/digital_clock/digital_clock';
import './custom_elements/tools/tools';
import '../stylus/index.styl';

// Empty out <main>, add a classname for CSS, and render 9 analog clocks.
(() => {
  const main = document.querySelector('main');
  main.classList.add('clocks');

  while (main.firstChild) {
    main.firstChild.remove();
  }

  for (let i = 1; i <= 9; i++) {
    const clock = document.createElement('analog-clock');
    main.appendChild(clock);
  }
})();

// Register the Service Worker.
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
}