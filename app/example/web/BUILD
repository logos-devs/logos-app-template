load("@logos//bzl:ts.bzl", "ts_library")

ts_library(
    name = "web",
    srcs = glob(["**/*.ts"]) + [
        #"@logos//dev/logos/stack/aws:cognito_public_host_map",
    ],
    visibility = ["//dev/logos/service/client/web:__pkg__"],
    deps = [
        "@logos//:node_modules/inversify",
        "@logos//:node_modules/@adobe/lit-mobx",
        "@logos//app/auth/proto:web",
        # TODO : remove this and move the login-complete.ts to the auth app
        "@logos//app/auth/web",
        "//app/example/proto:grpc_web",
        "//app/example/storage:grpc_web",
        "@logos//dev/logos/service/client/web/module",
        "@logos//dev/logos/service/client/web/storage",
    ],
)
