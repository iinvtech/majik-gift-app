import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = ({children}) => {
  return <View style={styles.main}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
