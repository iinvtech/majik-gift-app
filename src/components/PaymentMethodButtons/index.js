import {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Flex, Typography} from '../index';
import {CreditCardSvg, PaypalSvg, TickSecondary} from '../../assets';
import {sizer} from '../../helpers';
import {baseOpacity, COLORS} from '../../../globals';

const PaymentMethodButtons = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const DATA = [
    {id: 1, method: 'PAYPAL', Icon: PaypalSvg},
    {id: 2, method: 'CREDIT_CARD', text: 'Credit card', Icon: CreditCardSvg},
  ];
  return (
    <Flex mT={17} justifyContent="space-between">
      {DATA.map((obj, i) => (
        <TouchableOpacity
          key={i}
          activeOpacity={baseOpacity}
          onPress={() => setActiveBtn(i)}
          style={[
            styles.main,
            {borderColor: activeBtn == i ? COLORS.secondary : '#EBEBEB'},
          ]}>
          <obj.Icon />
          {obj?.text && (
            <Typography size={14} color="#79747E">
              {obj.text}
            </Typography>
          )}
          {activeBtn == i && <TickSecondary />}
        </TouchableOpacity>
      ))}
    </Flex>
  );
};

export default PaymentMethodButtons;

const styles = StyleSheet.create({
  main: {
    width: sizer.moderateVerticalScale(163),
    height: sizer.moderateVerticalScale(40),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 21,
  },
});
