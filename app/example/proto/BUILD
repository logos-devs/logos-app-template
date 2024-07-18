load("@logos//bzl:proto.bzl", "java_grpc_library", "java_proto_library", "js_grpc_client", "proto_library")

proto_library(
    name = "proto",
    srcs = ["feed.proto"],
    visibility = ["//app/example:__subpackages__"],
    deps = ["//app/example/storage:schema_export"],
)

java_proto_library(
    name = "proto_java",
    deps = [
        ":proto",
        "//app/example/storage",
    ],
)

java_grpc_library(
    name = "java_library",
    srcs = [":proto"],
    visibility = ["//app/example:__subpackages__"],
    deps = [":proto_java"],
)

js_grpc_client(
    name = "grpc_web",
    proto = ":proto",
    visibility = ["//app/example/web:__pkg__"],
    deps = ["//app/example/storage:schema_export"],
)
