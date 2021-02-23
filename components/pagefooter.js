class PageFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    <div>
      <span>Powered by A.</span>
    </div>
  </footer>`;
  }
}

customElements.define("pagefooter-component", PageFooter);
