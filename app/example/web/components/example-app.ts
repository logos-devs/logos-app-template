import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import "./router-path";

import '@spectrum-web-components/action-menu/sp-action-menu.js';
import '@spectrum-web-components/card/sp-card.js';
import '@spectrum-web-components/icon/sp-icon.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-arrow-up.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-arrow-down.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-login.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-log-out.js';
import '@spectrum-web-components/top-nav/sp-top-nav.js';
import '@spectrum-web-components/top-nav/sp-top-nav-item.js';
import '@spectrum-web-components/overlay/sp-overlay.js';

// Client-side code

// Registration
async function register() {
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const publicKeyCredentialCreationOptions = {
        challenge: challenge,
        rp: {
            name: "Example",
            id: "example.logos.dev",
        },
        user: {
            id: crypto.getRandomValues(new Uint8Array(16)),
            name: "username",
            displayName: "User Name",
        },
        pubKeyCredParams: [{alg: -7, type: "public-key"}],
        timeout: 60000,
    };

    const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions
    });

    // Send credential to server for verification and storage
    // The server should extract and store the public key
}

// Authentication
async function authenticate() {
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const publicKeyCredentialRequestOptions = {
        challenge: challenge,
        rpId: "example.com",
        userVerification: "preferred",
        timeout: 60000,
    };

    const assertion = await navigator.credentials.get({
        publicKey: publicKeyCredentialRequestOptions
    });

    // Send assertion to server for verification
}

// Server-side code (pseudo-code)

function verifyRegistration(credential) {
    // Verify the credential
    // Extract the public key and user ID
    // Encode necessary info into the credential ID
    // Store the public key associated with the credential ID
}

function verifyAuthentication(assertion) {
    // Decode the credential ID to get necessary info
    // Retrieve the associated public key
    // Verify the assertion using the public key
}


function getRouteHost(hostname: string) {
    return hostname.split('.').slice(-2).join('.');
}

@customElement("example-app")
export class ExampleApp extends LitElement {
    // language=CSS
    static styles = css`
        :host, sp-theme {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        
        sp-top-nav {
            width: 100%;
        }
        
        sp-card {
            margin-top: 1em;
            width: 300px;
        }
    `;



    render() {
        const works = [
            {
                title: "The Theory and Practice of Oligarchical Collectivism"
            },
            {
                title: "The Hitchhiker's Guide to the Galaxy"
            },
            {
                title: "Necronomicon"
            },
            {
                title: "Tales of Beedle the Bard"
            },
            {
                title: "To Serve Man"
            },
            {
                title: "The Grasshopper Lies Heavy"
            },
            {
                title: "The Princess Bride"
            },
            {
                title: "Hamster Huey and the Gooey Kablooie"
            },
        ];

        return html`
            <sp-theme system="express" color="light" scale="medium">
                <sp-top-nav>
                    <sp-top-nav-item>
                        Greatest Fictional, Fictional Works of All Time
                    </sp-top-nav-item>

                    <sp-top-nav-item placement="bottom-end">
                        <sp-icon-login></sp-icon-login>
                    </sp-top-nav-item>
                </sp-top-nav>
                

                ${works.map(work => html`
                    <sp-card .heading=${work.title}>
                        <div slot="footer">
                            <sp-icon-arrow-up></sp-icon-arrow-up>
                            <sp-icon-arrow-down></sp-icon-arrow-down>
                        </div>
                    </sp-card>
                `)}
            </sp-theme>
        `;
    }
}
