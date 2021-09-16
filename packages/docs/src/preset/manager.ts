import { addons, types } from '@storybook/addons';

import Tool, { ADDON_ID, TOOL_ID } from './tool';

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'My addon',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool
  });
});
