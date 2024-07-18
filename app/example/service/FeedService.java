package app.example.service;

import app.example.proto.feed.Feed;
import app.example.proto.feed.FeedServiceGrpc.FeedServiceImplBase;
import app.example.proto.feed.GetFeedRequest;
import app.example.proto.feed.GetFeedResponse;
import app.example.proto.feed.Source;
import app.example.storage.example.ExampleStorageServiceGrpc.ExampleStorageServiceFutureStub;
import app.example.storage.example.ListExampleRequest;
import com.google.inject.Inject;
import dev.logos.service.Service;
import dev.logos.user.User;
import io.grpc.stub.StreamObserver;

import java.util.concurrent.ExecutionException;

public class FeedService extends FeedServiceImplBase implements Service {
    private final ExampleStorageServiceFutureStub exampleStorageService;

    @Inject
    public FeedService(
        SourceRssStorageServiceFutureStub sourceRssStorageService,
        ExampleStorageServiceFutureStub exampleStorageService
    ) {
        this.sourceRssStorageService = sourceRssStorageService;
        this.exampleStorageService = exampleStorageService;
    }

    @Override
    public <Req> boolean allow(Req request, User user) {
        return request instanceof GetFeedRequest;
    }

    @Override
    public void getFeed(
        GetFeedRequest request,
        StreamObserver<GetFeedResponse> responseObserver
    ) {
        try {
            responseObserver.onNext(
                GetFeedResponse.newBuilder().setFeed(
                    Feed.newBuilder()
                        .addAllSource(
                            sourceRssStorageService
                                .list(ListSourceRssRequest.newBuilder().build())
                                .get()
                                .getResultsList()
                                .stream()
                                .map(sourceRss ->
                                         Source
                                             .newBuilder()
                                             .setId(sourceRss.getId())
                                             .setName(sourceRss.getName())
                                             .setIcon(sourceRss.getFaviconUrl())
                                             .build()
                                ).toList())
                        .addAllExample(
                            exampleStorageService
                                .list(ListExampleRequest.newBuilder().build())
                                .get()
                                .getResultsList())
                        .build()).build());
            responseObserver.onCompleted();

        } catch (InterruptedException | ExecutionException err) {
            responseObserver.onError(err);
        }
    }
}
