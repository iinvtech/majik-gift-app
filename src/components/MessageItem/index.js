import React from 'react';
import {View} from 'react-native';
import moment from 'moment';

import {COLORS} from '../../../globals';
import {sizer} from '../../helpers';
import {Typography, Flex} from '../index';
import {MessageTickSvg} from '../../assets';

const MessageItem = ({item, index}) => {
  return (
    <Flex
      key={index}
      justifyContent={item?.sender?.id === 'user1' ? 'flex-end' : 'flex-start'}>
      <View
        style={{
          backgroundColor:
            item?.sender?.id === 'user1' ? COLORS.secondary : COLORS.whiteV1,
          borderTopLeftRadius: item?.sender?.id === 'user1' ? 8 : 0,
          borderTopRightRadius: item?.sender?.id === 'user1' ? 0 : 8,
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
          paddingVertical: sizer.moderateVerticalScale(14),
          paddingHorizontal: sizer.moderateScale(14),
          marginBottom: sizer.moderateVerticalScale(8),
        }}>
        <Typography
          size={14}
          color={item?.sender?.id === 'user1' ? COLORS.white : '#213241'}>
          {item?.message}
        </Typography>

        <Flex justifyContent="flex-end" mT={7}>
          <Flex
            style={{
              marginRight: sizer.moderateScale(3),
              height: '100%',
            }}>
            <MessageTickSvg stroke={'#F6FBFF'} />
          </Flex>
          {item?.createdAt && (
            <Typography
              style={{height: '100%'}}
              size={12}
              color={item?.sender?.id === 'user1' ? '#F6FBFF' : 'black'}
              textAlign={item?.sender?.id === 'user1' ? 'right' : 'left'}>
              {moment(item?.createdAt).format('h:mm a')}
            </Typography>
          )}
        </Flex>
      </View>
    </Flex>
  );
};

export default MessageItem;
