import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
  BackButton,
  Button,
  Container,
  Flex,
  Typography,
} from '../../components';
import {formatPhoneNumber, sizer} from '../../helpers';
import {
  LocationIconProfile,
  MailIconProfile,
  NotificationIcon,
  PhoneIconProfile,
} from '../../assets';
import {placeholder_profile} from '../../../globals';

const Profile = () => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.storeReducer);

  return (
    <Container>
      <BackButton title="Profile" Icon={NotificationIcon} />

      <View>
        <Image
          source={{uri: user?.details?.profile_image || placeholder_profile}}
          style={styles.profileImage}
        />
      </View>

      <Typography size={20} medium textAlign="center" mT={34}>
        {user?.details?.first_name + ' ' + user?.details?.last_name || 'user'}
      </Typography>

      <Flex gap={10} alignItems="center" mT={15} justifyContent="center">
        <MailIconProfile />
        <Typography size={14} light>
          {user?.details?.email || ''}
        </Typography>
      </Flex>

      <Flex gap={10} alignItems="center" mT={15} justifyContent="center">
        <LocationIconProfile />
        <Typography size={14} light>
          {user?.details?.address || ''}
        </Typography>
      </Flex>

      <Flex gap={10} alignItems="center" mT={15} justifyContent="center">
        <PhoneIconProfile />
        <Typography size={14} light>
          {formatPhoneNumber(user?.details?.phone_number) || ''}
        </Typography>
      </Flex>

      <View style={styles.buttonContainer}>
        <Button
          label="Edit Profile"
          width={133}
          height={42}
          mT={15}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
        />
      </View>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImage: {
    borderRadius: 100,
    marginTop: sizer.moderateVerticalScale(54),
    alignSelf: 'center',
    width: 142,
    height: 152,
  },

  buttonContainer: {
    alignSelf: 'center',
  },
});
