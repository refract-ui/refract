import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import { theme } from '../packages/core/src';

const themes = [
    {
        name: 'default',
        ...theme
    },
    {
        name: 'secondary',
        colors: {
            primary: 'red'
        }
    }
]

addDecorator(withThemesProvider(themes));

const req = require.context("../packages", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
