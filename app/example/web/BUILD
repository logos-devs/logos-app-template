load("@logos//bzl:defs.bzl", "web")

web(
    name = "web",
    srcs = [
        "components/example-app.ts",
        "index.ts",
        "module/example-module.ts",
    ],
    # TODO move these inside the macro
    tsconfig = "//:tsconfig",
    deps = [
        "//:node_modules/@adobe/lit-mobx",
        "//:node_modules/@logos/app-auth-cognito",
        "//:node_modules/@logos/web",
        "//:node_modules/@spectrum-web-components/action-menu",
        "//:node_modules/@spectrum-web-components/button",
        "//:node_modules/@spectrum-web-components/card",
        "//:node_modules/@spectrum-web-components/icons-workflow",
        "//:node_modules/@spectrum-web-components/menu",
        "//:node_modules/@spectrum-web-components/overlay",
        "//:node_modules/@spectrum-web-components/styles",
        "//:node_modules/@spectrum-web-components/theme",
        "//:node_modules/@spectrum-web-components/top-nav",
        "//:node_modules/@types/node",
        "//:node_modules/grpc-web",
        "//:node_modules/inversify",
        "//:node_modules/inversify-inject-decorators",
        "//:node_modules/lit",
        "//:node_modules/lit-html",
        "//:node_modules/mobx",
        "//:node_modules/path-to-regexp",
        "//:node_modules/reflect-metadata",
        "//app/example/proto:grpc_web",
        "//app/example/storage:grpc_web",
    ],
)
