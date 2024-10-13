import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {sizer} from '../../helpers';

const HorizontalFlatlist = ({data, renderItem, contentContainerStyle = {}}) => {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
