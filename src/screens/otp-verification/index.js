import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  BackButton,
  Button,
  Container,
  Flex,
  InputField,
  Typography,
} from '../../components';
import {OtpVerify} from '../../assets';
import {baseOpacity, COLORS} from '../../../globals';
import {ApiManager, sizer} from '../../helpers';
import {openToast, toggleLoader} from '../../store/reducer';

const Verification = ({route}) => {
  const {email} = route?.params;

  const [inputValue, setInputValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [btnDisable, setBtnDisable] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const validate = () => {
    if (!inputValue) {
      setErrorMsg('The OTP field is required.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleNext = async () => {
    if (!validate()) return;
    const formData = {
      email: email,
      otp: inputValue,
    };
    dispatch(toggleLoader(true));
    try {
      const {data} = await ApiManager('post', 'auth/verify-otp', formData);
      navigation.navigate('ChangePassword', {
        otpId: data?.response?.details?.otpId,
      });
    } catch (error) {
      if (error?.response?.status === 422) {
        setErrorMsg(error?.response?.data?.details);
        dispatch(openToast({message: error?.response?.data?.message}));
      } else {
        dispatch(openToast({message: error?.response?.data?.message}));
      }
    } finally {
      dispatch(toggleLoader(false));
    }
  };
  const handleResend = async () => {
    if (!validate()) return;
    dispatch(toggleLoader(true));
    try {
      const {data} = await ApiManager('post', 'auth/resend-otp', {
        email: email,
      });
    } catch (error) {
      if (error?.response?.status === 422) {
        setErrorMsg(error?.response?.data?.details);
        dispatch(openToast({message: error?.response?.data?.message}));
      } else {
        dispatch(openToast({message: error?.response?.data?.message}));
      }
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  useEffect(() => {
    let interval;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      setBtnDisable(true);
      return () => clearInterval(interval);
    } else {
      setBtnDisable(false);
    }
  }, [seconds]);

  const formatTime = sec => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      remainingSeconds < 10 ? '0' : ''
    }${remainingSeconds}`;
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <BackButton />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageView}>
            <OtpVerify />
          </View>

          <Typography size={22} mT={19} fontType="secondary" medium>
            Otp Verification
          </Typography>

          <Typography mT={12} color={'#4C4C4C'} LineHeight={24}>
            An Email has been sent to your Email
          </Typography>

          {/* <TextInput
            placeholder="Enter 4-digits OTP"
            style={styles.inputStyles}
            placeholderTextColor={COLORS.grey}
            underlineColor={COLORS.grey}
            // keyboardType="numeric"
            activeUnderlineColor={COLORS.grey}
            value={inputValue}
            onChangeText={handleInputChange}
          /> */}

          <InputField
            label="Enter OTP"
            value={inputValue}
            handleChange={value => {
              setInputValue(value);
              if (!!errorMsg) setErrorMsg('');
            }}
            error={errorMsg}
            placeholder="Enter 6-digits OTP"
            maxLength={6}
            containerSt={styles.inputStyles}
          />

          <Typography
            size={14}
            mT={28}
            medium
            textAlign="center"
            color={COLORS.greyV2}>
            {formatTime(seconds)} Sec
          </Typography>

          <Flex mT={18} justifyContent="center">
            <Typography size={14} light>
              Don’t receive code?{' '}
            </Typography>

            <TouchableOpacity
              btnDisable={btnDisable}
              activeOpacity={baseOpacity}
              onPress={() => {
                setSeconds(60);
                handleResend();
              }}>
              <Typography
                bold
                size={14}
                color={btnDisable ? COLORS.greyV1 : COLORS.secondary}>
                Re-send
              </Typography>
            </TouchableOpacity>
          </Flex>

          <Button label="Continue" mT={39} mB={50} onPress={handleNext} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Verification;

const styles = StyleSheet.create({
  inputStyles: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    marginTop: sizer.moderateVerticalScale(28),
    fontSize: sizer.fontScale(12),
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
