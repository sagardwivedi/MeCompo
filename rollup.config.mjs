import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

import packageJson from "./package.json" assert {type: "json"};

export default [
    {
        input: "src/index.ts",
        output: [
            { file: packageJson.main, format: "cjs" },
            { file: packageJson.module, format: "esm" }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                plugins: [
                    tailwindcss(),
                    autoprefixer()
                ],
                extract: true,
                minimize: true
            })
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()]
    }
];
