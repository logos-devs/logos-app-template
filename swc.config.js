{
  "sourceMaps": true,
  "module": {
    "type": "es6",
    "strictMode": true,
    "noInterop": false
  },
  "jsc": {
    "externalHelpers": false,
    "target": "es2022",
    "parser": {
      "syntax": "typescript",
      "tsx": true,
      "decorators": true,
      "dynamicImport": true
    },
    "transform": {
      "legacyDecorator": true,
      "decoratorMetadata": true,
      "react": {
        "throwIfNamespace": false,
        "useBuiltins": false,
        "pragma": "React.createElement",
        "pragmaFrag": "React.Fragment",
        "importSource": "react"
      }
    },
    "keepClassNames": true,
    "paths": {
      "app/*_pb": [
        "bazel-bin/app/*_pb",
        "app/*_pb"
      ],
      "app/*_pb.js": [
        "bazel-bin/app/*_pb.js",
        "app/*_pb.js"
      ],
      "app/*_pb.d.ts": [
        "bazel-bin/app/*_pb.d.ts",
        "app/*_pb.d.ts"
      ],
      "dev/*_pb": [
        "bazel-bin/dev/*_pb",
        "dev/*_pb"
      ],
      "dev/*_pb.js": [
        "bazel-bin/dev/*_pb.js",
        "dev/*_pb.js"
      ],
      "dev/*_pb.d.ts": [
        "bazel-bin/dev/*_pb.d.ts",
        "dev/*_pb.d.ts"
      ]
    },
    "baseUrl": "./"
  }
}