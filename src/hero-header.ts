import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hero-header')
export class HeroHeader extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
    <div class="hero min-h-screen bg-base-200" id="home">
        <div class="hero-content text-center">
            <div class="max-w-4xl">
                <h1 class="text-6xl font-bold mb-4">Reggie Cole.</h1>
                <h6 class="text-xl mb-8">Sci-Fi & Comic Book Guy / <span class="badge badge-lg bg-white text-black">Software Architect</span> / Technology Enthusiast</h6>
                <img src="/images/reggie.jpg" alt="Reggie Cole" class="mx-auto max-w-full h-auto rounded-lg shadow-2xl" width="619" height="721">
            </div>
        </div>
    </div>
    `;
    }
}
