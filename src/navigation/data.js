import {HomeFocusedTab, HomeOutlinedTab, ProfileOutlined} from '../assets';
import {HomeStack, ProfileStack} from './tab-stack';

const tabData = [
  {
    screenName: 'HomeScreen',
    label: 'Dock',
    stack: HomeStack,
    ActiveTabIcon: HomeFocusedTab,
    InActiveTabIcon: HomeOutlinedTab,
  },

  {
    screenName: 'FeedScreen',
    label: 'Feed',
    stack: ProfileStack,
    ActiveTabIcon: ProfileOutlined,
    InActiveTabIcon: ProfileOutlined,
  },
];

export {tabData};
