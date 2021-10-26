import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import corePkg from './packages/core/package.json';
import { terser } from 'rollup-plugin-terser';
import mdx from 'rollup-plugin-mdx';

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
      '@storybook/addon-links',
      '@storybook/api',
      '@storybook/client-api',
      '@storybook/components',
      '@storybook/react',
      'lodash',
      'lodash/map',
      'react',
      'react-flow-renderer',
      'styled-components',
      'tinycolor2'
    ]
  },
  {
    input: [
      // stories
      'packages/docs/src/stories/theme/borders/borders.stories.tsx',
      'packages/docs/src/stories/theme/breakpoints/breakpoints.stories.tsx',
      'packages/docs/src/stories/theme/colors/colors.stories.tsx',
      'packages/docs/src/stories/theme/colorShades/colorShades.stories.tsx',
      'packages/docs/src/stories/theme/darkColors/darkColors.stories.tsx',
      'packages/docs/src/stories/theme/spacing/spacing.stories.tsx',
      'packages/docs/src/stories/theme/subtleColors/subtleColors.stories.tsx',
      'packages/docs/src/stories/theme/theme/theme.stories.tsx',
      'packages/docs/src/stories/theme/themeColors/themeColors.stories.tsx',
      'packages/docs/src/stories/theme/themeColorShades/themeColorShades.stories.tsx',
      // globals
      'packages/docs/src/stories/themeProps.stories.tsx',
      'packages/docs/src/stories/globalStyles.stories.tsx',
      'packages/docs/src/stories/semanticElements.stories.tsx',
      // components -- needed for mdx
      'packages/docs/src/components/BreadCrumb.tsx'
    ],
    output: [
      {
        dir: 'packages/docs/dist',
        format: 'esm',
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
      mdx({
        babelOptions: {
          plugins: [
            [
              'transform-mdx',
              {
                pragma: 'element'
              }
            ]
          ]
        }
      }),
      terser()
    ],
    external: [
      '@refract-ui/core',
      '@storybook/addons',
      '@storybook/addon-links',
      '@storybook/api',
      '@storybook/client-api',
      '@storybook/components',
      '@storybook/react',
      'faker',
      'lodash',
      'lodash/map',
      'react',
      'react-flow-renderer',
      'react-syntax-highlighter',
      'styled-components',
      'tinycolor2'
    ]
  }
];
