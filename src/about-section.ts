import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-section')
export class AboutSection extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
    <div class="max-w-4xl mx-auto px-4 py-16 text-gray-400" id="about">
        <h2 class="text-3xl font-bold text-gray-300 mb-4">About Me</h2>
        <div class="divider w-48"></div>
        <p class="mb-8 text-justify">
            I am an empathetic solution and experience builder and architect. I work to shape technology that is meant to work with actual people. The works I deliver are artifacts that either empower people to move their life in beneficial directions, or work/live in better ways.
        </p>
        <h3 class="text-2xl font-bold text-gray-300 py-4">My Skills</h3>
        <div class="space-y-4">
            <div>
                <p class="tracking-widest mb-2">Learning New Things</p>
                <progress class="progress progress-primary w-full" value="100" max="100"></progress>
            </div>
            <div>
                <p class="tracking-widest mb-2">Java</p>
                <progress class="progress progress-primary w-full" value="98" max="100"></progress>
            </div>
            <div>
                <p class="tracking-widest mb-2">JavaScript (React, Lit, AngularJS, Webcomponents, Node.js, all the Front-end things)</p>
                <progress class="progress progress-primary w-full" value="98" max="100"></progress>
            </div>
            <div>
                <p class="tracking-widest mb-2">Web Applications</p>
                <progress class="progress progress-primary w-full" value="95" max="100"></progress>
            </div>
            <div>
                <p class="tracking-widest mb-2">Spring</p>
                <progress class="progress progress-primary w-full" value="91" max="100"></progress>
            </div>
        </div>
    </div>
    `;
    }
}
