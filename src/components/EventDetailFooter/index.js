import {StyleSheet, View} from 'react-native';

import {Typography, Button, OutlinedButton} from '../index';
import {COLORS, paddingHorizontal} from '../../../globals';
import {sizer} from '../../helpers';
import {Stars} from '../../assets';

const EventDetailFooter = ({
  leftText = '300',
  btnText = 'Buy Ticket',
  onPress = () => {},
  leftBtn = false,
}) => {
  return (
    <View style={styles.main}>
      {leftBtn ? (
        <OutlinedButton
          label={'Cancel'}
          width={133}
          height={42}
          onPress={onPress}
        />
      ) : (
        <Typography size={20} bold fontType="secondary">
          $ {leftText}.00
        </Typography>
      )}
      <Button
        label={btnText}
        Icon={<Stars />}
        width={133}
        height={42}
        onPress={onPress}
      />
    </View>
  );
};

export default EventDetailFooter;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(70),
    backgroundColor: COLORS.white,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    marginHorizontal: -paddingHorizontal,
    paddingHorizontal: paddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop:5
  },
});
