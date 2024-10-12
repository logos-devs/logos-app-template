load("@logos//bzl:defs.bzl", "pg_migrate")

pg_migrate(
    name = "migrations",
    head = "00002_table_example_app_example.sql",
    migrations = glob(["*.sql"]),
    visibility = ["//app/example/storage:__pkg__"],
)
