import {ScrollView, StyleSheet, View} from 'react-native';

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
import {paddingHorizontal} from '../../../globals';

const Products = () => {
  return (
    <Container>
      <BackButton title="Products" Icon={NotificationIcon} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchField Icon={FilterIcon} />

        <View style={{marginHorizontal: -paddingHorizontal}}>
          <ScrollableCard />
        </View>

        <Flex justifyContent="space-between" mT={24} style={{flexWrap: 'wrap'}}>
          {cardData.map((card, i) => (
            <MainCard key={i} item={card} />
          ))}
        </Flex>
      </ScrollView>
    </Container>
  );
};

export default Products;

const styles = StyleSheet.create({});
