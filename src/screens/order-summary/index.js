import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  BackButton,
  Button,
  Container,
  DropdownComponent,
  EventDetailFooter,
  Flex,
  PaymentMethodButtons,
  Typography,
} from '../../components';
import {NotificationIcon} from '../../assets';
import {Lato, sizer} from '../../helpers';
import {COLORS} from '../../../globals';

const OrderSummary = () => {
  const [isSelected, setSelected] = useState(false);
  return (
    <Container>
      <BackButton title="Order Summary" Icon={NotificationIcon} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={styles.productRow}>
          <Typography size={14} medium>
            Product Name
          </Typography>
          <Typography size={14}>Antique Bowl</Typography>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={styles.quantityRow}>
          <Typography size={14} medium>
            Quantity
          </Typography>
          <Typography size={14}>2</Typography>
        </Flex>

        <Typography size={14} mT={19}>
          Shipping Address
        </Typography>

        <DropdownComponent placeholder="Select Country/Region" />
        <DropdownComponent placeholder="Select State" />

        <TextInput style={styles.textInput} placeholder="Enter Town/City" />
        <TextInput style={styles.textInput} placeholder="Enter Post Code" />

        <Flex alignItems="center" mT={19} justifyContent="space-between">
          <Typography size={14}>Have a coupon Code?</Typography>
          <Typography size={10} color="#79747E">
            (Optional)
          </Typography>
        </Flex>

        <Flex mT={16}>
          <TextInput
            style={[
              styles.textInput,
              {width: '69%', marginTop: sizer.moderateVerticalScale(0)},
            ]}
            placeholder="Enter Town/City"
          />
          <Button
            bgColor={COLORS.secondary}
            label="Apply"
            height={40}
            width={109}
          />
        </Flex>

        <Typography mT={19} size={14}>
          Payment Method
        </Typography>

        <PaymentMethodButtons />

        <Flex gap={10} mT={30} alignItems="center">
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.tickCheckbox}
            onPress={() => setSelected(!isSelected)}>
            <View style={styles.box}>
              {isSelected ? (
                <TickSvg
                  width={sizer.fontScale(8)}
                  height={sizer.fontScale(7)}
                />
              ) : null}
            </View>
          </TouchableOpacity>
          <Flex justifyContent="center">
            <Typography size={14} light color={'#212121'}>
              By clicking this, you are agreeing to our{' '}
            </Typography>

            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Typography size={14} bold color={COLORS.secondary}>
                terms and
              </Typography>
            </TouchableOpacity>
          </Flex>
        </Flex>
        <Flex mT={5} style={{marginLeft: sizer.moderateScale(23)}}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Typography size={14} bold color={COLORS.secondary}>
              Conditions{' '}
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Typography size={14} light color={'#212121'}>
              and{' '}
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Typography size={14} bold color={COLORS.secondary}>
              Privacy Policy
            </Typography>
          </TouchableOpacity>
        </Flex>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: sizer.moderateVerticalScale(30),
          }}>
          {[...Array(30)].map((_, index) => (
            <View
              key={index}
              style={{
                width: 5, 
                height: 1,
                backgroundColor: '#A6A6A6',
              }}
            />
          ))}
        </View>

        <Flex mT={21} justifyContent="space-between">
          <Typography size={14} light>
            Sub Total
          </Typography>
          <Typography size={14}>$55.00</Typography>
        </Flex>

        <Flex mT={22} justifyContent="space-between">
          <Typography size={14} light>
            Shipping
          </Typography>
          <Typography size={14}>$5.00</Typography>
        </Flex>

        <Flex mT={22} justifyContent="space-between" mB={21}>
          <Typography size={14}>Grand Total</Typography>
          <Typography size={14} bold>
            $60.00
          </Typography>
        </Flex>
      </ScrollView>

      <EventDetailFooter leftBtn btnText="Confirm" />
    </Container>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  productRow: {
    height: sizer.moderateVerticalScale(42),
    borderBottomColor: COLORS.borderV1,
    marginTop: sizer.moderateVerticalScale(24),
    marginBottom: sizer.moderateVerticalScale(8),
    borderBottomWidth: sizer.moderateScale(1),
  },
  quantityRow: {
    height: sizer.moderateVerticalScale(42),
    borderBottomColor: COLORS.borderV1,
    borderBottomWidth: sizer.moderateScale(1),
    marginBottom: sizer.moderateVerticalScale(8),
  },
  textInput: {
    height: sizer.moderateVerticalScale(40),
    borderColor: COLORS.greyV5,
    borderWidth: sizer.moderateScale(0.5),
    paddingHorizontal: sizer.moderateScale(12),
    marginTop: sizer.moderateVerticalScale(16),
    fontSize: sizer.fontScale(12),
    ...Lato.regular(),
  },
  forgotPass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tickCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: sizer.moderateVerticalScale(15),
    height: sizer.moderateVerticalScale(15),
    borderWidth: sizer.moderateScale(1),
    borderRadius: 2,
    borderColor: COLORS.greyV3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
