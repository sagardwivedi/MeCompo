import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'


import packageJson from "./package.json" assert {type: "json"}
import postcss from "postcss";

const tailwindConfig = require('./tailwind.config.js')

export default [
    {
        input: "src/index.ts",
        output: [
            { file: packageJson.main, format: "cjs" }, { file: packageJson.module, format: "esm" }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                extensions: ['.css', '.module.css'],
                plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
            }),
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()]
    }
]