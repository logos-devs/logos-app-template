create or replace function migrations.apply_example_app_00002_table_example_app_example() returns void as
$mig$
begin
    create table example_app.example
    (
        id uuid primary key default uuid_generate_v4(),
        name text not null
    );

    grant select, insert, update, delete on example_app.example to storage;

    create or replace function tests.role_storage_can_select_from_example_app_example() returns void as
    $$
    begin
        set role to storage;
        perform from example_app.example limit 0;
    end;
    $$ language plpgsql;
end;
$mig$ language plpgsql;


create or replace function migrations.revert_example_app_00002_table_example_app_example() returns void as
$$
begin
    drop table example_app.example;
end;
$$ language plpgsql;

select
from migrations.apply('example_app',
                      2,
                      'table_example_app_example',
                      'Create the example_app.example table.');
