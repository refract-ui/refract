import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import getTheme from '../packages/core/src/theme';

const theme = getTheme();

console.log('theme', theme);

const themes = [
    {
        name: 'default',
        ...theme
    }
]

addDecorator(withThemesProvider(themes));

const req = require.context("../packages", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
