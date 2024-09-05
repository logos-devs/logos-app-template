import {SourceImapStorageServicePromiseClient} from "app/example/storage/example/source_imap_grpc_web_pb.js";
import {SourceRssStorageServicePromiseClient} from "app/example/storage/example/source_rss_grpc_web_pb.js";
import {FeedServicePromiseClient} from "app/example/proto/feed_grpc_web_pb.js";
import {AppModule, registerModule} from "dev/logos/service/client/web/module/app-module";


@registerModule
export class ExampleModule extends AppModule {
    override configure() {
        this.addClient(FeedServicePromiseClient);
        this.addClient(SourceImapStorageServicePromiseClient);
        this.addClient(SourceRssStorageServicePromiseClient);
    }
}