import { RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import terser from '@rollup/plugin-terser';
import copy from "rollup-plugin-copy";
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

const external = ["solidjs"];

const config: RollupOptions[] = [
  {
    input: 'src/solid/index.ts',
    treeshake: false,
    output: [
      {
        file: `dist/solid/index.mjs`,
        format: 'es',
        sourcemap: false,
      },
      {
        file: `dist/solid/index.js`,
        format: 'cjs',
        sourcemap: false,
      }
    ],
    external: (name) => external.includes(name),
    plugins: [typescriptPaths(), esbuild(), terser()]
  },
  {
    input: 'src/solid/index.ts',
    external: (name) => external.includes(name),
    plugins: [typescriptPaths(), dts(), copy({
      targets: [
        { src: "LICENSE", dest: "dist" },
        { src: "README.md", dest: "dist" },
        { src: "src/solid/package.json", dest: "dist", rename: "solid/package.json" },
        { src: "package.npm.json", dest: "dist", rename: "package.json" }
      ]
    })
    ],
    output: {
      file: `dist/solid/index.d.ts`,
      format: 'es',
    },
  }
]

export default config;