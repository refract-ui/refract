import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import corePkg from './packages/core/package.json';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'packages/core/index.ts',
    output: [
      {
        file: `packages/core/${corePkg.module}`,
        format: 'es',
        name: '@refract/core'
      },
      {
        file: `packages/core/${corePkg.main}`,
        format: 'cjs',
        name: '@refract/core'
      }
    ],
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
    input: 'packages/core/dist/.dts/packages/core/index.d.ts',
    plugins: [dts()],
    output: { file: 'packages/core/dist/index.d.ts', format: 'es' }
  }
];
