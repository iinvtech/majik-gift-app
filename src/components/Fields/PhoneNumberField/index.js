import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {COLORS} from '../../../../globals';
import {Lato, sizer} from '../../../helpers';
import {ErrorTextSvg} from '../../../assets';
import {Typography} from '../../index';

const PhoneNumberField = React.forwardRef(
  (
    {
      containerSt = {},
      inputStyle = {},
      label = '',
      error = '',
      placeholder = '',
      handleChange = e => {},
      mb = 18,
      mt = 0,
      editable = true,
      color = '#000',
      labelColor = COLORS.black,
      leftIcon = '',
      RightIcon = '',
      countryCode = false,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState();

    // Error Message Component
    const ErrorMsg = ({error}) => (
      <View style={styles.errorView}>
        <ErrorTextSvg />
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );

    return (
      <View
        style={{
          marginTop: sizer.moderateVerticalScale(mt),
          marginBottom: sizer.moderateVerticalScale(mb),
          ...containerSt,
        }}>
        {label && (
          <View style={styles.label}>
            <Typography
              size={12}
              mB={6}
              color={error ? COLORS.danger : labelColor}>
              {label}
            </Typography>
          </View>
        )}
        <View
          style={[
            styles.inputView,
            {borderColor: error ? COLORS.danger : COLORS.greyV1},
          ]}>
          {/* Left Icon */}
          {!!leftIcon && <View>{leftIcon}</View>}

          {/* Text Input Field */}
          {countryCode ? (
            <TextInput
              editable={false}
              value={countryCode}
              style={[styles.countryCode, {color: color}]}
              placeholderTextColor={COLORS.greyV1}
            />
          ) : (
            <View style={styles.countryCode} />
          )}
          <TextInput
            keyboardType="phone-pad"
            placeholder={placeholder}
            ref={ref}
            value={value}
            editable={editable}
            onChangeText={e => {
              setValue(e);
              handleChange(e);
            }}
            style={[
              styles.input,
              {
                color: color,
                ...inputStyle,
              },
            ]}
            placeholderTextColor={COLORS.greyV1}
            {...props}
          />

          {/* Right Icon */}
          {!!RightIcon && (
            <View style={styles.rightIcon}>
              {
                <RightIcon
                  width={sizer.fontScale(24)}
                  height={sizer.fontScale(24)}
                  fill={error ? COLORS.danger : COLORS.darkV2}
                />
              }
            </View>
          )}
        </View>
        {/* Error Message */}
        {Boolean(error !== '') && <ErrorMsg error={error} />}
      </View>
    );
  },
);

export default PhoneNumberField;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    minHeight: sizer.moderateVerticalScale(56),
    borderRadius: sizer.fontScale(4),
    borderWidth: sizer.fontScale(1),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    ...Lato.regular(),
    fontSize: sizer.fontScale(14),
    paddingLeft: 0,
  },
  countryCode: {
    ...Lato.regular(),
    fontSize: sizer.fontScale(14),
    paddingLeft: sizer.moderateScale(16),
    paddingRight: sizer.moderateScale(0),
  },
  label: {
    position: 'absolute',
    top: sizer.moderateVerticalScale(-12),
    left: sizer.moderateScale(12),
    zIndex: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: sizer.moderateScale(6),
  },
  rightIcon: {
    width: sizer.moderateScale(40),
    alignItems: 'center',
  },
  errorView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: sizer.moderateScale(6),
  },
  errorText: {
    color: COLORS.danger,
    fontSize: sizer.fontScale(10),
    ...Lato.regular(),
    marginLeft: sizer.moderateScale(4),
  },
});
