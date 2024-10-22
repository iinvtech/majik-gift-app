import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import {
  Catagories,
  Container,
  Header,
  HorizontalFlatlist,
  MainCard,
  ScrollableCard,
  SearchField,
  ViewAll,
} from '../../components';
import {paddingHorizontal} from '../../../globals';
import {cardData, HOME_SUGGESTIONS} from '../../components/data';
import {openToast, toggleLoader} from '../../store/reducer';
import {ApiManager} from '../../helpers';

const Home = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const getCatagories = async () => {
    dispatch(toggleLoader(true));
    try {
      const {data} = await ApiManager('get', 'service-category');
      setData(data?.response?.details);
    } catch (error) {
      dispatch(openToast({message: error?.response?.data?.message}));
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  useEffect(() => {
    if (isFocused) {
      getCatagories();
    }
  }, [isFocused]);

  return (
    <Container>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: -paddingHorizontal,
          paddingHorizontal: paddingHorizontal,
        }}>
        <SearchField />

        <View style={{marginHorizontal: -paddingHorizontal}}>
          <ScrollableCard data={HOME_SUGGESTIONS} home />
        </View>

        <ViewAll label="Categories" />

        <HorizontalFlatlist
          data={data}
          renderItem={({item}) => <Catagories mT={30} item={item} />}
          contentContainerStyle={{gap: 20}}
        />

        <ViewAll label=" Most Popular 🔥" />

        <HorizontalFlatlist
          data={cardData}
          renderItem={({item}) => <MainCard item={item} mT={30} width />}
          contentContainerStyle={{gap: 20}}
        />

        <ViewAll label="Lightworkers" />

        <HorizontalFlatlist
          data={cardData}
          renderItem={({item}) => <MainCard item={item} mT={30} width />}
          contentContainerStyle={{gap: 20}}
        />

        <ViewAll label="Upcoming Events" />

        <HorizontalFlatlist
          data={cardData}
          renderItem={({item}) => <MainCard item={item} mT={30} width />}
          contentContainerStyle={{gap: 20}}
        />
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
