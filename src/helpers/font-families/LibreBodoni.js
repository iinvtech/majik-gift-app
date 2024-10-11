import {Platform} from 'react-native';

const regular = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'LibreBodoni-Regular',
        fontWeight: '400',
      },
      android: {
        fontFamily: 'LibreBodoni-Regular',
      },
    }),
  };
};

const bold = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'LibreBodoni-Bold',
        fontWeight: '700',
      },
      android: {
        fontFamily: 'LibreBodoni-Bold',
      },
    }),
  };
};

const medium = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'LibreBodoni-Medium',
        fontWeight: '500',
      },
      android: {
        fontFamily: 'LibreBodoni-Medium',
      },
    }),
  };
};

const light = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'LibreBodoni-Light',
        fontWeight: '300',
      },
      android: {
        fontFamily: 'LibreBodoni-Light',
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
