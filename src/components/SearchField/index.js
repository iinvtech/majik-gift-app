import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SearchIcon} from '../../assets';
import {sizer} from '../../helpers';
import {baseOpacity} from '../../../globals';

const SearchField = ({mT = 26, Icon = SearchIcon}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.main, {marginTop: sizer.moderateVerticalScale(mT)}]}>
      <TouchableOpacity
        activeOpacity={baseOpacity}
        onPress={() => {
          navigation.navigate('Search');
        }}
        style={styles.inputStyles}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {}}
        style={styles.imageView}>
        <Icon />
      </TouchableOpacity>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(46),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyles: {
    borderWidth: sizer.moderateScale(0.5),
    borderRadius: 25,
    overflow: 'hidden',
    paddingHorizontal: sizer.moderateScale(25),
    width: '84%',
  },
  imageView: {
    borderWidth: sizer.moderateScale(0.5),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '14%',
  },
});
