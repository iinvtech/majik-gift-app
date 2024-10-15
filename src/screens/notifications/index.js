import {FlatList, StyleSheet, View} from 'react-native';

import {
  BackButton,
  Container,
  Flex,
  NotificationItem,
  Typography,
} from '../../components';
import {CircleTick, NotificationIconFilled} from '../../assets';
import {notifications} from '../../components/data';
import {sizer} from '../../helpers';

const Notifications = () => {
  return (
    <Container>
      <BackButton
        title="Notifications"
        Icon={() => (
          <View>
            <NotificationIconFilled />
            <View style={styles.unReadBadge} />
          </View>
        )}
      />

      <Flex justifyContent="flex-end" gap={8} mT={25}>
        <Typography size={14}>Mark all as read</Typography>
        <CircleTick />
      </Flex>

      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: sizer.moderateVerticalScale(23),
        }}
      />
    </Container>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  unReadBadge: {
    width: sizer.moderateScale(8),
    height: sizer.moderateScale(8),
    backgroundColor: '#DC0028',
    borderRadius: 100,
    position: 'absolute',
    top: sizer.moderateVerticalScale(-2),
    right: sizer.moderateScale(-2),
  },
});
