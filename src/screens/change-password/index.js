import {ScrollView, StyleSheet} from 'react-native';

import {
  BackButton,
  Button,
  Container,
  PasswordField,
  Typography,
} from '../../components';
import {ChangePassSvg} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const ChangePassword = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <Container>
          <BackButton />
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
            // handleChange={(e) => handleFormData(e, "password")}
            // error={formErr.password}
          />

          <PasswordField
            label="Confirm Password"
            placeholder="******"
            // handleChange={(e) => handleFormData(e, "password")}
            // error={formErr.password}
          />

          <Button
            label="Submit"
            mT={39}
            mB={50}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </Container>
      </ScrollView>
    </>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
