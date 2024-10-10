import { FlatList, View } from "react-native";

import { Container, HistoryItem, SearchField } from "@/components";
import { paddingHorizontal } from "@/constants/Colors";
import { SearchHistoryEmpty } from "@/assets";
import sizer from "@/constants/sizer";
import { useState } from "react";

const SearchHistory = () => {
  const historyData = [
    {
      id: 1,
      name: "Benjamin Graham",
    },
    {
      id: 2,
      name: "Warren Buffet",
    },
    {
      id: 3,
      name: "Charlie Munger",
    },
    {
      id: 4,
      name: "Peter Lynch",
    },
    {
      id: 5,
      name: "John Templeton",
    },
  ];

  const [data, setData] = useState(historyData);
  const onDelete = (id: number) => {
    const newArr = data.filter((obj) => obj.id !== id);
    setData(newArr);
  };

  return (
    <Container>
      <SearchField mT={0} />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <HistoryItem item={item} onDelete={onDelete} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
        }}
        style={{
          marginTop: sizer.moderateVerticalScale(24),
          marginHorizontal: sizer.moderateVerticalScale(-paddingHorizontal),
        }}
        ListEmptyComponent={
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <SearchHistoryEmpty />
          </View>
        }
      />
    </Container>
  );
};

export default SearchHistory;
