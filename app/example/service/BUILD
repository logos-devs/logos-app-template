load("@logos//bzl:defs.bzl", "service")

service(
    name = "service",
    srcs = [
        "ExampleStorageService.java",
        "FrontendService.java",
    ],
    visibility = [
        "//app/example/module:__subpackages__",
    ],
    deps = [
        "//app/example/proto:grpc_java",
        "//app/example/proto:proto_java",
        "//app/example/storage:java_grpc",
        "//app/example/storage:java_proto",
        "//app/example/storage:java_storage_service",
    ],
)
