package app.example.module;

import app.example.service.ExampleStorageService;
import app.example.service.FrontendService;
import app.example.storage.example_app.ExampleStorageServiceGrpc;
import app.example.storage.example_app.ExampleStorageServiceGrpc.ExampleStorageServiceFutureStub;
import com.google.inject.Provides;
import dev.logos.app.App;
import dev.logos.app.AppModule;
import dev.logos.app.register.registerModule;
import io.grpc.ManagedChannel;


@registerModule
public class ExampleModule extends AppModule {
    @Provides
    public App provideApp() {
        return App.builder()
                  .name("Logos Examples")
                  .domain("example.logos.dev")
                  .build();
    }

    @Override
    protected void configure() {
        addService(FrontendService.class);
        addService(ExampleStorageService.class);
    }

    @Provides
    public ExampleStorageServiceFutureStub provideExampleStorageServiceStub(ManagedChannel managedChannel) {
        return ExampleStorageServiceFutureStub.newStub(
            (channel, callOptions) ->
                ExampleStorageServiceGrpc.newFutureStub(managedChannel), managedChannel);
    }
}
