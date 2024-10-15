import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {sizer} from '../../helpers';
import {Typography} from '../index';
import {baseOpacity} from '../../../globals';

const NotificationItem = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={baseOpacity} style={styles.main}>
      {!item?.isRead && <View style={styles.unReadBadge} />}
      <View style={{paddingHorizontal: 10}}>
        <Typography numberOfLines={4} size={14} light={item?.isRead}>
          {item.message}
        </Typography>
        <Typography color="#A5ACB8" size={10} mT={8}>
          {item.time}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(125),
    borderBottomWidth: sizer.moderateScale(0.5),
    borderBottomColor: '#E4E8EE',
    marginBottom: sizer.moderateVerticalScale(12),
  },
  unReadBadge: {
    width: sizer.moderateScale(6),
    height: sizer.moderateScale(6),
    marginTop: sizer.moderateVerticalScale(8),
    backgroundColor: '#DC0028',
    borderRadius: 100,
  },
});
