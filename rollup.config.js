import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'packages/core/src/index.ts',
    output: {
      file: 'packages/core/dist/index.js',
      format: 'es',
      name: '@refract/core'
    },
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            declarationDir: 'packages/core/dist/.dts'
          }
        }
      }),
      resolve({
        // pass custom options to the resolve plugin
        customResolveOptions: {
          moduleDirectories: [
            'node_modules',
            'packages/core/node_modules',
            'packages/docs/node_modules'
          ]
        }
      }),
      babel({ babelHelpers: 'bundled' }),
      terser()
    ],
    external: ['lodash', 'tinycolor2', 'styled-components', 'react']
  },
  {
    input: 'packages/core/dist/.dts/packages/core/src/index.d.ts',
    plugins: [dts()],
    output: { file: 'packages/core/dist/index.d.ts', format: 'es' }
  }
];
