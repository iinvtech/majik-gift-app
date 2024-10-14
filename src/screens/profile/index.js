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
  CameraIcon,
  LocationIconProfile,
  MailIconProfile,
  PhoneIconProfile,
} from '../../assets';
import {COLORS} from '../../../globals';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton />

      <View>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/1eb1/b334/e13d23c353c9d4b8ee1fc406955b01dc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NuKnLS4HjKst6rzgfjuwvsMUHN-ys0uqDbkw2z20M~~yGPwHcVAoxEMsRduhUR2YfOEReBzA9hq4Ez2yzqlSLgSc8ZlAFt0ZztJ-yJe4lt82qpyIP~029U--87AvlJ-kLM-DDZmOXNztVsvdDWeI0mXateUoNm-8fqxhH8zZ~HO0JGNoWGnHWqOqICx8LoTqWx5TLH6EN2pWAyA6PPKlDHAKvJ2zyciWd76FtK5MC0AIIDIL5NYMx4X2XiNlD7XdCuHqQWqHLNNOigPqZPhwccyTkRxGdTQNRHnl-i2KQTAR2ugzAfOd2y~bNtAczGjUqK9xlOQM5s3Tpg6El3oqSg__',
          }}
          style={styles.profileImage}
        />

        <View style={styles.cameraIconWrapper}>
          <CameraIcon />
        </View>
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
        <OutlinedButton label="Cancel" width={133} height={42} mT={23} />
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
    alignSelf: 'center',
  },
});
