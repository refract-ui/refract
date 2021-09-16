import React, { useCallback } from 'react';
import { useGlobals, useParameter } from '@storybook/api';
import {
  IconButton,
  Icons,
  TooltipLinkList,
  WithTooltip
} from '@storybook/components';

import { defaultRefractTheme, RefractDecoratorTheme } from './decorators/withRefract';

export const ADDON_ID = 'refract';
export const TOOL_ID = `${ADDON_ID}/refractToggle`;
export const REFRACT_PARAM_KEY = 'refractTheme';

type TooltipLink = {
  id: string;
  title: string;
  selectedTheme: unknown;
  onClick: () => void;
  active: boolean;
};

function getTooltipLinks(
  themes: RefractDecoratorTheme[],
  selectedTheme: string,
  toggle: (args: { selected: string; name: string }) => void
): TooltipLink[] {
  const tooltipLinks = themes?.map(({ name }, i) => ({
    id: `${i + 1}`,
    title: name,
    selectedTheme,
    onClick: () => toggle({ selected: name, name }),
    active: selectedTheme === name
  }));

  const clearSelection: TooltipLink = {
    id: `${themes.length + 1}`,
    title: 'Reset Theme',
    selectedTheme: null,
    onClick: () => toggle({ selected: null, name: 'Reset Theme' }),
    active: false
  };

  return [...tooltipLinks, clearSelection];
}

type RefractParams = {
  themes?: RefractDecoratorTheme[];
};

const Tool = (): any => {
  const [globals, updateGlobals] = useGlobals();
  const refractParams: RefractParams = useParameter('refract');
  const activeTheme = globals[REFRACT_PARAM_KEY];

  const paramThemes = refractParams?.themes || [];

  const onThemeChange = useCallback(value => {
    updateGlobals({
      [REFRACT_PARAM_KEY]: value
    });
  }, []);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={({ onHide }) => {
        return (
          <TooltipLinkList
            links={getTooltipLinks(
              [defaultRefractTheme, ...paramThemes],
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

export default Tool;
