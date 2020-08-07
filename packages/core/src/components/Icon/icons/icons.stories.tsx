import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Icons } from './index';

import Icon from '../index';

const icons: Array<keyof Icons> = [
  'Add',
  'Back',
  'Behance',
  'Blank',
  'Calendar',
  'Camera',
  'Check',
  'Clock',
  'Close',
  'CloseRound',
  'Copy',
  'Danger',
  'Dashboard',
  'Delete',
  'Document',
  'Dollar',
  'DotsHorizontal',
  'DotsVertical',
  'Download',
  'Dribbble',
  'Edit',
  'Expand',
  'Eye',
  'Facebook',
  'Favorite',
  'Filter',
  'Forward',
  'Heading',
  'Image',
  'Info',
  'Instagram',
  'LineGrid',
  'Link',
  'LinkedIn',
  'List',
  'LoadingSpinner',
  'Location',
  'Lock',
  'Mail',
  'Map',
  'Medium',
  'Menu',
  'Notification',
  'Person',
  'Phone',
  'Print',
  'Refresh',
  'RoundArrow',
  'Save',
  'Search',
  'Settings',
  'Shrink',
  'SimpleArrowDown',
  'SimpleArrowUp',
  'Skype',
  'Slack',
  'Star',
  'Table',
  'Text',
  'Twitter',
  'Upload',
  'Video',
  'Vimeo',
  'Website',
  'Whatsapp',
  'YoutubeBlack'
];

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 0.25rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
`;

storiesOf('Icon', module)
  .add('all icons', () => (
    <IconWrapper>
      {icons.map(icon => (
        <>
          <Row>
            <Icon name={icon} key={`${icon}-md`} />
            <Icon name={icon} size="lg" key={`${icon}-lg`} />
          </Row>
          <p>{icon}</p>
        </>
      ))}
    </IconWrapper>
  ))
  .add('sizes', () => (
    <IconWrapper>
      <h1>test</h1>
      <Icon name="CloseRound" />
      <Icon name="LoadingSpinner" />
      <Icon name="Add" />
    </IconWrapper>
));
