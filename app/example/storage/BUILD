load("@logos//dev/logos/service/storage/pg/exporter:schema_export.bzl", "schema_export", "storage_grpc_web_library", "storage_java_proto_library")

schema_export(
    name = "schema_export",
    migrations = ["//app/example/storage/migrations"],
    tables = {
        "example_app": [
            "example",
        ],
    },
    visibility = ["//app/example:__subpackages__"],
)

storage_java_proto_library(
    name = "storage",
    srcs = [":schema_export"],
    visibility = ["//app/example:__subpackages__"],
)

storage_grpc_web_library(
    name = "grpc_web",
    srcs = [":schema_export"],
    visibility = ["//app/example:__subpackages__"],
)
