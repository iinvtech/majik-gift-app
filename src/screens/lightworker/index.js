import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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

const Lightwoker = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getLightworkerss = async () => {
    dispatch(toggleLoader(true));
    try {
      const {data} = await ApiManager('get', 'users?role=light_worker');
      setData(data?.response?.details);
    } catch (error) {
      dispatch(openToast({message: error?.response?.data?.message}));
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  useEffect(() => {
    getLightworkerss();
  }, []);
  return (
    <Container>
      <BackButton title="Lightworkers" Icon={NotificationIcon} />

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

export default Lightwoker;

const styles = StyleSheet.create({});
