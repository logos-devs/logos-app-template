load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_js//npm:defs.bzl", "npm_link_package")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")

npm_link_all_packages(name = "node_modules")

npm_link_package(
    name = "node_modules/@logos/app-auth-cognito",
    src = "@logos-app-auth-cognito//:npm",
)

npm_link_package(
    name = "node_modules/@logos/web",
    src = "@logos//:npm",
)

exports_files(["tsconfig.json"])

copy_to_bin(
    name = "tsconfig",
    srcs = ["tsconfig.json"],
    visibility = [
        "//app/example:__subpackages__",
    ],
)
