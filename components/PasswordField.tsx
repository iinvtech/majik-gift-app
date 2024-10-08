import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";

import { Typography } from "@/components";
import { COLORS } from "../constants/Colors";
import sizer from "../constants/sizer";
import { EyeSvg, EyeCloseSvg, ErrorTextSvg } from "@/assets";

interface PasswordFieldProps extends TextInputProps {
  containerSt?: ViewStyle;
  inputStyle?: TextStyle;
  label?: string;
  error?: string;
  placeholder?: string;
  handleChange?: (e: string) => void;
  mt?: number;
  mb?: number;
  color?: string;
}

const PasswordField = React.forwardRef<TextInput, PasswordFieldProps>(
  (
    {
      containerSt = {},
      inputStyle = {},
      label = "",
      error = "",
      placeholder = "",
      handleChange = () => {},
      mt = 0,
      mb = 18,
      color = "#000",
      ...props
    },
    ref
  ) => {
    const [value, setValue] = React.useState<string | undefined>("");
    const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);

    const errorText = (err: string) => (
      <View style={styles.errorView}>
        <ErrorTextSvg />
        <Text
          style={{
            color: COLORS.danger,
            fontSize: sizer.fontScale(10),
            fontFamily: "Lato",
            marginLeft: sizer.moderateScale(4),
          }}
        >
          {err}
        </Text>
      </View>
    );

    return (
      <View
        style={{
          marginBottom: sizer.moderateVerticalScale(mb),
          marginTop: sizer.moderateVerticalScale(mt),
          ...containerSt,
        }}
      >
        {label && (
          <View style={styles.label}>
            <Typography
              size={12}
              color={error ? COLORS.danger : COLORS.blackV1}
              mB={6}
            >
              {label}
            </Typography>
          </View>
        )}
        <View
          style={[
            styles.inputView,
            {
              borderColor: error ? COLORS.danger : COLORS.greyV1,
            },
          ]}
        >
          <TextInput
            placeholder={placeholder}
            ref={ref}
            value={value}
            onChangeText={(e) => {
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
            secureTextEntry={secureTextEntry}
            {...props}
          />
          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            style={styles.eyeIcon}
            activeOpacity={0.5}
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
            {secureTextEntry ? (
              <EyeCloseSvg
                width={sizer.fontScale(16)}
                height={sizer.fontScale(16)}
                fill={error ? COLORS.danger : COLORS.black}
              />
            ) : (
              <EyeSvg
                width={sizer.fontScale(16)}
                height={sizer.fontScale(16)}
                // stroke={error ? COLORS.danger : COLORS.black}
              />
            )}
          </TouchableOpacity>
        </View>
        {Boolean(error !== "") && errorText(error)}
      </View>
    );
  }
);

export default PasswordField;

const styles = StyleSheet.create({
  inputView: {
    minHeight: sizer.moderateVerticalScale(56),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: sizer.fontScale(4),
    borderWidth: sizer.fontScale(1),
  },
  input: {
    flex: 1,
    fontFamily: "Lato",
    fontSize: sizer.fontScale(14),
    paddingLeft: sizer.moderateScale(16),
  },
  label: {
    position: "absolute",
    top: sizer.moderateVerticalScale(-10),
    left: sizer.moderateScale(10),
    zIndex: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: sizer.moderateScale(6),
  },
  eyeIcon: {
    width: sizer.moderateScale(40),
    alignItems: "center",
  },
  errorView: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: sizer.moderateScale(8),
  },
});
