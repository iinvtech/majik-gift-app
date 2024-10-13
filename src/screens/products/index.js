import {ScrollView, StyleSheet} from 'react-native';

import {
  BackButton,
  Container,
  Flex,
  HorizontalFlatlist,
  MainCard,
  ScrollableCard,
  SearchField,
} from '../../components';

import {FilterIcon, NotificationIcon} from '../../assets';
import {cardData} from '../../components/data';

const Products = () => {
  return (
    <ScrollView>
      <Container>
        <BackButton title="Products" Icon={NotificationIcon} />
        <SearchField Icon={FilterIcon} />

        <ScrollableCard />
        
        <Flex justifyContent="space-between" mT={24} style={{flexWrap: 'wrap'}}>
          {cardData.map((card, i) => (
            <MainCard key={i} item={card} />
          ))}
        </Flex>
      </Container>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({});
