import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
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
  },
  {
    input: [
      'packages/docs/src/index.ts',
      'packages/docs/src/preset/manager.ts',
      'packages/docs/src/preset/preview.ts',
      'packages/docs/src/preset/tool.tsx',
      'packages/docs/src/preset/decorators/withRefract.tsx'
    ],
    output: [
      /* {
        dir: 'packages/docs/dist/esm',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'packages/docs/src',
        exports: 'named'
      }, */
      // storybook only really wants to consume cjs
      {
        dir: 'packages/docs/dist',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'packages/docs/src',
        exports: 'named'
      }
    ],
    plugins: [
      typescript({
        target: 'es2019',
        useTsconfigDeclarationDir: true
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
    external: [
      '@refract-ui/core',
      '@storybook/addons',
      '@storybook/api',
      '@storybook/client-api',
      '@storybook/components',
      '@storybook/react',
      'lodash',
      'react',
      'styled-components',
      'tinycolor2'
    ]
  }
];
