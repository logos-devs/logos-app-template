package app.example.service;

import app.example.storage.example_app.CreateExampleRequest;
import app.example.storage.example_app.Example;
import app.example.storage.example_app.ExampleStorageServiceBase;
import app.example.storage.example_app.ListExampleRequest;
import dev.logos.service.storage.pg.Select;
import dev.logos.service.storage.validator.Validator;
import dev.logos.user.User;

import static app.example.storage.ExampleApp.Example.*;
import static app.example.storage.ExampleApp.example;
import static dev.logos.service.storage.pg.Select.select;
import static dev.logos.service.storage.pg.SortOrder.ASC;


public class ExampleStorageService extends ExampleStorageServiceBase {
    @Override
    public <Req> boolean allow(Req request, User user) {
        return request instanceof ListExampleRequest || user.isAuthenticated();
    }

    @Override
    public <Req> void validate(Req request, Validator validator) {
        if (request instanceof CreateExampleRequest) {
            Example example = ((CreateExampleRequest)request).getEntity();
            validator.require(!example.getName().isBlank(), "name is required");
        }
    }

    @Override
    public Select.Builder query(ListExampleRequest request) {
        return select(id, name)
                .from(example)
                .orderBy(name, ASC)
                .limit(50L)
                .offset(request.getOffset());
    }
}