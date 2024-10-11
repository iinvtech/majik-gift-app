import {
  HomeFocusedTab,
  HomeOutlinedTab,
  LightworkerFocus,
  LightworkerOutlined,
  ProfileFocusTab,
  ProfileOutlined,
} from '../assets';

import {HomeStack, LightworkerStack, ProfileStack} from './tab-stack';

const tabData = [
  {
    screenName: 'HomeScreen',
    label: 'Home',
    stack: HomeStack,
    ActiveTabIcon: HomeFocusedTab,
    InActiveTabIcon: HomeOutlinedTab,
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
