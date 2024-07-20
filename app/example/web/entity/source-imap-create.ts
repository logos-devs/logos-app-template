import {ExampleStorageServicePromiseClient} from "app/example/storage/example_grpc_web_pb.js";
import {
    CreateExampleRequest,
    CreateExampleResponse,
    Example
} from "app/example/storage/example_pb.js";
import {lazyInject} from "dev/logos/service/client/web/module/app-module";
import {CreateEntity} from "dev/logos/service/client/web/storage";
import {html} from "lit";
import {customElement} from "lit/decorators.js";

import "@material/web/textfield/filled-text-field";


@customElement('example-create')
export class ExampleCreate extends CreateEntity<
    Example,
    ExampleStorageServicePromiseClient,
    CreateExampleRequest,
    CreateExampleResponse
> {
    @lazyInject(ExampleStorageServicePromiseClient) protected override serviceClient: ExampleStorageServicePromiseClient;
    protected override createRequestClass = CreateExampleRequest;
    protected override entityClass = Example;

    override renderFields() {
        return html`
            <md-filled-text-field name="setAddress"
                                  label="Address"></md-filled-text-field>
        `;
    }
}
