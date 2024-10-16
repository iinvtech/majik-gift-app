import {useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';

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
import {ApiManager, sizer} from '../../helpers';
import {CameraIcon} from '../../assets';
import {baseOpacity, COLORS, dummy_img} from '../../../globals';

import {
  validateEmail,
  validateEmptyField,
  validateName,
  validatePhone,
} from '../../helpers/validator';
import {login, openToast, toggleLoader} from '../../store/reducer';

const EditProfile = () => {
  const {user} = useSelector(state => state.storeReducer);

  const [formData, setFormData] = useState({
    profile_image: dummy_img || null,
    first_name: user?.details?.first_name || '',
    last_name: user?.details?.last_name || '',
    email: user?.details?.email || '',
    phone_number: user?.details?.phone_number || '',
    address: user?.details?.address || '',
  });

  const [formErr, setFromErr] = useState({});
  const navigation = useNavigation();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const dispatch = useDispatch();

  const {first_name, last_name, email, phone_number, address} = formData;

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

  const validate = () => {
    let obj = {};
    obj.first_name = validateName(formData.first_name);
    obj.last_name = validateName(formData.last_name);
    obj.email = validateEmail(formData.email);
    obj.phone_number = validatePhone(formData.phone_number);
    obj.address = validateEmptyField(formData.address);

    if (!Object.values(obj).every(value => value === '')) {
      setFromErr(obj);
      return true;
    }
    return false;
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
        setFormData({...formData, profile_image: res.assets[0].uri});
      }
    });
  };

  const handleSave = async () => {
    if (validate()) return;
    dispatch(toggleLoader(true));
    let _fd = new FormData();
    _fd.append('first_name', formData?.first_name);
    _fd.append('last_name', formData?.last_name);
    _fd.append('email', formData?.email);
    _fd.append('phone_number', formData?.phone_number);
    _fd.append('address', formData?.address);
    if (!!formData?.profile_image) {
      _fd.append('profile_image', {
        uri: formData?.profile_image,
        type: 'image/jpeg',
        name: 'myImage.jpg',
      });
    }

    try {
      let {data} = await ApiManager('put', `users`, _fd, {
        'content-type': 'multipart/form-data',
      });
      dispatch(login(data?.data));
      dispatch(openToast({type: 'success', message: data?.message}));
      navigation.navigate('Profile');
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Container>
        <BackButton title="Edit Profile" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{uri: formData?.profile_image}}
            style={styles.profile_image}
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
            value={first_name}
            handleChange={e => handleFormData(e, 'first_name')}
            error={formErr.first_name}
            onSubmitEditing={() => lastNameRef?.current?.focus()}
          />
          <InputField
            label="Last Name"
            placeholder="Last Name"
            mt={16}
            mb={0}
            ref={lastNameRef}
            value={last_name}
            handleChange={e => handleFormData(e, 'last_name')}
            error={formErr.last_name}
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
            value={phone_number}
            ref={phoneRef}
            handleChange={e =>
              handleFormData(formatPhoneNumber(e), 'phone_number')
            }
            mt={16}
            mb={0}
            onSubmitEditing={() => addressRef.current.focus()}
            numPad
            error={formErr.phone_number}
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
              onPress={handleSave}
            />
          </Flex>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  profile_image: {
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
