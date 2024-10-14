import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {
  BackButton,
  Button,
  Container,
  Flex,
  InputField,
  OutlinedButton,
  Typography,
} from '../../components';
import {sizer} from '../../helpers';
import {CameraIcon} from '../../assets';
import {baseOpacity, COLORS} from '../../../globals';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
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

      <InputField label="First Name" placeholder="First Name" mt={31} mb={0} />
      <InputField label="Last Name" placeholder="Last Name" mt={16} mb={0} />
      <InputField
        label="Email Address"
        placeholder="Email Address"
        mt={16}
        mb={0}
      />
      <InputField label="Address" placeholder="Address" mt={16} mb={0} />

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

      <Flex style={styles.buttonContainer} gap={6}>
        <OutlinedButton label="Cancel" width={133} height={42} />
        <Button
          label="Save changes"
          width={133}
          height={42}
        />
      </Flex>
    </Container>
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
