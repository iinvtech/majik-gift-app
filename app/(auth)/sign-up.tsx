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
import {
  LocationIcon,
  logo,
  MailIcon,
  NoteIcon,
  Stars,
  TickSvg,
  UserIcon,
} from "@/assets";
import sizer from "@/constants/sizer";
import { router } from "expo-router";

const SignUp = () => {
  const [isSelected, setSelected] = useState(false);

  return (
    <ScrollView>
      <Container>
        <View style={styles.imageView}>
          <Image source={logo} />
        </View>

        <Typography size={22} mT={19} fontType="secondary" medium>
          Create New Account
        </Typography>

        <Typography mT={12} light color={"#4C4C4C"} LineHeight={24}>
          Claim Your Account: Register today for access to our platform.
        </Typography>

        <InputField
          label="First Name"
          placeholder="First Name"
          mt={31}
          RightIcon={() => {
            return <UserIcon />;
          }}
        />

        <InputField
          label="Last Name"
          placeholder="Last Name"
          RightIcon={() => {
            return <UserIcon />;
          }}
        />

        <InputField
          label="Email Address"
          placeholder="Email Address"
          RightIcon={() => {
            return <MailIcon />;
          }}
        />

        <PasswordField label="Password" placeholder="******" />

        <PasswordField label="Confirm Password" placeholder="******" />

        <InputField
          label="Address"
          placeholder="Add Address"
          RightIcon={() => <LocationIcon />}
        />

        <InputField
          label="Note"
          placeholder="Add Note"
          RightIcon={() => <NoteIcon />}
        />

        <Flex gap={10} mT={26} alignItems="center">
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
          <Typography size={14} light color={"#212121"} letterSpacing={0.1}>
            I would like to receive marketing e-mails.
          </Typography>
        </Flex>

        <Flex gap={10} mT={16} alignItems="center">
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
          <Flex justifyContent="center">
            <Typography size={14} light color={"#212121"}>
              I have read and agree to the{" "}
            </Typography>

            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Typography size={14} bold color={COLORS.secondary}>
                terms and conditions.
              </Typography>
            </TouchableOpacity>
          </Flex>
        </Flex>

        <Button label="Sign Up" mT={44} Icon={<Stars />} />

        <Flex mT={32} mB={37} justifyContent="center">
          <Typography size={14} light>
            Already Have an account?{" "}
          </Typography>

          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Typography size={14} bold color={COLORS.secondary}>
              Login
            </Typography>
          </TouchableOpacity>
        </Flex>
      </Container>
    </ScrollView>
  );
};

export default SignUp;

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
