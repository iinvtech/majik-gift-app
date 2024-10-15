import {useRef, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  BackButton,
  Button,
  Container,
  Flex,
  OutlinedButton,
  PasswordField,
} from '../../components';
import {sizer} from '../../helpers';
import {COLORS} from '../../../globals';
import {
  validateConfirmPassword,
  validatePassword,
} from '../../helpers/validator';

const ChangePasswordFromProfile = () => {
  const [formData, setFormData] = useState({
    oldPassword: null,
    newPassword: '',
    reEnterNewPassword: '',
  });
  const [formErr, setFromErr] = useState({});
  const navigation = useNavigation();
  const newPassRef = useRef();
  const reEnterNewPassRef = useRef();

  const {oldPassword, newPassword, reEnterNewPassword} = formData;

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

    obj.oldPassword = validatePassword(oldPassword);
    obj.newPassword = validatePassword(newPassword);
    obj.reEnterNewPassword = validateConfirmPassword(
      newPassword,
      reEnterNewPassword,
    );

    if (!Object.values(obj).every(value => value === '')) {
      setFromErr(obj);
      return true;
    }
    return false;
  };

  const handleSave = () => {
    // if (validate()) {
    //   return;
    // }
    navigation.navigate('Profile');
  };

  return (
    <Container>
      <BackButton title="Change Password" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <PasswordField
            label="Old Password"
            placeholder="**********"
            mt={31}
            mb={0}
            value={oldPassword}
            handleChange={e => handleFormData(e, 'oldPassword')}
            onSubmitEditing={() => newPassRef.current.focus()}
            error={formErr.oldPassword}
          />
          <PasswordField
            label="New Password"
            placeholder="**********"
            mt={16}
            mb={0}
            ref={newPassRef}
            value={newPassword}
            handleChange={e => handleFormData(e, 'newPassword')}
            onSubmitEditing={() => reEnterNewPassRef.current.focus()}
            error={formErr.newPassword}
          />

          <PasswordField
            label="Re-Enter New Password"
            placeholder="**********"
            mt={16}
            mb={0}
            ref={reEnterNewPassRef}
            value={reEnterNewPassword}
            handleChange={e => handleFormData(e, 'reEnterNewPassword')}
            onSubmitEditing={handleSave}
            error={formErr.reEnterNewPassword}
          />

          <Flex style={styles.buttonContainer} gap={6}>
            <OutlinedButton
              label="Cancel"
              width={133}
              height={42}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Button
              label="Save changes"
              width={133}
              height={42}
              onPress={handleSave}
            />
          </Flex>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
};

export default ChangePasswordFromProfile;

const styles = StyleSheet.create({
  profileImage: {
    borderRadius: 100,
    marginTop: sizer.moderateVerticalScale(54),
    alignSelf: 'center',
    width: 142,
    height: 152,
  },
  cameraIconWrapper: {
    width: sizer.moderateScale(35),
    height: sizer.moderateVerticalScale(35),
    backgroundColor: COLORS.secondary,
    borderRadius: 100,
    position: 'absolute',
    top: sizer.moderateVerticalScale(161),
    left: sizer.moderateScale(180),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginTop: sizer.moderateVerticalScale(44),
  },
});
