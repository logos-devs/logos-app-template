package app.example.service;

import app.example.proto.feed.Feed;
import app.example.proto.feed.FeedServiceGrpc.FeedServiceImplBase;
import app.example.proto.feed.GetFeedRequest;
import app.example.proto.feed.GetFeedResponse;
import app.example.storage.example_app.ExampleStorageServiceGrpc.ExampleStorageServiceFutureStub;
import app.example.storage.example_app.ListExampleRequest;
import com.google.inject.Inject;
import dev.logos.service.Service;
import dev.logos.user.User;
import io.grpc.stub.StreamObserver;

import java.util.concurrent.ExecutionException;

public class FrontendService extends FeedServiceImplBase implements Service {
    private final ExampleStorageServiceFutureStub exampleStorageService;

    @Inject
    public FrontendService(
        ExampleStorageServiceFutureStub exampleStorageService
    ) {
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
