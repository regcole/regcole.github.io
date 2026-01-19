import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('sidebar-nav')
export class SidebarNav extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
      <aside class="hidden lg:flex fixed left-0 top-0 h-full w-32 bg-base-300 flex-col">
         <img src="/images/blue-beetle.jpeg" class="w-full">
         <ul class="menu menu-vertical w-full p-2 gap-1">
            <li>
                <a href="#" class="flex flex-col items-center gap-1 py-4">
                    <i class="fa fa-home text-3xl"></i>
                    <span class="text-xs">HOME</span>
                </a>
            </li>
            <li>
                <a href="#about" class="flex flex-col items-center gap-1 py-4">
                    <i class="fa fa-user text-3xl"></i>
                    <span class="text-xs">ABOUT</span>
                </a>
            </li>
            <li>
                <a href="#contact" class="flex flex-col items-center gap-1 py-4">
                    <i class="fa fa-envelope text-3xl"></i>
                    <span class="text-xs">CONTACT</span>
                </a>
            </li>
         </ul>
      </aside>
    `;
    }
}
