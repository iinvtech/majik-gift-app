import {useRef, useState} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  BackButton,
  Button,
  Container,
  PasswordField,
  Typography,
} from '../../components';
import {ChangePassSvg} from '../../assets';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    password: null,
    confirmPassword: '',
  });
  const [formErr, setFromErr] = useState({});
  const confirmPasswordRef = useRef();
  const navigation = useNavigation();

  const {password, confirmPassword} = formData;

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

  const handleSubmit = () => {
    navigation.navigate('SignIn');
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
            value={password}
            handleChange={e => handleFormData(e, 'password')}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            error={formErr.password}
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
