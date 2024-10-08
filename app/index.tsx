import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Button,
  Container,
  Flex,
  InputField,
  PasswordField,
  Typography,
} from "@/components";
import { COLORS } from "@/constants/Colors";
import { logo, Stars, TickSvg } from "@/assets";
import sizer from "@/constants/sizer";
import { router } from "expo-router";

const SignIn = () => {
  const [isSelected, setSelected] = useState(false);

  return (
    <ScrollView>
      <Container>
        <View style={styles.imageView}>
          <Image source={logo} />
        </View>

        <Typography size={22} mT={19} fontType="secondary" medium>
          Hey! Welcome 👋🏼
        </Typography>

        <Typography mT={12} light color={"#4C4C4C"} LineHeight={24}>
          Please enter your credentials to access your account.
        </Typography>

        <InputField
          label="Username/Email"
          placeholder="Enter Username/Email"
          mt={41}
        />
        <PasswordField label="Password" placeholder="******" mt={22} />

        <View style={styles.forgotPass}>
          <Flex gap={5} alignItems="center">
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.tickCheckbox}
              onPress={() => setSelected(!isSelected)}
            >
              <View style={styles.box}>
                {isSelected ? (
                  <TickSvg
                    width={sizer.fontScale(8)}
                    height={sizer.fontScale(7)}
                  />
                ) : null}
              </View>
            </TouchableOpacity>
            <Typography size={12} color={COLORS.grey}>
              Remember me
            </Typography>
          </Flex>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Typography size={12}>Forgot password?</Typography>
          </TouchableOpacity>
        </View>

        <Button label="Login" mT={44} Icon={<Stars />} />

        <Flex mT={16} justifyContent="center">
          <Typography size={14} light>
            Don’t have an account?{" "}
          </Typography>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              router.push("/sign-up");
            }}
          >
            <Typography size={14} color={COLORS.secondary}>
              Sign up?
            </Typography>
          </TouchableOpacity>
        </Flex>
      </Container>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: sizer.moderateVerticalScale(37),
  },
  forgotPass: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tickCheckbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    width: sizer.moderateVerticalScale(15),
    height: sizer.moderateVerticalScale(15),
    borderWidth: sizer.moderateScale(1),
    borderRadius: 2,
    borderColor: COLORS.greyV3,
    justifyContent: "center",
    alignItems: "center",
  },
});
