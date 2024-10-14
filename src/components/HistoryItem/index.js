import {StyleSheet, TouchableOpacity} from 'react-native';

import {CrossIcon} from '../../assets';
import {paddingHorizontal} from '../../../globals';
import {sizer} from '../../helpers';
import {Flex, Typography} from '../index';

const HistoryItem = ({item, onDelete}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      style={styles.main}>
      <Typography size={14} light>
        {item.name}
      </Typography>
      <TouchableOpacity
        hitSlop={{bottom: 5, top: 5, right: 5, left: 5}}
        onPress={() => {
          onDelete(item.id);
        }}>
        <CrossIcon />
      </TouchableOpacity>
    </Flex>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(42),
    borderBottomWidth: sizer.moderateScale(0.5),
    borderBottomColor: '#EBEBEB',
    paddingHorizontal: sizer.moderateScale(paddingHorizontal),
  },
});
