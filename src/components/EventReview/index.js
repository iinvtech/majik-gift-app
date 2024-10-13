import {Image, View} from 'react-native';

import {Flex, Typography} from '../index';
import {sizer} from '../../helpers';
import {ReviewStars} from '../../assets';

const EventReview = () => {
  return (
    <View style={{marginTop: sizer.moderateVerticalScale(18)}}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap={9}>
          <Image source={require('../../assets/images/lightworker.png')} />
          <Typography size={14}>John Smith</Typography>
        </Flex>

        <ReviewStars />
      </Flex>
      <Typography mT={7} size={12} light color={'#3F403F'} LineHeight={17}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
        condimentum ligula, id rhoncus turpis. Morbi dignissim ultrices lectus
        quis rhoncus. Mauris pellentesque fringilla vehicula.
      </Typography>
    </View>
  );
};

export default EventReview;
