load("@aspect_rules_js//js:defs.bzl", "js_run_devserver")
load("@aspect_rules_rollup//rollup:defs.bzl", "rollup")
load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@npm//:@web/dev-server/package_json.bzl", wds = "bin")

NPM_PACKAGES = [
    "//:node_modules/@adobe/lit-mobx",
    "//:node_modules/@material/web",
    "//:node_modules/@spectrum-web-components/action-menu",
    "//:node_modules/@spectrum-web-components/card",
    "//:node_modules/@spectrum-web-components/icon",
    "//:node_modules/@spectrum-web-components/icons-workflow",
    "//:node_modules/@spectrum-web-components/styles",
    "//:node_modules/@spectrum-web-components/overlay",
    "//:node_modules/@spectrum-web-components/popover",
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

ts_project(
    name = "web_library",
    srcs = [
        "components/example-app.ts",
        "index.ts",
        "module/example-module.ts",
    ],
    composite = True,
    declaration = True,
    resolve_json_module = True,
    source_map = True,
    transpiler = "tsc",
    tsconfig = "//:tsconfig",
    deps = NPM_PACKAGES + [
        "//app/example/proto:grpc_web",
        "//app/example/storage:grpc_web",
        "@logos-app-auth-cognito//app/auth/cognito/web",
        "@logos//dev/logos/web",
    ],
)

rollup(
    name = "web",
    srcs = [
        ":web_library",
        "//:tsconfig",
    ],
    config_file = ":rollup.config.mjs",
    entry_point = "index.js",
    node_modules = "//:node_modules",
    output_dir = True,
    sourcemap = "inline",
    visibility = ["//visibility:public"],
    deps = NPM_PACKAGES + [
        "//:node_modules/@rollup/plugin-commonjs",
        "//:node_modules/@rollup/plugin-html",
        "//:node_modules/@rollup/plugin-json",
        "//:node_modules/@rollup/plugin-node-resolve",
        "//:node_modules/@rollup/plugin-replace",
        "//:node_modules/@rollup/plugin-terser",
        "//:node_modules/rollup-plugin-import-css",
        "//:node_modules/rollup-plugin-includepaths",
        "//:node_modules/rollup-plugin-sourcemaps2",
        "//:node_modules/rollup-plugin-typescript-paths",
        "//:node_modules/typescript",
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
