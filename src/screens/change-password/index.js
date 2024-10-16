import {useRef, useState} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {
  BackButton,
  Button,
  Container,
  PasswordField,
  Typography,
} from '../../components';
import {ChangePassSvg} from '../../assets';
import {
  validateConfirmPassword,
  validatePassword,
} from '../../helpers/validator';
import {openToast, toggleLoader} from '../../store/reducer';
import {ApiManager} from '../../helpers';

const ChangePassword = ({route}) => {
  const {otpId} = route?.params;
  const [formData, setFormData] = useState({
    new_password: null,
    confirmPassword: '',
  });
  const [formErr, setFromErr] = useState({});
  const confirmPasswordRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {new_password, confirmPassword} = formData;

  const handleFormData = (value, name) => {
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
    let obj = {};
    obj.new_password = validatePassword(new_password);
    obj.confirmPassword = validateConfirmPassword(
      new_password,
      confirmPassword,
    );
    if (!Object.values(obj).every(value => value === '')) {
      setFromErr(obj);
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    if (validate()) return;
    dispatch(toggleLoader(true));
    try {
      let {data} = await ApiManager('post', 'auth/reset-password', {
        otp_id: otpId,
        new_password: new_password,
      });

      dispatch(openToast({type: 'success', message: data?.message}));
      navigation.navigate('SignIn');
    } catch (error) {
      if (error?.response?.status === 422) {
        setFromErr(error?.response?.data?.message);
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
      <BackButton />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ChangePassSvg />

          <Typography size={22} fontType="secondary" medium>
            Change Password!
          </Typography>

          <Typography mT={12} light color={'#4C4C4C'} LineHeight={24}>
            Update your password for added security and peace of mind. Keep your
            account safe with a new, strong password.
          </Typography>

          <PasswordField
            label="Password"
            placeholder="******"
            mt={22}
            value={new_password}
            handleChange={e => handleFormData(e, 'new_password')}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            error={formErr.new_password}
          />

          <PasswordField
            label="Confirm Password"
            placeholder="******"
            ref={confirmPasswordRef}
            value={confirmPassword}
            handleChange={e => handleFormData(e, 'confirmPassword')}
            error={formErr.confirmPassword}
            onSubmitEditing={handleSubmit}
          />

          <Button label="Submit" mT={39} mB={50} onPress={handleSubmit} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default ChangePassword;
