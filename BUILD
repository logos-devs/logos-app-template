load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")

npm_link_all_packages(name = "node_modules")

exports_files(["tsconfig.json"])

copy_to_bin(
    name = "tsconfig",
    srcs = ["tsconfig.json"],
    visibility = [
        "//app/example:__subpackages__",
    ],
)
