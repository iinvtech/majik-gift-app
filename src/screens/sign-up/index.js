import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

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
  TickSvg,
  UserIcon,
} from '../../assets';
import {COLORS} from '../../../globals';
import {ApiManager, sizer} from '../../helpers';
import {useNavigation} from '@react-navigation/native';
import {login, openToast, toggleLoader} from '../../store/reducer';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  validateConfirmPassword,
  validateEmail,
  validateEmptyField,
  validateName,
  validatePassword,
  validatePhone,
} from '../../helpers/validator';

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
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

  const [isMarketingSelected, setMarketingSelected] = useState(false);
  const [isTermsSelected, setTermsSelected] = useState(false);

  const {
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
    phone_number,
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

  const validate = () => {
    let obj = {};
    obj.first_name = validateName(first_name, 'The field is required');
    obj.last_name = validateName(last_name, 'The field is required');
    obj.email = validateEmail(email);
    obj.password = validatePassword(password);
    obj.address = validateEmptyField(address);
    obj.note = validateEmptyField(note);
    obj.confirmPassword = validateConfirmPassword(password, confirmPassword);
    obj.phone_number = validatePhone(phone_number);

    if (!Object.values(obj).every(value => value === '')) {
      setFromErr(obj);
      return true;
    }
    return false;
  };

  const handleSignup = async () => {
    if (validate()) return;
    dispatch(toggleLoader(true));

    try {
      const {confirmPassword, ...remaining} = formData;
      const newData = {
        ...remaining,
        phone_number: phone_number.replace(/\D+/g, ''),
      };
      const {data} = await ApiManager('post', 'auth/sign-up', newData);
      await AsyncStorage.setItem('access_token', data?.response?.access_token);
      dispatch(login(data?.response));
    } catch (error) {
      if (error?.response?.status === 422) {
        setFromErr(error?.response?.data?.details);
        dispatch(openToast({message: error?.response?.data?.message}));
      } else {
        dispatch(openToast({message: error?.response?.data?.message}));
      }
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            RightIcon={() => <UserIcon />}
            value={first_name}
            handleChange={e => handleFormData(e, 'first_name')}
            error={formErr.first_name}
            onSubmitEditing={() => lastNameRef?.current?.focus()}
          />

          <InputField
            label="Last Name"
            placeholder="Last Name"
            RightIcon={() => <UserIcon />}
            ref={lastNameRef}
            value={last_name}
            handleChange={e => handleFormData(e, 'last_name')}
            error={formErr.last_name}
            onSubmitEditing={() => emailRef?.current?.focus()}
          />

          <InputField
            label="Email Address"
            placeholder="Email Address"
            RightIcon={() => <MailIcon />}
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
            value={phone_number}
            ref={phoneRef}
            handleChange={e =>
              handleFormData(formatPhoneNumber(e), 'phone_number')
            }
            mt={10}
            onSubmitEditing={() => addressRef.current.focus()}
            numPad
            error={formErr.phone_number}
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
              onPress={() => setMarketingSelected(!isMarketingSelected)}>
              <View style={styles.box}>
                {isMarketingSelected ? (
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
              onPress={() => setTermsSelected(!isTermsSelected)}>
              <View style={styles.box}>
                {isTermsSelected ? (
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
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizer.moderateVerticalScale(37),
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
