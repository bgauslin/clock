require('dotenv').config();

import './custom_elements/analog_clock/analog_clock';
import './custom_elements/app/app';
import './custom_elements/color_picker/color_picker';
import './custom_elements/digital_clock/digital_clock';
import './custom_elements/shifty_header/shifty_header';

// Import styles for injecting into DOM.
import '../stylus/index.styl';

// Register the Service Worker.
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
}