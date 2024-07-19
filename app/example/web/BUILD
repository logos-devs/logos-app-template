load("@aspect_rules_ts//ts:defs.bzl", "ts_project")

ts_project(
    name = "web",
    srcs = glob(["**/*.ts"]) + [
        #"@logos//dev/logos/stack/aws:cognito_public_host_map",
    ],
    composite = True,
    declaration = True,
    resolve_json_module = True,
    source_map = True,
    transpiler = "tsc",
    tsconfig = "//:tsconfig",
    visibility = ["//visibility:public"],
    deps = [
        "//:node_modules/@types/node",
        "//:node_modules/reflect-metadata",
        "//:node_modules/inversify",
        "//:node_modules/@adobe/lit-mobx",
        #"//app/auth/proto:web",
        # TODO : remove this and move the login-complete.ts to the auth app
        #"@logos//app/auth/web",
        "//app/example/proto:grpc_web",
        "//app/example/storage:grpc_web",
        #"@logos//dev/logos/service/client/web/module",
        #"@logos//dev/logos/service/client/web/storage",
    ],
)
