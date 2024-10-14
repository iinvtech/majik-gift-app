import {FlatList, View} from 'react-native';

import {
  BackButton,
  Container,
  MessageInboxItem,
  SearchField,
} from '../../components';
import {sizer} from '../../helpers';
import {SearchHistoryEmpty} from '../../assets';

const MessageInbox = () => {
  return (
    <Container>
      <BackButton />
      <SearchField />

      <FlatList
        data={[1, 2, 3]}
        renderItem={({item}) => <MessageInboxItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        style={{
          marginTop: sizer.moderateVerticalScale(24),
        }}
        ListEmptyComponent={
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <SearchHistoryEmpty />
          </View>
        }
      />
    </Container>
  );
};

export default MessageInbox;
