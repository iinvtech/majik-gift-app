import {ScrollView, StyleSheet} from 'react-native';
import {
  Catagories,
  Container,
  Header,
  HorizontalFlatlist,
  MainCard,
  SearchField,
  Typography,
} from '../../components';

const Home = () => {
  return (
    <ScrollView>
      <Container>
        <Header />
        <SearchField />

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
          data={[1, 2, 3]}
          renderItem={({item}) => <MainCard mT={30} />}
          contentContainerStyle={{gap: 20}}
        />

        <Typography fontType="secondary" mT={24} size={18}>
          Lightworkers
        </Typography>

        <HorizontalFlatlist
          data={[1, 2, 3]}
          renderItem={({item}) => <MainCard mT={30} />}
          contentContainerStyle={{gap: 20}}
        />

        <Typography fontType="secondary" mT={24} size={18}>
          Upcoming Events
        </Typography>

        <HorizontalFlatlist
          data={[1, 2, 3]}
          renderItem={({item}) => <MainCard mT={30} />}
          contentContainerStyle={{gap: 20}}
        />
      </Container>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
