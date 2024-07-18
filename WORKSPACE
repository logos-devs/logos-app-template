workspace(name = "logos-app-template")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive", "http_file")

local_repository(
    name = "logos",
    path = "/home/trinque/src/logos"
)

# rules_python
#http_archive(
#    name = "rules_python",
#    sha256 = "9acc0944c94adb23fba1c9988b48768b1bacc6583b52a2586895c5b7491e2e31",
#    strip_prefix = "rules_python-0.27.0",
#    url = "https://github.com/bazelbuild/rules_python/releases/download/0.27.0/rules_python-0.27.0.tar.gz",
#)
#
#load("@rules_python//python:repositories.bzl", "py_repositories")
#
#py_repositories()
#
#load("@rules_python//python:pip.bzl", "pip_parse")
#
#pip_parse(
#    name = "pip_deps",
#    requirements_lock = "//vendor/python:requirements_lock.txt",
#)
#
#load("@pip_deps//:requirements.bzl", "install_deps")
#
#install_deps()
