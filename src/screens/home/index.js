import {ScrollView, StyleSheet} from 'react-native';
import {
  Catagories,
  Container,
  Header,
  HorizontalFlatlist,
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
      </Container>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
