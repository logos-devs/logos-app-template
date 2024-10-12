load("@logos//bzl:defs.bzl", "java_grpc_library", "js_grpc_client", "schema_export", "schema_proto_src", "storage_service")

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
    visibility = ["//app/example:__subpackages__"],
)

java_proto_library(
    name = "java_proto",
    visibility = ["//app/example:__subpackages__"],
    deps = [":proto"],
)

java_grpc_library(
    name = "java_grpc",
    srcs = [":proto"],
    visibility = [
        "//app/example:__subpackages__",
    ],
    deps = [":java_proto"],
)

js_grpc_client(
    name = "grpc_web",
    proto = ":proto",
    visibility = ["//app/example:__subpackages__"],
)

storage_service(
    name = "java_storage_service",
    schema_export = ":schema_export",
    tables = TABLES,
    visibility = ["//app/example:__subpackages__"],
    deps = [
        ":java_grpc",
        ":java_proto",
    ],
)
