enum FooterInfo {
  label = 'Ben Gauslin',
  title = 'Ben Gauslin’s Website',
  url = 'https://gauslin.com',
  yearStart = '2018',
};

class App {
  /**
   * Renders all elements into the DOM.
   */
  public init(): void {
    this.renderHeader_();
    this.renderClocks_();
    this.renderFooter_();
  }

  /**
   * Renders header element.
   */
  private renderHeader_(): void {
    const html = `\
      <header class="header">\
        <div class="header__frame">\
          <h1 class="site-name">\
            <digital-clock></digital-clock>\
          </h1>\
          <color-picker class="color-picker"></color-picker>\
          <app-theme class="themifier"></app-theme>\
        </div>\
      </header>\
    `;
    document.body.innerHTML += html.replace(/\s\s/g, '');
  }

  /**
   * Renders clock elements.
   */
  private renderClocks_(n: number = 9): void {
    let clocks = '';
    for (let i = 1; i <= n; i++) {
      clocks += '<analog-clock class="clock"></analog-clock>';
    }

    const html = `\
      <main class="clocks">\
        ${clocks}\
      </main>\
    `;

    document.body.innerHTML += html.replace(/\s\s/g, '');
  }

  /**
   * Renders a footer with a copyright notice and link.
   */
  private renderFooter_(): void {
    const { label, title, url, yearStart } = FooterInfo;
    const yearEnd = new Date().getFullYear().toString().substr(-2);

    const html = `\
      <footer class="footer">\
        <p class="copyright">\
          <span class="copyright__years">© ${yearStart}-${yearEnd}</span>\
          <a class="copyright__owner" \
              href="${url}" \
              title="${title} (opens in a new window)" \
              target="_blank" \
              rel="noopener">${label}</a>\
        </p>\
      </footer>\
    `;

    document.body.innerHTML += html.replace(/\s\s/g, '');
  }
}

export { App };
