import {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {
  BackButton,
  Container,
  MessageField,
  MessageItem,
} from '../../components';
import {COLORS} from '../../../globals';
import {chatData, dummyMessages} from '../../components/data';
import {sizer} from '../../helpers';

const ChatScreen = () => {
  const [messageText, setMessageText] = useState('');
  const messageSendHandler = () => {
    console.log('Message Sent!');
  };

  return (
    <Container>
      <BackButton title="Group Name" />

      <FlatList
        data={dummyMessages}
        renderItem={({item}) => {
          return <MessageItem item={item} index={item.id} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        inverted
        // ListFooterComponent={data.length && isLoading && <ActivityIndicator />}
        // ListEmptyComponent={
        //   isLoading ? (
        //     <ActivityIndicator size={40} style={styles.empty} />
        //   ) : (
        //     <EmptyState message={'No Data Found'} />
        //   )
        // }
        // contentContainerStyle={[
        //   styles.containerStyle,
        //   {
        //     flex: data?.length ? 0 : 1,
        //   },
        // ]}
        // onEndReached={() => {
        //   if (data.length >= perPage && hasMore) {
        //     getUserChat(chatId, data[data?.length - 1]?.id);
        //   }
        // }}
        // onEndReachedThreshold={0.6}
        // initialNumToRender={perPage}
        // maxToRenderPerBatch={perPage}
      />

      <MessageField
        value={messageText}
        handleSubmit={messageSendHandler}
        onChange={setMessageText}
      />
    </Container>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  flatListStyle: {
    flex: 1,
    backgroundColor: COLORS.lightblueV1,
    marginTop: sizer.moderateScale(10),
    // marginHorizontal: sizer.moderateScale(paddingHorizontal),
  },
});
