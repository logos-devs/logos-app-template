import terser from '@rollup/plugin-terser';
import css from "rollup-plugin-import-css";
import commonjs from '@rollup/plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';
import json from '@rollup/plugin-json';
import html from '@rollup/plugin-html';
import replace from '@rollup/plugin-replace';
import nodeResolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps2';
import {typescriptPaths} from 'rollup-plugin-typescript-paths';
import execute from "rollup-plugin-shell";


const allowedWarnings = {
    'THIS_IS_UNDEFINED': [
        /.*/
    ],
    'CIRCULAR_DEPENDENCY': [
        /\/inversify@6.0.2\//,
    ],
    'EVAL': [
        /\/google-libphonenumber@3.2.34\//,
        /\/google-protobuf@3.21.2\//,
    ]
};

export default {
    plugins: [
        commonjs(),
        css(),
        nodeResolve({
            browser: true,
            extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        }),
        includePaths({
            paths: ["./"],
        }),
        replace({
            preventAssignment: true,
            values: {
                'process.env.NODE_ENV': JSON.stringify('production')
            }
        }),
        terser(),
        typescriptPaths(),
        json(),
        sourcemaps(),
        html({
            title: "logos",
            publicPath: "/"
        }),
        execute({
            hook: "buildStart",
            commands: [
                // removes trees coming from external bazel workspaces
                "rm -rf external",
            ],
            sync: true
        }),
    ],
    output: {
        format: 'es',
        sourcemap: true,
    },
    onwarn(warning, warn) {
        const allowed = allowedWarnings[warning.code];

        if (allowed && (warning.loc === undefined || allowed.some((regex) => regex.test(warning.loc.file)))) {
            warn(warning);
            return;
        }
        if (warning.loc) {
            console.warn(warning.loc.file);
        }
        throw new Error(warning.code + ' : ' + warning.message);
    }
};