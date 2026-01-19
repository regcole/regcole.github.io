import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('contact-section')
export class ContactSection extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
    <div class="max-w-4xl mx-auto px-4 py-16 text-gray-400" id="contact">
        <h2 class="text-3xl font-bold text-gray-300 mb-4">Contact Me</h2>
        <div class="divider w-48"></div>

        <div class="space-y-4 mb-8">
            <p class="flex items-center"><i class="fa fa-map-marker fa-fw text-white text-3xl mr-4 w-8 text-center"></i> Dallas, TX US</p>
            <p class="flex items-center"><i class="fa fa-phone fa-fw text-white text-3xl mr-4 w-8 text-center"></i> Phone: Slow down, we barely know each other</p>
            <p class="flex items-center"><i class="fa fa-envelope fa-fw text-white text-3xl mr-4 w-8 text-center"></i> Email: contact@reggiecole.com</p>
        </div>
        <p>Send me a message (or not, that's cool too)</p>
    </div>
    `;
    }
}
