import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';

import {
  Container,
  Flex,
  Typography,
  InputField,
  Button,
  PasswordField,
} from '../../components';
import {LogoSvg, Stars, TickSvg} from '../../assets';
import {COLORS} from '../../../globals';
import {sizer} from '../../helpers';
import {validateEmail, validatePassword} from '../../helpers/validator';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErr, setFromErr] = useState({});
  const [isSelected, setSelected] = useState(false);
  const passwordRef = useRef();
  const navigation = useNavigation();
  const {email, password} = formData;

  const handleFormData = (value, name, onlyNums) => {
    if (onlyNums && isNaN(value)) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    setFromErr({
      ...formErr,
      [name]: '',
    });
  };

  const validate = () => {
    let obj = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    if (!Object.values(obj).every(value => value === '')) {
      setFromErr(obj);
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    // if (validate()) return;
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <Container>
        <View style={styles.imageView}>
          <LogoSvg />
        </View>

        <Typography size={22} mT={19} fontType="secondary" medium>
          Hey! Welcome 👋🏼
        </Typography>

        <Typography mT={12} light color={'#4C4C4C'} LineHeight={24}>
          Please enter your credentials to access your account.
        </Typography>

        <InputField
          label="Username/Email"
          placeholder="Enter Username/Email"
          mt={41}
          error={formErr.email}
          value={email}
          handleChange={e => handleFormData(e, 'email')}
          onSubmitEditing={() => passwordRef?.current?.focus()}
        />

        <PasswordField
          label="Password"
          placeholder="******"
          mt={22}
          handleChange={e => handleFormData(e, 'password')}
          ref={passwordRef}
          error={formErr.password}
          onSubmitEditing={handleSubmit}
        />

        <View style={styles.forgotPass}>
          <Flex gap={5} alignItems="center">
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
            <Typography size={12} color={COLORS.grey}>
              Remember me
            </Typography>
          </Flex>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}>
            <Typography size={12}>Forget password?</Typography>
          </TouchableOpacity>
        </View>

        <Button label="Login" mT={44} Icon={<Stars />} onPress={handleSubmit} />

        <Flex mT={30} justifyContent="center">
          <Typography size={14} light>
            Don’t have an account?{' '}
          </Typography>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Typography size={14} color={COLORS.secondary}>
              Sign up
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizer.moderateVerticalScale(40),
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
