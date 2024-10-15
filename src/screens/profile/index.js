import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  BackButton,
  Button,
  Container,
  Flex,
  OutlinedButton,
  Typography,
} from '../../components';
import {sizer} from '../../helpers';
import {
  LocationIconProfile,
  MailIconProfile,
  NotificationIcon,
  PhoneIconProfile,
} from '../../assets';
import {dummy_img} from '../../../globals';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton title="Profile" Icon={NotificationIcon} />

      <View>
        <Image source={{uri: dummy_img}} style={styles.profileImage} />
      </View>

      <Typography size={20} medium textAlign="center" mT={34}>
        Johnson Michele
      </Typography>

      <Flex gap={10} alignItems="center" mT={15} justifyContent="center">
        <MailIconProfile />
        <Typography size={14} light>
          johnsonmichele@xyz.com
        </Typography>
      </Flex>

      <Flex gap={10} alignItems="center" mT={15} justifyContent="center">
        <LocationIconProfile />
        <Typography size={14} light>
          ABC Street, 123 City
        </Typography>
      </Flex>

      <Flex gap={10} alignItems="center" mT={15} justifyContent="center">
        <PhoneIconProfile />
        <Typography size={14} light>
          456 - 565 - 656 - 456
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
