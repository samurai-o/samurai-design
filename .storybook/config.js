import { configure } from '@storybook/react';

const context = require.context('./stories', true, /\.js$/);

function loadstories() {
    context.keys().forEach(filename => context(filename));
}

configure(loadstories, module);