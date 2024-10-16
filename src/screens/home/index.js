import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Catagories,
  Container,
  Header,
  HorizontalFlatlist,
  MainCard,
  ScrollableCard,
  SearchField,
  Typography,
  ViewAll,
} from '../../components';
import {paddingHorizontal} from '../../../globals';
import {cardData, HOME_SUGGESTIONS} from '../../components/data';

const Home = () => {
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
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => <Catagories mT={30} />}
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
