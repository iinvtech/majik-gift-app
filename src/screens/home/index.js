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
} from '../../components';
import {paddingHorizontal} from '../../../globals';
import {cardData, HOME_SUGGESTIONS} from '../../components/data';

const Home = () => {
  return (
    <ScrollView>
      <Container>
        <Header />
        <SearchField />

        <View style={{marginHorizontal: -paddingHorizontal}}>
          <ScrollableCard data={HOME_SUGGESTIONS} home />
        </View>

        <Typography fontType="secondary" mT={24} size={18} bold>
          Catagories
        </Typography>

        <HorizontalFlatlist
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => <Catagories mT={30} />}
          contentContainerStyle={{gap: 20}}
        />

        <Typography fontType="secondary" mT={24} size={18}>
          Most Popular 🔥
        </Typography>

        <HorizontalFlatlist
          data={cardData}
          renderItem={({item}) => <MainCard item={item} mT={30} />}
          contentContainerStyle={{gap: 20}}
        />

        <Typography fontType="secondary" mT={24} size={18}>
          Lightworkers
        </Typography>

        <HorizontalFlatlist
          data={cardData}
          renderItem={({item}) => <MainCard item={item} mT={30} />}
          contentContainerStyle={{gap: 20}}
        />

        <Typography fontType="secondary" mT={24} size={18}>
          Upcoming Events
        </Typography>

        <HorizontalFlatlist
          data={cardData}
          renderItem={({item}) => <MainCard item={item} mT={30} />}
          contentContainerStyle={{gap: 20}}
        />
      </Container>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
