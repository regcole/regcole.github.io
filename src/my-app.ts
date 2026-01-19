import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './index.css';
import './sidebar-nav.js';
import './hero-header.js';
import './about-section.js';
import './contact-section.js';
import './app-footer.js';

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  createRenderRoot() {
    return this; // Disable shadow DOM to use global Tailwind styles
  }

  render() {
    return html`
      <div class="bg-base-100 text-base-content min-h-screen">
        <sidebar-nav></sidebar-nav>
        
        <!-- Navbar on small screens -->
        <div class="navbar bg-base-300 lg:hidden fixed top-0 w-full z-10">
            <div class="navbar-center flex-1">
                <a href="#" class="btn btn-ghost btn-sm">HOME</a>
                <a href="#about" class="btn btn-ghost btn-sm">ABOUT</a>
                <a href="#contact" class="btn btn-ghost btn-sm">CONTACT</a>
            </div>
        </div>

        <div class="lg:ml-32 pt-16 lg:pt-0">
            <hero-header></hero-header>
            <about-section></about-section>
            <contact-section></contact-section>
            <app-footer></app-footer>
        </div>
      </div>
    `;
  }
}
