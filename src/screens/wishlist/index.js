import {FlatList, StyleSheet, View} from 'react-native';

import {BackButton, Container, MainCard, SearchField} from '../../components';
import {FilterIcon, NotificationIcon} from '../../assets';
import {cardData} from '../../components/data';
import {ApiManager, sizer} from '../../helpers';
import {openToast, toggleLoader} from '../../store/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';

const Wishlist = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const getWishlists = async () => {
    dispatch(toggleLoader(true));
    try {
      const {data} = await ApiManager('get', 'wishlists');
      setData(data?.response?.details);
    } catch (error) {
      dispatch(openToast({message: error?.response?.data?.message}));
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  useEffect(() => {
    if (isFocused) {
      getWishlists();
    }
  }, [isFocused]);
  // console.log(data);

  return (
    <Container>
      <BackButton title="Wishlist" Icon={NotificationIcon} />

      <FlatList
        data={data}
        ListHeaderComponent={() => {
          return (
            <View style={{marginBottom: sizer.moderateVerticalScale(23)}}>
              <SearchField Icon={FilterIcon} mT={0} />
            </View>
          );
        }}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => (
          <MainCard mB={24} key={item.id} item={{...item, ...item.product}} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: sizer.moderateVerticalScale(23),
          paddingHorizontal: sizer.moderateScale(1),
        }}
      />
    </Container>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
