import {
  Image,
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
  OutlinedButton,
  PhoneNumberField,
  Typography,
} from '../../components';
import {sizer} from '../../helpers';
import {CameraIcon} from '../../assets';
import {baseOpacity, COLORS, dummy_img} from '../../../globals';
import {useRef, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    profileImage: dummy_img || null,
    firstName: 'Johnson',
    lastName: 'Michele',
    email: 'JohnDoe@example.com',
    phoneNumber: '456-456-4565',
    address: 'Abc street, 123 city.',
  });
  const [formErr, setFromErr] = useState({});
  const navigation = useNavigation();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const {firstName, lastName, email, phoneNumber, address} = formData;

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

  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 500,
    maxWidth: 500,
  };

  const handleAddImage = () => {
    launchImageLibrary(options, res => {
      if (res.assets) {
        setFormData({...formData, profileImage: res.assets[0].uri});
      }
    });
  };

  const handleSave = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Container>
        <BackButton title="Edit Profile" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{uri: formData?.profileImage}}
            style={styles.profileImage}
          />

          <TouchableOpacity
            activeOpacity={baseOpacity}
            onPress={handleAddImage}
            style={styles.cameraIconWrapper}>
            <CameraIcon />
          </TouchableOpacity>

          <InputField
            label="First Name"
            placeholder="First Name"
            mt={31}
            mb={0}
            value={firstName}
            handleChange={e => handleFormData(e, 'firstName')}
            error={formErr.firstName}
            onSubmitEditing={() => lastNameRef?.current?.focus()}
          />
          <InputField
            label="Last Name"
            placeholder="Last Name"
            mt={16}
            mb={0}
            ref={lastNameRef}
            value={lastName}
            handleChange={e => handleFormData(e, 'lastName')}
            error={formErr.lastName}
            onSubmitEditing={() => emailRef?.current?.focus()}
          />
          <InputField
            label="Email Address"
            placeholder="Email Address"
            mt={16}
            mb={0}
            ref={emailRef}
            value={email}
            handleChange={e => handleFormData(e, 'email')}
            error={formErr.email}
            onSubmitEditing={() => phoneRef?.current?.focus()}
          />

          <PhoneNumberField
            label="Phone number"
            placeholder="(000) 000-0000"
            value={phoneNumber}
            ref={phoneRef}
            handleChange={e =>
              handleFormData(formatPhoneNumber(e), 'phoneNumber')
            }
            mt={16}
            mb={0}
            onSubmitEditing={() => addressRef.current.focus()}
            numPad
            error={formErr.phoneNumber}
            maxLength={14}
            countryCode={'+1'}
          />

          <InputField
            label="Address"
            placeholder="Address"
            mt={16}
            mb={0}
            value={address}
            handleChange={e => handleFormData(e, 'address')}
            error={formErr.address}
            onSubmitEditing={handleSave}
          />

          <TouchableOpacity
            activeOpacity={baseOpacity}
            onPress={() => {
              navigation.navigate('ChangePasswordFromProfile');
            }}>
            <Typography
              mT={10}
              color={COLORS.secondary}
              bold
              size={14}
              letterSpacing={0.5}>
              Change Password
            </Typography>
          </TouchableOpacity>

          <Flex style={styles.buttonContainer} gap={6} mB={30}>
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
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Flex>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

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
    marginTop: sizer.moderateVerticalScale(50),
  },
});
