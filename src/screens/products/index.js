import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  BackButton,
  Container,
  MainCard,
  ScrollableCard,
  SearchField,
} from '../../components';
import {FilterIcon, NotificationIcon} from '../../assets';
import {paddingHorizontal} from '../../../globals';
import {ApiManager, sizer} from '../../helpers';
import {openToast, toggleLoader} from '../../store/reducer';

const Products = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const getProducts = async () => {
    dispatch(toggleLoader(true));
    try {
      const {data} = await ApiManager('get', 'products');
      setData(data?.response?.details);
    } catch (error) {
      dispatch(openToast({message: error?.response?.data?.message}));
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <BackButton title="Products" Icon={NotificationIcon} />
      <FlatList
        data={data}
        ListHeaderComponent={() => {
          return (
            <View style={{marginBottom: sizer.moderateVerticalScale(23)}}>
              <SearchField Icon={FilterIcon} mT={0} />
              <View style={{marginHorizontal: -paddingHorizontal}}>
                <ScrollableCard />
              </View>
            </View>
          );
        }}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <MainCard key={item.id} item={item} />}
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

export default Products;

const styles = StyleSheet.create({});
