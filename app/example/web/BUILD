load("@aspect_rules_js//js:defs.bzl", "js_run_devserver")
load("@aspect_rules_rollup//rollup:defs.bzl", "rollup")
load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@npm//:@web/dev-server/package_json.bzl", wds = "bin")

swc(
    name = "web_library",
    srcs = glob(["**/*.ts"]) + [
        "@logos//dev/logos/web:src",
    ],
    data = [
        "//:node_modules/@adobe/lit-mobx",
        "//:node_modules/@material/web",
        "//:node_modules/@types/node",
        "//:node_modules/grpc-web",
        "//:node_modules/inversify",
        "//:node_modules/inversify-inject-decorators",
        "//:node_modules/lit",
        "//:node_modules/lit-html",
        "//:node_modules/path-to-regexp",
        "//:node_modules/reflect-metadata",
        #"//app/auth/web",
        "//app/example/proto:grpc_web",
        "//app/example/storage:grpc_web",
        #"@logos//dev/logos/stack/aws:cognito_public_host_map",
    ],
    swcrc = "//:swc.config.js",
    visibility = ["//visibility:public"],
)

rollup(
    name = "web",
    config_file = ":rollup.config.mjs",
    entry_point = "index.js",
    node_modules = "//:node_modules",
    output_dir = True,
    sourcemap = "true",
    visibility = ["//dev/logos/service/client:__pkg__"],
    deps = [
        ":web_library",
        "//:node_modules",
    ],
)

wds.wds_binary(
    name = "wds_tool",
)

js_run_devserver(
    name = "dev",
    args = [
        "--watch",
        "--debug",
        "--root-dir",
        "$(location :web)",
        "--app-index",
        "$(location :web)/index.html",
        "--port",
        "8080",
        "--hostname",
        "0.0.0.0",
    ],
    data = [":web"],
    tags = [
        "ibazel_notify_changes",
    ],
    tool = ":wds_tool",
)
