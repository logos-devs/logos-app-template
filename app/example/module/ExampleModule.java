package app.example.module;

import app.example.service.ExampleStorageService;
import app.example.service.FrontendService;
import app.example.storage.example_app.ExampleStorageServiceGrpc;
import dev.logos.app.AppModule;
import dev.logos.app.register.registerModule;

@registerModule
public class ExampleModule extends AppModule {
    @Override
    protected void configure() {
        services(FrontendService.class, ExampleStorageService.class);
        clients(ExampleStorageServiceGrpc::newFutureStub);
    }
}
