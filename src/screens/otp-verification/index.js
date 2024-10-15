import {KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';

import {
  BackButton,
  Button,
  Container,
  Flex,
  Typography,
} from '../../components';
import {OtpVerify} from '../../assets';
import {baseOpacity, COLORS} from '../../../globals';
import {sizer} from '../../helpers';

const Verification = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <BackButton />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageView}>
            <OtpVerify />
          </View>

          <Typography size={22} mT={19} fontType="secondary" medium>
            Otp Verification
          </Typography>

          <Typography mT={12} color={'#4C4C4C'} LineHeight={24}>
            An Email has been sent to your Email
          </Typography>

          <TextInput
            placeholder="Enter 4-digits OTP"
            style={styles.inputStyles}
            placeholderTextColor={COLORS.grey}
            underlineColor={COLORS.grey}
            keyboardType="numeric"
            activeUnderlineColor={COLORS.grey}
          />

          <Typography
            size={14}
            mT={28}
            medium
            textAlign="center"
            color={COLORS.greyV2}>
            00:00 Sec
          </Typography>

          <Flex mT={18} justifyContent="center">
            <Typography size={14} light>
              Don’t receive code?{' '}
            </Typography>

            <TouchableOpacity activeOpacity={baseOpacity} onPress={() => {}}>
              <Typography bold size={14} color={COLORS.secondary}>
                Re-send
              </Typography>
            </TouchableOpacity>
          </Flex>

          <Button
            label="Continue"
            mT={39}
            mB={50}
            onPress={() => {
              navigation.navigate('ChangePassword');
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Verification;

const styles = StyleSheet.create({
  inputStyles: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    marginTop: sizer.moderateVerticalScale(28),
    fontSize: sizer.fontScale(12),
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
