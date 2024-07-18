java_library(
    name = "module",
    srcs = ["ExampleModule.java"],
    plugins = ["@logos//dev/logos/app/register:module"],
    deps = [
        "//app/example/service",
        "//app/example/storage",
        "@logos//dev/logos/app",
        "@logos//dev/logos/app/register:module_library",
        "@maven//:com_google_inject_guice",
    ],
)
