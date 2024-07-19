load("@logos//dev/logos/service/storage/pg/exporter:schema_export.bzl", "schema_export", "schema_proto_src")  #"storage_grpc_web_library", "storage_java_proto_library")
load("@logos//bzl:proto.bzl", "js_grpc_client")

TABLES = {
    "example_app": [
        "example",
    ],
}

schema_export(
    name = "schema_export",
    migrations = ["//app/example/storage/migrations"],
    tables = TABLES,
    visibility = ["//app/example:__subpackages__"],
)

schema_proto_src(
    name = "schema_proto_src",
    schema_export = ":schema_export",
    tables = TABLES,
    visibility = ["//app/example:__subpackages__"],
)

proto_library(
    name = "proto",
    srcs = [":schema_proto_src"],
)

java_proto_library(
    name = "java_proto",
    visibility = ["//app/example:__subpackages__"],
    deps = [":proto"],
)

js_grpc_client(
    name = "grpc_web",
    proto = ":proto",
    visibility = ["//app/example:__subpackages__"],
)
