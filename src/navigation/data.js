import {
  HomeFocusedTab,
  HomeOutlinedTab,
  LightworkerFocus,
  LightworkerOutlined,
  ProductsFocus,
  ProductsOutlinedTab,
  ProfileFocusTab,
  ProfileOutlined,
} from '../assets';

import {
  HomeStack,
  LightworkerStack,
  ProductsStack,
  ProfileStack,
} from './tab-stack';

const tabData = [
  {
    screenName: 'HomeScreen',
    label: 'Home',
    stack: HomeStack,
    ActiveTabIcon: HomeFocusedTab,
    InActiveTabIcon: HomeOutlinedTab,
  },

  {
    screenName: 'ProductsScreen',
    label: 'products',
    stack: ProductsStack,
    ActiveTabIcon: ProductsOutlinedTab,
    InActiveTabIcon: ProductsFocus,
  },

  {
    screenName: 'LightworkerScreen',
    label: 'Lightworkers',
    stack: LightworkerStack,
    ActiveTabIcon: LightworkerFocus,
    InActiveTabIcon: LightworkerOutlined,
  },

  {
    screenName: 'ProfileScreen',
    label: 'Profile',
    stack: ProfileStack,
    ActiveTabIcon: ProfileFocusTab,
    InActiveTabIcon: ProfileOutlined,
  },
];

export {tabData};
