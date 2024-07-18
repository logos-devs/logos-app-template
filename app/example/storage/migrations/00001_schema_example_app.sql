select
from migrations.project('example_app', 'example.app');


create or replace function migrations.apply_example_app_00001_schema_example_app() returns void as
$mig$
begin

    create schema example_app;
    grant usage on schema example_app to storage;

    create or replace function tests.role_storage_can_use_schema_example_app() returns void as
    $$
    select assert.true((select has_schema_privilege('storage'::regrole, 'public'::regnamespace, 'USAGE')),
                       'The storage role must be granted usage on schema example_app.');
    $$ language sql;
end;
$mig$ language plpgsql;


create or replace function migrations.revert_example_app_00001_schema_example_app() returns void as
$$
begin
    drop function tests.role_storage_can_use_schema_example_app();
    drop schema example_app cascade;

    delete from migrations.project where name = 'example_app';
end;
$$ language plpgsql;



select
from migrations.apply('example_app',
                      1,
                      'schema_example_app',
                      'Create the example_app schema.');
