import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Container, Typography} from '../../components';
import {
  LogoSvg,
  Stars,
  TickSecondary,
  TickSecondaryOutlinedGrey,
} from '../../assets';
import {sizer} from '../../helpers';
import {baseOpacity} from '../../../globals';

const SignupAs = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [role, setRole] = useState('customer');

  const navigation = useNavigation();

  const DATA = [
    {id: 1, value: 'customer', text: 'Customer'},
    {id: 2, value: 'light_worker', text: 'Lightworker'},
    {id: 3, value: 'stall_holder', text: 'Stall Holder'},
  ];

  const handleNext = () => {
    navigation.navigate('SignUp', {
      role: role,
    });
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageView}>
            <LogoSvg />
          </View>

          <Typography size={22} mT={19} fontType="secondary" medium>
            Sign up as?
          </Typography>

          <View style={{marginTop: sizer.moderateVerticalScale(32)}}>
            {DATA.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setActiveBtn(i);
                    setRole(item?.value);
                  }}
                  activeOpacity={baseOpacity}
                  style={[
                    styles.roleCont,
                    activeBtn == i && {
                      borderColor: '#9C90C2',
                    },
                  ]}>
                  <Typography
                    color={activeBtn == i ? '#9C90C2' : '#79747E'}
                    size={14}
                    medium
                    letterSpacing={0.5}>
                    {item.text}
                  </Typography>

                  {activeBtn == i ? (
                    <TickSecondary />
                  ) : (
                    <TickSecondaryOutlinedGrey />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          <Button label="Next" mT={44} Icon={<Stars />} onPress={handleNext} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignupAs;

const styles = StyleSheet.create({
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizer.moderateVerticalScale(40),
  },
  roleCont: {
    height: sizer.moderateVerticalScale(55),
    backgroundColor: '#9C90C21F',
    borderRadius: 4,
    borderWidth: sizer.moderateScale(0.5),
    borderColor: '#79747E',
    marginBottom: sizer.moderateVerticalScale(22),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizer.moderateScale(16),
  },
});
