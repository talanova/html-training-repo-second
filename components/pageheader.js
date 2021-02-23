class PageHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header page__header">
    <a href="./index.html">
      <img src="/media/img/return_button.png" alt="return to blog" />
    </a>
    <h1>Blog title</h1>
  </header>`;
  }
}

customElements.define("pageheader-component", PageHeader);
