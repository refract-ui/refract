import React, { useCallback } from 'react';
import { useGlobals, useParameter } from '@storybook/api';
import { addons, types } from '@storybook/addons';
import {
  IconButton,
  Icons,
  TooltipLinkList,
  WithTooltip
} from '@storybook/components';

const ADDON_ID = 'refract';
const TOOL_ID = `${ADDON_ID}/refractToggle`;
const REFRACT_PARAM_KEY = 'refractTheme';

function getTooltipLinks(themes, selectedTheme, toggle) {
  const tooltipLinks = themes?.map(({ name }, i) => ({
    id: i + 1,
    title: name,
    selectedTheme,
    onClick: () => toggle({ selected: name, name }),
    active: selectedTheme === name
  }));

  const clearSelection = {
    id: themes.length + 1,
    title: 'Reset Theme',
    selectedTheme: null,
    onClick: () => toggle({ selected: null, name: 'Reset Theme' }),
    active: false
  };
  return [...tooltipLinks, clearSelection];
}

const Tool = () => {
  const [globals, updateGlobals] = useGlobals();
  const refractParams = useParameter('refract');
  const activeTheme = globals[REFRACT_PARAM_KEY];

  const paramThemes = refractParams?.themes || [];

  const onThemeChange = useCallback(value => {
    updateGlobals({
      [REFRACT_PARAM_KEY]: value
    });
  });

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={props => {
        const { onHide } = props;
        return (
          <TooltipLinkList
            links={getTooltipLinks(
              [{ name: 'refract' }, ...paramThemes],
              activeTheme,
              ({ selected }) => {
                if (activeTheme !== selected) {
                  onThemeChange(selected);
                }
                onHide();
              }
            )}
          />
        );
      }}
    >
      <IconButton
        key={TOOL_ID}
        active={activeTheme}
        title="Refract Theme Toggle"
      >
        <Icons icon="photo" />
      </IconButton>
    </WithTooltip>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'My addon',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool
  });
});
