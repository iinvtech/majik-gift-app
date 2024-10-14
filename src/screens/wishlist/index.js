import {ScrollView, StyleSheet} from 'react-native';

import {
  BackButton,
  Container,
  Flex,
  MainCard,
  SearchField,
} from '../../components';

import {FilterIcon, NotificationIcon} from '../../assets';
import {cardData} from '../../components/data';

const Wishlist = () => {
  return (
    <Container>
      <BackButton title="Wishlist" Icon={NotificationIcon} />
      <ScrollView>
        <SearchField Icon={FilterIcon} />

        <Flex
          justifyContent="space-between"
          mT={24}
          style={{flexWrap: 'wrap', marginHorizontal: 2}}>
          {cardData.map((card, i) => (
            <MainCard key={i} item={card} />
          ))}
        </Flex>
      </ScrollView>
    </Container>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
