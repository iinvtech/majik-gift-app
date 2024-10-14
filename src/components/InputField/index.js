import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { COLORS } from '../../../globals';
import { ErrorTextSvg } from '../../assets';
import { sizer } from '../../helpers';
import { Typography } from '../';

const InputField = React.forwardRef(
  (
    {
      containerSt = {},
      inputStyle = {},
      inputCont = {},
      label = '',
      error = '',
      placeholder = '',
      handleChange = () => {},
      handlePress = () => {},
      mb = 18,
      mt = 10,
      light = false,
      numPad = false,
      editable = true,
      color = '#000',
      labelColor = COLORS.blackV1,
      leftIcon = null,
      RightIcon = null,
      important = false,
      leftErrorMsg = false,
      contextMenuHidden = false,
      multiline = false,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = React.useState('');

    const ErrorMsg = ({ error }) => (
      <View
        style={[
          styles.errorView,
          { alignSelf: leftErrorMsg ? 'flex-start' : 'flex-end' },
        ]}
      >
        <ErrorTextSvg />
        <Text
          style={{
            color: COLORS.danger,
            fontSize: sizer.fontScale(10),
            fontFamily: 'Lato',
            marginLeft: sizer.moderateScale(4),
          }}
        >
          {error}
        </Text>
      </View>
    );

    return (
      <View
        onStartShouldSetResponder={() => {
          handlePress();
          return true;
        }}
        style={{
          marginTop: sizer.moderateVerticalScale(mt),
          marginBottom: sizer.moderateVerticalScale(mb),
          ...containerSt,
        }}
      >
        {label && (
          <View style={styles.label}>
            <Typography
              size={12}
              mB={6}
              color={error ? COLORS.danger : labelColor}
            >
              {label}
            </Typography>
            {important && (
              <Typography color={'#DC0028'} size={12}>
                {' '}
                *
              </Typography>
            )}
          </View>
        )}
        <View
          style={[
            styles.inputView,
            { borderColor: error ? COLORS.danger : COLORS.greyV1 },
            inputCont,
          ]}
        >
          {!!leftIcon && <View>{leftIcon}</View>}

          <TextInput
            keyboardType={numPad ? 'numeric' : 'default'}
            placeholder={placeholder}
            ref={ref}
            value={value}
            editable={editable}
            multiline={multiline}
            onChangeText={(e) => {
              setValue(e);
              handleChange(e);
            }}
            style={[
              styles.input,
              {
                color: editable ? color : COLORS.greyV1,
                textAlignVertical: multiline ? 'top' : 'center',
                ...inputStyle,
              },
              multiline && {
                minHeight: sizer.moderateVerticalScale(96),
                maxHeight: sizer.moderateVerticalScale(96),
                paddingTop: sizer.moderateScale(10),
                paddingBottom: sizer.moderateScale(10),
                lineHeight: sizer.moderateScale(20),
              },
            ]}
            placeholderTextColor={COLORS.greyV1}
            contextMenuHidden={contextMenuHidden}
            {...props}
          />

          {!!RightIcon && (
            <View style={styles.rightIcon}>
              <RightIcon
                width={sizer.fontScale(24)}
                height={sizer.fontScale(24)}
                fill={error ? COLORS.danger : COLORS.black}
              />
            </View>
          )}
        </View>
        {Boolean(error) && <ErrorMsg error={error} />}
      </View>
    );
  }
);

export default InputField;

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
    fontFamily: 'Lato',
    fontSize: sizer.fontScale(14),
    paddingHorizontal: sizer.moderateScale(16),
  },
  label: {
    position: 'absolute',
    top: sizer.moderateVerticalScale(-10),
    left: sizer.moderateScale(10),
    zIndex: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: sizer.moderateScale(6),
    flexDirection: 'row',
  },
  rightIcon: {
    width: sizer.moderateScale(40),
    alignItems: 'center',
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: sizer.moderateScale(6),
  },
});
