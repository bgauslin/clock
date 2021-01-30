import fastclick from 'fastclick';

const TARGET_ATTR: string = 'target';

/**
 * Custom element that sets up the DOM and initialize site-wide features.
 */
export class App extends HTMLElement {
  private hasSetup: boolean;

  constructor() {
    super();
    window.addEventListener('resize', this.viewportHeight);
  }

  connectedCallback() {
    if (!this.hasSetup) {
      this.setupDom();
      this.touchEnabled();
      this.viewportHeight();
      this.googleAnalytics();
      this.hasSetup = true;
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.viewportHeight);
  }

  /**
   * Renders analog clocks into an existing DOM element.
   */
  private setupDom() {
    // Change element's classname and fill it with analog clocks.
    const el = this.querySelector(this.getAttribute(TARGET_ATTR));
    el.className = 'clocks';
    el.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
      el.innerHTML += '<analog-clock class="clock"></analog-clock>';
    }

    // Clean up.
    this.removeAttribute(TARGET_ATTR);
    document.body.removeAttribute('no-js');
  }

  /**
   * Removes 'no-touch' attribute and adds fastclick if device is touch-enabled.
   */
  private touchEnabled() {
    if ('ontouchstart' in window || (window as any).DocumentTouch) {
      document.body.removeAttribute('no-touch');
      fastclick['attach'](document.body);
    }
  }

  /**
   * Sets custom property for viewport height that updates 'vh' calculation due
   * to iOS Safari behavior where chrome appears and disappears when scrolling.
   */
  private viewportHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  }

  /**
   * Initializes Google Analytics tracking.
   */
  private googleAnalytics() {
    if (process.env.NODE_ENV === 'production') {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*(new Date() as any);a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      (window as any).ga('create', process.env.GA_ID, 'auto');
      (window as any).ga('send', 'pageview');
    }
  }
}
