# @refract-ui/docs

Storybook documentation and add-on for `@refract-ui`

## Getting Started

This assumes you have [Storybook](https://storybook.js.org/) installed.

1. Install docs: `yarn add -D @refract-ui/docs`
2. Update `.storybook/main.js` with the following:

    ``` js
    module.exports = {
      "stories": [
        ...,
        "@refract-ui/docs/dist/**/*.stories.js"
      ],
      "addons": [
        ...,
        "@refract-ui/docs/preset"
      ]
    }
    ```

3. Run storybook to see docs for `refract`

## Add On

`@refract-ui` contains a [preset add-on](https://storybook.js.org/tutorials/create-an-addon/react/en/preset/) that does a few things:

- It provides a decorator that includes a Theme Provider so that the packaged stories have access to necessary theme props
- It orders the packaged stories
- It provides a toolbar tool for storybook that allows users to easily toggle between the default refract theme and a provided theme.

To add your own theme to the tool, create a new theme object and pass it to the `refract.themes` array in `preview.js`'s `parameters`.

``` js
// ./storybook/preview.js
import { theme } from '@refract-ui/core';

const tomatoTheme = {
  name: 'Tomato Theme',
  theme: theme({
    themeColors: ({ defaults }) => ({
      ...defaults,
      primary: 'tomato'
    })
  })
}

export const parameters = {
  refract: {
    themes: [
      tomatoTheme
    ]
  }
}
```
