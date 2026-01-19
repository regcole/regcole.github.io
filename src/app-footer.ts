import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class AppFooter extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
    <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav class="flex gap-4">
            <a class="opacity-70 hover:opacity-100 transition-opacity" href="https://github.com/regcole" target="_blank">
                <img src="/images/github.png" width="50" alt="GitHub Logo" class="w-12 h-12">
            </a>
            <a class="opacity-70 hover:opacity-100 transition-opacity" href="https://www.linkedin.com/in/reginald-cole-14204a59/" target="_blank">
                <img src="/images/linkedin.png" width="50" alt="LinkedIn Logo" class="w-12 h-12">
            </a>
            <a class="opacity-70 hover:opacity-100 transition-opacity" href="https://stackoverflow.com/users/2438574/reggie-cole?tab=profile" target="_blank">
                <img src="/images/stackoverflow.png" width="50" alt="Stackoverflow Logo" class="w-12 h-12">
            </a>
        </nav>
    </footer>
    `;
    }
}
