import {FeedServicePromiseClient} from "app/example/proto/feed_grpc_web_pb.js";
import {AppModule, registerModule} from "@logos/web/dev/logos/web/module/app-module";

// import {ExampleApp} from "../components/example-app";


@registerModule
export class ExampleModule extends AppModule {
    override configure() {
        this.addClient(FeedServicePromiseClient);
        //this.components(ExampleApp);
    }
}
