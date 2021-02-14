require('dotenv').config();

import './custom_elements/AnalogClock';
import './custom_elements/App';
import './custom_elements/ColorPicker';
import './custom_elements/DigitalClock';
import './custom_elements/ShiftyHeader';

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