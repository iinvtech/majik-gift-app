import {StyleSheet, View} from 'react-native';

import {Typography, Button} from '../index';
import { COLORS, paddingHorizontal } from '../../../globals';
import { sizer } from '../../helpers';
import { Stars } from '../../assets';



const EventDetailFooter = () => {
  return (
    <View style={styles.main}>
      <Typography size={20} bold fontType="secondary">
        $300.00
      </Typography>
      <Button label="Buy Ticket" Icon={<Stars />} width={133} height={42} />
    </View>
  );
};

export default EventDetailFooter;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(70),
    backgroundColor: COLORS.white,
    elevation: 10,
    marginHorizontal: -paddingHorizontal,
    paddingHorizontal: paddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop:5
  },
});
