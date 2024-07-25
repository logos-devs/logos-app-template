import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

function getRouteHost(hostname: string) {
    return hostname.split('.').slice(-2).join('.');
}

@customElement("base-router")
export class BaseRouter extends LitElement {
    // language=CSS
    static styles = css`
        :host {
            height: 100%;
            display: block;
        }
    `;

    render() {
        return html`
            root widget
        `;
    }
}
