load("@aspect_rules_swc//swc:defs.bzl", "swc")

swc(
    name = "web",
    srcs = glob(["**/*.ts"]),
    swcrc = "//:swc.config.js",
    data = [
        "@logos//dev/logos/service/client/web/app",
        "//:node_modules/@types/node",
        "//:node_modules/reflect-metadata",
        "//:node_modules/inversify",
        "//:node_modules/@adobe/lit-mobx",
        #"//app/auth/proto:web",
        # TODO : remove this and move the login-complete.ts to the auth app
        #"@logos//app/auth/web",
        "//app/example/proto:grpc_web",
        "//app/example/storage:grpc_web",
        "//:node_modules/grpc-web",
        "//:node_modules/inversify-inject-decorators",
        "//:node_modules/@material/web",
        "//:node_modules/lit",
        "//:node_modules/lit-html",
        #"@logos//dev/logos/stack/aws:cognito_public_host_map",
    ],
    visibility = ["//visibility:public"],
)
