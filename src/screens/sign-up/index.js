import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';

import {
  Button,
  Container,
  Flex,
  InputField,
  PasswordField,
  PhoneNumberField,
  Typography,
} from '../../components';

import {
  LocationIcon,
  LogoSvg,
  MailIcon,
  NoteIcon,
  PhoneIcon,
  Stars,
  UserIcon,
} from '../../assets';
import {COLORS} from '../../../globals';
import {sizer} from '../../helpers';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../store/reducer';
import {useDispatch} from 'react-redux';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    note: '',
  });
  const [formErr, setFromErr] = useState({});
  const navigation = useNavigation();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const noteRef = useRef();
  const dispatch = useDispatch();
  const [isSelected, setSelected] = useState(false);

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    address,
    note,
  } = formData;

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

  const formatPhoneNumber = text => {
    let phone = String(text)?.replace(/\D+/g, '');
    if (phone.length > 6) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(
        6,
        10,
      )}`;
    } else if (phone.length > 3) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    } else if (phone.length > 0) {
      return `(${phone}`;
    } else {
      return '';
    }
  };

  const handleSignup = () => {
    dispatch(login());
  };

  return (
    <ScrollView>
      <Container>
        <View style={styles.imageView}>
          <LogoSvg />
        </View>
        <Typography size={22} mT={19} fontType="secondary" medium>
          Create New Account
        </Typography>

        <Typography mT={12} light color={'#4C4C4C'} LineHeight={24}>
          Claim Your Account: Register today for access to our platform.
        </Typography>

        <InputField
          label="First Name"
          placeholder="First Name"
          mt={31}
          RightIcon={() => {
            return <UserIcon />;
          }}
          value={firstName}
          handleChange={e => handleFormData(e, 'firstName')}
          error={formErr.firstName}
          onSubmitEditing={() => lastNameRef?.current?.focus()}
        />

        <InputField
          label="Last Name"
          placeholder="Last Name"
          RightIcon={() => {
            return <UserIcon />;
          }}
          ref={lastNameRef}
          value={lastName}
          handleChange={e => handleFormData(e, 'lastName')}
          error={formErr.lastName}
          onSubmitEditing={() => emailRef?.current?.focus()}
        />

        <InputField
          label="Email Address"
          placeholder="Email Address"
          RightIcon={() => {
            return <MailIcon />;
          }}
          value={email}
          handleChange={e => handleFormData(e, 'email')}
          ref={emailRef}
          error={formErr.email}
          onSubmitEditing={() => passwordRef?.current.focus()}
        />

        <PasswordField
          mt={10}
          label="Password"
          placeholder="******"
          value={password}
          handleChange={e => handleFormData(e, 'password')}
          ref={passwordRef}
          error={formErr.password}
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
        />

        <PasswordField
          mt={10}
          label="Confirm Password"
          placeholder="******"
          value={confirmPassword}
          handleChange={e => handleFormData(e, 'confirmPassword')}
          ref={confirmPasswordRef}
          error={formErr.confirmPassword}
          onSubmitEditing={() => phoneRef.current.focus()}
        />

        <PhoneNumberField
          label="Phone number"
          placeholder="(000) 000-0000"
          RightIcon={() => <PhoneIcon width={13} height={13} />}
          value={phoneNumber}
          ref={phoneRef}
          handleChange={e =>
            handleFormData(formatPhoneNumber(e), 'phoneNumber')
          }
          mt={10}
          onSubmitEditing={() => addressRef.current.focus()}
          numPad
          error={formErr.phoneNumber}
          maxLength={14}
          countryCode={'+1'}
        />

        <InputField
          label="Address"
          placeholder="Add Address"
          RightIcon={() => <LocationIcon />}
          value={address}
          handleChange={e => handleFormData(e, 'address')}
          ref={addressRef}
          error={formErr.address}
          onSubmitEditing={() => noteRef?.current.focus()}
        />

        <InputField
          label="Note"
          placeholder="Add Note"
          RightIcon={() => <NoteIcon />}
          value={note}
          handleChange={e => handleFormData(e, 'note')}
          ref={noteRef}
          error={formErr.note}
          onSubmitEditing={handleSignup}
        />

        <Flex gap={10} mT={26} alignItems="center">
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
          <Typography size={14} light color={'#212121'} letterSpacing={0.1}>
            I would like to receive marketing e-mails.
          </Typography>
        </Flex>

        <Flex gap={10} mT={16} alignItems="center">
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
              I have read and agree to the{' '}
            </Typography>

            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Typography size={14} bold color={COLORS.secondary}>
                terms and conditions.
              </Typography>
            </TouchableOpacity>
          </Flex>
        </Flex>

        <Button
          label="Sign Up"
          mT={44}
          Icon={<Stars />}
          onPress={handleSignup}
        />

        <Flex mT={32} mB={37} justifyContent="center">
          <Typography size={14} light>
            Already Have an account?{' '}
          </Typography>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <Typography size={14} color={COLORS.secondary}>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizer.moderateVerticalScale(37),
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
