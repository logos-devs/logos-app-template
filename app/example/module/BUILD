java_binary(
    name = "module",
    srcs = ["ExampleModule.java"],
    create_executable = False,
    plugins = ["@logos//dev/logos/app/register:module"],
    visibility = ["//app/example:__pkg__"],
    deps = [
        "//app/example/service",
        "//app/example/storage:java_grpc",
        "//app/example/storage:java_storage_service",
        "@io_grpc_grpc_java//api",
        "@logos//dev/logos/app",
        "@logos//dev/logos/app/register:module_library",
        "@maven_logos//:com_google_inject_guice",
    ],
)
