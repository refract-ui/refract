# Refract UI

[![Release](https://github.com/refract-ui/refract/actions/workflows/release.yml/badge.svg)](https://github.com/refract-ui/refract/actions/workflows/release.yml)
[![Test](https://github.com/refract-ui/refract/actions/workflows/test.yml/badge.svg)](https://github.com/refract-ui/refract/actions/workflows/test.yml)
![License](https://img.shields.io/github/license/refract-ui/refract)
![NPM Downloads](https://img.shields.io/npm/dm/@refract-ui/core.svg?style=flat)
![GitHub Stars](https://badgen.net/github/stars/refract-ui/refract)

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: A placeholder documentation site powered by [Next.js](https://nextjs.org)
- `@refract/core`: core React components
- `@refract/utils`: shared React utilities
- `@refract/tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `eslint-preset-refract`: ESLint preset

Each package and app is 100% [Typescript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [Typescript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

We do not have a starter yet in `create-turbo` for this quite yet. If you want to use this in the interim, you run the following command:

```sh
npx degit vercel/turborepo/examples/design-system design-system
cd design-system
yarn install
git init . && git add . && git commit -m "Init"
```

### Changing the NPM organization scope

The NPM organization scope for this design system starter is `@refract`. To change this, it's a bit manual at the moment, but you'll need to do the following:

- Rename folders in `packages/*` to replace `refract` with your desired scope
- Search and replace `refract` with your desired scope
- Re-run `yarn install`

### Publishing packages

#### NPM

If you want to publish package to the public NPM registry and make them publicly available, this is already setup for you.

To publish packages to a private NPM organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

#### GitHub Package Registry

See [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
