package app.example.module;

import app.example.service.ExampleStorageService;
import app.example.service.FrontendService;
import app.example.storage.example_app.ExampleStorageServiceGrpc;
import dev.logos.app.AppModule;
import dev.logos.app.register.registerModule;


//# I think using a markdown-based interaction model might be more natural for LLMs than control of a terminal, or perhaps
//# one or the other will be used depending on context. the markdown-esque mode is likely best for human - LLM interaction, or even
//# LLM - LLM interaction, while the terminal mode is best for solitary LLM work.
//
//        # llm should be able to pin arbitrary information to the top of the chat scroll. the beginning shall contain
//        # pinned information, and the rest of the chat scroll shall contain the chat history.
//
//        # user and llm should be able to have subthreads that can be popped into and out of context by both parties. they might
//        # for example be jamming on a file, and then they don't need that whole interaction to be in the main chat scroll.
//
//        # all chat history is saved and stored in pg_vector, and can be retrieved by the llm

@registerModule
public class ExampleModule extends AppModule {
    @Override
    protected void configure() {
        services(FrontendService.class, ExampleStorageService.class);
        clients(ExampleStorageServiceGrpc::newFutureStub);
    }
}
