import { FlatList, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react"; // Ensure React is imported
import sizer from "@/constants/sizer";

interface FlatlistProps<T> {
  data: Array<T>;
  renderItem: ({ item }: { item: T }) => React.ReactElement;
  contentContainerStyle?: ViewStyle;
  // emptyText?: string;
}

const HorizontalFlatlist = <T,>({
  data,
  renderItem,
  contentContainerStyle = {},
}: // emptyText,
FlatlistProps<T>) => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      style={{
        marginHorizontal: sizer.moderateScale(-25),
      }}
      contentContainerStyle={[
        {
          paddingHorizontal: sizer.moderateScale(25),
          gap: 8,
        },
        contentContainerStyle,
      ]}
      ListEmptyComponent={
        <View style={styles.emptyData}>
          <Text>No Data Found</Text>
          {/* <EmptyState width={150} height={150} message={emptyText} /> */}
        </View>
      }
    />
  );
};

export default HorizontalFlatlist;

const styles = StyleSheet.create({
  emptyData: {
    justifyContent: "center",
    alignItems: "center",
  },
});
