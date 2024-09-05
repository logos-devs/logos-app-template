load("@aspect_rules_js//js:defs.bzl", "js_run_devserver")
load("@aspect_rules_rollup//rollup:defs.bzl", "rollup")
load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@npm//:@web/dev-server/package_json.bzl", wds = "bin")

NPM_PACKAGES = [
    "//:node_modules/@adobe/lit-mobx",
    "//:node_modules/@material/web",
    "//:node_modules/@spectrum-web-components/action-menu",
    "//:node_modules/@spectrum-web-components/card",
    "//:node_modules/@spectrum-web-components/icon",
    "//:node_modules/@spectrum-web-components/icons",
    "//:node_modules/@spectrum-web-components/icons-workflow",
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
    "//:node_modules/path-to-regexp",
    "//:node_modules/reflect-metadata",
]

swc(
    name = "web_library",
    srcs = glob(["**/*.ts"]) + [
        "@logos//dev/logos/web:src",
    ],
    data = NPM_PACKAGES + [
        #"//app/auth/web",
        "//app/example/proto:grpc_web",
        "//app/example/storage:grpc_web",
        #"@logos//dev/logos/stack/aws:cognito_public_host_map",
    ],
    swcrc = "//:swc.config.js",
)

rollup(
    name = "web",
    config_file = ":rollup.config.mjs",
    entry_point = "index.js",
    node_modules = "//:node_modules",
    output_dir = True,
    sourcemap = "true",
    visibility = ["//visibility:public"],
    deps = NPM_PACKAGES + [
        ":web_library",
        "//:node_modules/@rollup/plugin-commonjs",
        "//:node_modules/@rollup/plugin-html",
        "//:node_modules/@rollup/plugin-json",
        "//:node_modules/@rollup/plugin-node-resolve",
        "//:node_modules/@rollup/plugin-replace",
        "//:node_modules/@rollup/plugin-terser",
        "//:node_modules/rollup-plugin-import-css",
        "//:node_modules/rollup-plugin-includepaths",
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
