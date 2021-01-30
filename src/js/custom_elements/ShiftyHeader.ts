/**
 * Custom element that vertically shifts a fixed header in and out of the
 * viewport based on scroll direction.
 */
export class ShiftyHeader extends HTMLElement {
  private height: number;
  private resizeListener: any;
  private scrollChange: number;
  private scrollListener: any;
  private shift: number;
  private yScroll: number;
  private yScrollLast: number;

  constructor() {
    super();
    this.shift = 0;
    this.yScrollLast = 0;
    this.resizeListener = this.getHeight.bind(this);
    this.scrollListener = this.applyShift.bind(this);
    window.addEventListener('resize', this.resizeListener);
    document.addEventListener('scroll', this.scrollListener);
  }

  connectedCallback(): void {
    this.getHeight();
    this.applyShift();
  }

  disconnectedCallback(): void {
    window.removeEventListener('resize', this.resizeListener);
    document.removeEventListener('scroll', this.scrollListener);
  }

  private getHeight(): void {
    this.height = this.offsetHeight;
  }

  private applyShift(): void {
    // Get current scroll position.
    this.yScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Update shift value based on change in scroll position if it's within
    // height bounds.
    this.scrollChange = this.yScroll - this.yScrollLast;
    if (this.shift > 0 || this.shift < this.height) {
      this.shift += this.scrollChange;
    }

    // Reset shift value if it exceeds height bounds.
    if (this.shift > this.height) {
      this.shift = this.height;
    } else if (this.shift < 0) {
      this.shift = 0;
    }

    // Set CSS values for related elements to reference.
    document.documentElement.style.setProperty('--sticky-shift', `-${this.shift / 16}rem`);

    // Update yScrollLast for determining scroll change on next tick.
    this.yScrollLast = (this.yScroll <= 0) ? 0 : this.yScroll;
  }
}
