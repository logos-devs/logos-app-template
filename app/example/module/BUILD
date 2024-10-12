load("@logos//bzl:defs.bzl", "module")

module(
    name = "module",
    srcs = ["ExampleModule.java"],
    main_class = "app.example.module.ExampleModule",
    resources = ["//app/example:aws_outputs"],
    visibility = ["//app/example:__pkg__"],
    deps = [
        "//app/example/service",
        "//app/example/storage:java_grpc",
        "//app/example/storage:java_storage_service",
        "@io_grpc_grpc_java//api",
        "@io_grpc_grpc_java//inprocess",
    ],
)
