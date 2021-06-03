import React from 'react';
import Search from './Search';

export default {
  title: 'Page/SearchField',
  component: Search,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <Search />;
