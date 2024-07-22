java_library(
    name = "module",
    srcs = ["ExampleModule.java"],
    plugins = ["@logos//dev/logos/app/register:module"],
    deps = [
        "//app/example/service",
        "//app/example/storage:java_storage_service",
        "//app/example/storage:java_grpc",
        "@io_grpc_grpc_java//api",
        "@logos//dev/logos/app",
        "@logos//dev/logos/app/register:module_library",
        "@maven//:com_google_inject_guice",
    ],
)
