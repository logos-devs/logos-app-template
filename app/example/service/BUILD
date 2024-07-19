java_library(
    name = "service",
    srcs = [
        "ExampleStorageService.java",
        "FrontendService.java",
    ],
    visibility = [
        "//app/example/module:__subpackages__",
    ],
    deps = [
        "//app/example/proto:java_library",
        "//app/example/storage:java_storage_service",
        "@com_google_protobuf//:protobuf_java",
        "@io_grpc_grpc_java//api",
        "@io_grpc_grpc_java//stub",
        "@logos//app/auth/user",
        "@logos//dev/logos/service",
        "@logos//dev/logos/service/storage:storage_library",
        "@logos//dev/logos/service/storage/pg",
        "@logos//dev/logos/service/storage/validator",
        "@logos//dev/logos/user",
        "@maven//:com_google_inject_guice",
    ],
)
