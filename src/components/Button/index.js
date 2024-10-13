import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {baseOpacity, COLORS} from '../../../globals';
import {sizer} from '../../helpers';
import {Typography, Flex} from '../';

const Button = ({
  label = 'Submit',
  mT = 0,
  mB = 0,
  onPress = () => {},
  bgColor = COLORS.primary,
  textColor = COLORS.black,
  height = 50,
  width = 0,
  radius = 0,
  textStyles = {},
  btnStyles = {},
  disabled = false,
  textSize = 16,
  gap=11,
  Icon = <></>,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.main,
        {
          marginTop: sizer.moderateVerticalScale(mT),
          marginBottom: sizer.moderateVerticalScale(mB),
          backgroundColor: bgColor,
          height: sizer.moderateVerticalScale(height),
          borderRadius: radius,
        },
        btnStyles,
        width && {width: width},
        disabled && {backgroundColor: COLORS.greyV3},
      ]}
      activeOpacity={baseOpacity}>
      <Flex alignItems='center' gap={gap}>
        {Icon && Icon}
        <Typography style={{color: textColor, ...textStyles}} size={textSize}>
          {label}
        </Typography>
      </Flex>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
