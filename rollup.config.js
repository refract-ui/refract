import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'packages/core/src/index.ts',
  output: {
    dir: 'packages/core/dist',
    format: 'umd',
    name: '@refract/core'
  },
  plugins: [
    typescript(),
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
};
