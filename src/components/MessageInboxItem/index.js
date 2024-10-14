import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {baseOpacity, COLORS} from '../../../globals';
import {Flex, Typography} from '../index';
import {sizer} from '../../helpers';

const MessageInboxItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.main} activeOpacity={baseOpacity}>
      <Flex
        alignItems="center"
        style={{flex: 1}}
        justifyContent="space-between">
        <Flex gap={10} alignItems="center">
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/1eb1/b334/e13d23c353c9d4b8ee1fc406955b01dc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NuKnLS4HjKst6rzgfjuwvsMUHN-ys0uqDbkw2z20M~~yGPwHcVAoxEMsRduhUR2YfOEReBzA9hq4Ez2yzqlSLgSc8ZlAFt0ZztJ-yJe4lt82qpyIP~029U--87AvlJ-kLM-DDZmOXNztVsvdDWeI0mXateUoNm-8fqxhH8zZ~HO0JGNoWGnHWqOqICx8LoTqWx5TLH6EN2pWAyA6PPKlDHAKvJ2zyciWd76FtK5MC0AIIDIL5NYMx4X2XiNlD7XdCuHqQWqHLNNOigPqZPhwccyTkRxGdTQNRHnl-i2KQTAR2ugzAfOd2y~bNtAczGjUqK9xlOQM5s3Tpg6El3oqSg__',
            }}
            style={{borderRadius: 100}}
            width={46}
            height={46}
          />

          <View>
            <Typography bold>John Smith</Typography>
            <Typography size={14} color="#8593A8">
              Likewise, Amazing Experience...
            </Typography>
          </View>
        </Flex>

        <Typography size={12} light color="#4C4C4C">
          15:18
        </Typography>
      </Flex>
    </TouchableOpacity>
  );
};

export default MessageInboxItem;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(60),
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: 1,
    marginBottom: sizer.moderateVerticalScale(8),
  },
  numberOfMessages: {
    width: sizer.moderateScale(21),
    height: sizer.moderateScale(21),
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
