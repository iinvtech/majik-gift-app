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
    <ScrollView>
      <Container>
        <BackButton title="Wishlist" Icon={NotificationIcon} />
        <SearchField Icon={FilterIcon} />

        <Flex justifyContent="space-between" mT={24} style={{flexWrap: 'wrap'}}>
          {cardData.map((card, i) => (
            <MainCard key={i} item={card} />
          ))}
        </Flex>
      </Container>
    </ScrollView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
