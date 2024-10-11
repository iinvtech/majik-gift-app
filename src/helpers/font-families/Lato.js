import {Platform} from 'react-native';

const regular = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
      },
      android: {
        fontFamily: 'Lato-Regular',
      },
    }),
  };
};

const bold = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Lato-Bold',
        fontWeight: '700',
      },
      android: {
        fontFamily: 'Lato-Bold',
      },
    }),
  };
};

const medium = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Lato-Medium',
        fontWeight: '500',
      },
      android: {
        fontFamily: 'Lato-Medium',
      },
    }),
  };
};

const light = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Lato-Light',
        fontWeight: '300',
      },
      android: {
        fontFamily: 'Lato-Light',
      },
    }),
  };
};

export default {
  regular,
  bold,
  medium,
  light,
};
