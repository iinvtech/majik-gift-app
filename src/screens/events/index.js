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
import {cardData, EVENTS_SUGGESTIONS} from '../../components/data';
import {paddingHorizontal} from '../../../globals';

const Events = () => {
  return (
    <ScrollView>
      <Container>
        <BackButton title="Events" Icon={NotificationIcon} />
        <SearchField Icon={FilterIcon} />

        <View style={{marginHorizontal: -paddingHorizontal}}>
          <ScrollableCard data={EVENTS_SUGGESTIONS}/>
        </View>

        <Flex justifyContent="space-between" mT={24} style={{flexWrap: 'wrap'}}>
          {cardData.map((card, i) => (
            <MainCard key={i} item={card} />
          ))}
        </Flex>
      </Container>
    </ScrollView>
  );
};

export default Events;

const styles = StyleSheet.create({});
