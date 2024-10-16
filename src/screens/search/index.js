import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {NotificationIcon, SearchHistoryEmpty, SearchIcon} from '../../assets';
import {sizer} from '../../helpers';
import {
  BackButton,
  Container,
  Flex,
  HistoryItem,
  MainCard,
} from '../../components';
import {COLORS, paddingHorizontal} from '../../../globals';
import {cardData} from '../../components/data';
import {debounce} from 'lodash';
import {useSearch} from '../../hooks/useSearch';

const Search = ({mT = 26}) => {
  const [isFocused, setIsFocused] = useState(true);
  const [searchText, setSearchText] = useState('');

  const historyData = [
    {
      id: 1,
      name: 'Benjamin Graham',
    },
    {
      id: 2,
      name: 'Warren Buffet',
    },
    {
      id: 3,
      name: 'Charlie Munger',
    },
    {
      id: 4,
      name: 'Peter Lynch',
    },
    {
      id: 5,
      name: 'John Templeton',
    },
  ];

  const [data, setData] = useState(historyData);
  const onDelete = id => {
    const newArr = data.filter(obj => obj.id !== id);
    setData(newArr);
  };

  const {searchedData, query, setQuery} = useSearch('products');

  const debouncedSearch = useCallback(
    debounce(text => {
      setQuery(text), 1000;
    }),
    [],
  );

  useEffect(() => {
    debouncedSearch(searchText);
  }, [searchText, debouncedSearch]);

  return (
    <Container>
      <BackButton title="Search" Icon={NotificationIcon} />
      <View style={[styles.main, {marginTop: sizer.moderateVerticalScale(mT)}]}>
        <TextInput
          style={styles.inputStyles}
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          // onBlur={() => setIsFocused(false)}
          onChangeText={text => setSearchText(text)}
          placeholderTextColor={COLORS.black}
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
        <FlatList
          data={data}
          renderItem={({item}) => (
            <HistoryItem item={item} onDelete={onDelete} />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
          }}
          style={{
            marginTop: sizer.moderateVerticalScale(24),
            marginHorizontal: sizer.moderateVerticalScale(-paddingHorizontal),
          }}
          ListEmptyComponent={
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <SearchHistoryEmpty />
            </View>
          }
        />
      ) : searchText !== '' ? (
        // <Flex justifyContent="space-between" mT={24} style={{flexWrap: 'wrap'}}>
        //   {cardData.map((card, i) => (
        //     <MainCard key={i} item={card} />
        //   ))}
        // </Flex>

        <FlatList
          data={searchedData}
          // numColumns={2}
          // columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => <MainCard key={item.id} item={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: sizer.moderateVerticalScale(23),
            paddingHorizontal: sizer.moderateScale(1),
          }}
        />
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
