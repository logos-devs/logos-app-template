import {css, html, LitElement, CSSResult, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";

import '@spectrum-web-components/styles/all-medium-light.css';
import '@spectrum-web-components/styles/typography.css';
import '@spectrum-web-components/theme/src/themes.js';
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/card/sp-card.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-arrow-up.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-arrow-down.js';
import '@spectrum-web-components/top-nav/sp-top-nav.js';
import '@spectrum-web-components/top-nav/sp-top-nav-item.js';
import {GetFeedRequest, GetFeedResponse} from "app/example/proto/feed_pb";
import {FeedServicePromiseClient} from "app/example/proto/feed_grpc_web_pb";
import {lazyInject} from "@logos/web/dev/logos/web/module/app-module";
import "@logos/app-auth-cognito/app/auth/cognito/web/components/profile-button";


@customElement("example-app")
export class ExampleApp extends LitElement {
    @lazyInject(FeedServicePromiseClient) private feedServiceClient: FeedServicePromiseClient;

    // language=CSS
    static styles: CSSResult = css`
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

        #title {
            margin-right: auto;
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        this.feedServiceClient.getFeed(new GetFeedRequest(), {}).then((response: GetFeedResponse) => {
            console.log(response);
        });
    }

    render(): TemplateResult {
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
            <sp-theme color="light" scale="medium">
                <sp-top-nav>
                    <sp-top-nav-item id="title">
                        Greatest Fictional, Fictional Works of All Time
                    </sp-top-nav-item>

                    <profile-button></profile-button>
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
