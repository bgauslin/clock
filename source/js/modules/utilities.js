/** @const {string} */
const NO_JS_ATTR = 'no-js';

/** @const {string} */
const NO_TOUCH_ATTR = 'no-touch';

/** @class */
class Utilities {

  constructor(config) {
    /** @const {string} */
    this.analyticsSettings = config.analyticsSettings;
  }

  /** @description Initializes all utilities. */
  init() {
    this.hasJs();
    this.noTouch();
    this.viewportHeight();
    this.googleAnalytics(this.analyticsSettings);
  }

  /**
   * @description Initializes Google Analytics tracking.
   * @param {!Object} settings: GA settings (id, hostname)
   */
  googleAnalytics(settings) {
    if (window.location.hostname === settings.domain) {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga')
      ga('create', settings.id, 'auto')
      ga('send', 'pageview')
    }
  }

  /** @description Removes 'no-js' attribute and 'noscript' element if JS is enabled. */
  hasJs() {
    document.body.removeAttribute(NO_JS_ATTR);
    const noscript = document.querySelector('noscript');
    noscript.remove();
  }

  /** @description Removes 'no-touch' attribute if device is touch-enabled. */
  noTouch() {
    if ('ontouchstart' in window || navigator.msMaxTouchPoints > 0) {
      document.body.removeAttribute(NO_TOUCH_ATTR);
    }
  }

  /**
   * @description Sets custom property for viewport height that updates 'vh' calculation
   * due to iOS Safari behavior where chrome appears and disappears when scrolling.
   */
  viewportHeight () {
    const viewportUnit = window.innerHeight / 100;
    document.documentElement.style.setProperty('--viewport-unit', `${viewportUnit}px`);
  }
}

export { Utilities };