import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  BackButton,
  Button,
  Container,
  InputField,
  Typography,
} from '../../components';
import {ForgetPasswordSvg, MailIcon} from '../../assets';

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <Container>
          <BackButton />
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
          />

          <Button
            label="Send Code"
            mT={39}
            mB={50}
            onPress={() => {
              navigation.navigate('OtpVerification');
            }}
          />
        </Container>
      </ScrollView>
    </>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  imageView: {
    backgroundColor: ' pink',
  },
});
