import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { babel } from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import corePkg from './packages/core/package.json';
import { terser } from 'rollup-plugin-terser';
import mdx from '@mdx-js/rollup';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  // compile @refract/core
  {
    input: 'packages/core/src/index.ts',
    output: [
      {
        file: `packages/core/dist/index.esm.js`,
        format: 'es',
        name: '@refract/core'
      },
      {
        file: `packages/core/dist/index.cjs.js`,
        format: 'cjs',
        name: '@refract/core'
      }
    ],
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: './packages/docs/tsconfig.json',
        tsconfigOverride: {
          compilerOptions: {
            declarationDir: 'packages/core/dist/.dts',
            module: 'es2015'
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

  // compile @refract/core types
  {
    input: 'packages/core/dist/.dts/packages/core/index.d.ts',
    plugins: [dts()],
    output: { file: 'packages/core/dist/index.d.ts', format: 'es' }
  },

  // compile @refract/docs stories + helpers
  {
    input: [
      'packages/docs/src/index.ts',
      'packages/docs/src/preset/manager.ts',
      'packages/docs/src/preset/preview.ts',
      'packages/docs/src/preset/tool.tsx',
      'packages/docs/src/preset/decorators/withRefract.tsx',
      'packages/docs/src/stories/theme/borders/borders.stories.tsx',
      'packages/docs/src/stories/theme/breakpoints/breakpoints.stories.tsx',
      'packages/docs/src/stories/theme/colors/colors.stories.tsx',
      'packages/docs/src/stories/theme/colorShades/colorShades.stories.tsx',
      'packages/docs/src/stories/theme/darkColors/darkColors.stories.tsx',
      'packages/docs/src/stories/theme/globalStyles/globalStyles.stories.tsx',
      'packages/docs/src/stories/theme/spacing/spacing.stories.tsx',
      'packages/docs/src/stories/theme/subtleColors/subtleColors.stories.tsx',
      'packages/docs/src/stories/theme/themeColorOpacities/themeColorOpacities.stories.tsx',
      'packages/docs/src/stories/theme/themeColors/themeColors.stories.tsx',
      'packages/docs/src/stories/theme/themeColorShades/themeColorShades.stories.tsx'
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
      globals(),
      builtins(),
      json(),
      commonjs(),
      typescript({
        target: 'es2019',
        tsconfig: './packages/docs/tsconfig.json',
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'es2015'
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
      mdx(),
      babel({
        babelHelpers: 'bundled'
      }),
      terser()
    ],
    external: [
      '@babel',
      '@emotion',
      '@mdx-js',
      '@refract-ui/core',
      '@storybook',
      '@storybook/addons',
      '@storybook/addon-docs',
      '@storybook/addon-links',
      '@storybook/api',
      '@storybook/client-api',
      '@storybook/components',
      '@storybook/core-events',
      '@storybook/csf',
      '@storybook/react',
      '@storybook/store',
      '@storybook/theming',
      'core-js',
      'doctrine',
      'esutils',
      'faker',
      'global',
      'hoist-non-react-statics',
      'lodash',
      'react',
      'react/jsx-runtime',
      'react-dom',
      'react-flow-renderer',
      'react-scripts',
      'react-syntax-highlighter',
      'regenerator-runtime',
      'styled-components',
      'tinycolor2',
      'ts-dedent',
      'ts-enum-util',
      'util-deprecate'
    ]
  }
];
