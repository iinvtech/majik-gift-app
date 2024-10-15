import {FlatList, StyleSheet, View} from 'react-native';

import {
  BackButton,
  Container,
  MainCard,
  ScrollableCard,
  SearchField,
} from '../../components';

import {FilterIcon, NotificationIcon} from '../../assets';
import {cardData} from '../../components/data';
import {paddingHorizontal} from '../../../globals';
import {sizer} from '../../helpers';

const Lightwoker = () => {
  return (
    <Container>
      <BackButton title="Lightworkers" Icon={NotificationIcon} />

      <FlatList
        data={cardData}
        ListHeaderComponent={() => {
          return (
            <View style={{marginBottom: sizer.moderateVerticalScale(23)}}>
              <SearchField Icon={FilterIcon} mT={0} />
              <View style={{marginHorizontal: -paddingHorizontal}}>
                <ScrollableCard />
              </View>
            </View>
          );
        }}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <MainCard key={item.id} item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: sizer.moderateVerticalScale(23),
          paddingHorizontal: sizer.moderateScale(1),
        }}
      />
    </Container>
  );
};

export default Lightwoker;

const styles = StyleSheet.create({});
