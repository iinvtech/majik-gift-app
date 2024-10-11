import {HomeStack, ProfileStack} from './tab-stack';

const tabData = [
  {
    screenName: 'HomeScreen',
    label: 'Dock',
    stack: HomeStack,
    // ActiveTabIcon: ActiveTabDock,
    // InActiveTabIcon: InActiveTabDock,
  },

  {
    screenName: 'FeedScreen',
    label: 'Feed',
    stack: ProfileStack,
    // ActiveTabIcon: ActiveTabFeed,
    // InActiveTabIcon: InActiveTabFeed,
  },
];

export {tabData};
