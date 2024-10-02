load("@logos//dev/logos/app:defs.bzl", "app")
load("@logos//dev/logos/stack/aws:aws.bzl", "aws")

aws(
    name = "aws",
    visibility = ["//visibility:public"],
    deps = [
        "@logos-app-auth-cognito//app/auth/cognito/module",
    ],
)

app(
    name = "example",
    domain = "example.logos.dev",
    # remove rpc and web and add module. make the module provide the rollup of the web assets
    # the module entrypoint locally can be the dev server for both rpcs and webstuff
    rpc = "//app/example/module:module_deploy.jar",
    web = "//app/example/web",
)
