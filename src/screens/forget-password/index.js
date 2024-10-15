import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  BackButton,
  Button,
  Container,
  InputField,
  Typography,
} from '../../components';
import {ForgetPasswordSvg, MailIcon} from '../../assets';
import {useState} from 'react';

const ForgetPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [formErr, setFromErr] = useState({});
  const navigation = useNavigation();

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

  const handleSubmit = () => {
    navigation.navigate('OtpVerification');
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <BackButton />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageView}>
            <ForgetPasswordSvg />
          </View>

          <Typography size={22} mT={19} fontType="secondary" medium>
            Forgot Password?
          </Typography>

          <Typography mT={12} light color={'#4C4C4C'} LineHeight={24}>
            Locked out of your account? Regain access hassle-free with a
            password reset.
          </Typography>

          <InputField
            label="Email Address"
            placeholder="Email Address"
            RightIcon={() => <MailIcon />}
            mt={26}
            value={formData?.email}
            handleChange={e => handleFormData(e, 'email')}
            error={formErr.email}
            onSubmitEditing={handleSubmit}
          />

          <Button label="Send Code" mT={30} mB={50} onPress={handleSubmit} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  imageView: {
    backgroundColor: ' pink',
  },
});
