import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import {SearchIcon} from '../../assets';
import {sizer} from '../../helpers';
import {BackButton, Container, Typography} from '../../components';

const Search = ({mT = 26}) => {
  const [isFocused, setIsFocused] = useState(true);
  const [searchText, setSearchText] = useState('');

  console.log(searchText === '');

  return (
    <Container>
      <BackButton />
      <View style={[styles.main, {marginTop: sizer.moderateVerticalScale(mT)}]}>
        <TextInput
          style={styles.inputStyles}
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {}}
          style={styles.imageView}>
          <SearchIcon />
        </TouchableOpacity>
      </View>

      {isFocused && searchText === '' ? (
        <View style={styles.componentOne}>
          <Typography>HEelo 1 </Typography>
        </View>
      ) : searchText !== '' ? (
        <View style={styles.componentTwo}>
          <Typography>HEelo 2 </Typography>
        </View>
      ) : null}
    </Container>
  );
};

export default Search;

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
  componentOne: {},
  componentTwo: {},
});
