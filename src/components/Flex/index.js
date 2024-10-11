import {StyleSheet, View} from 'react-native';

const Flex = ({
  children,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  gap = 0,
  flexDirection = 'row',
  mT = 0,
  mB = 0,
  style,
}) => {
  return (
    <View
      style={[
        styles.main,
        {
          alignItems: alignItems,
          gap: gap,
          justifyContent: justifyContent,
          flexDirection: flexDirection,
          marginTop: mT,
          marginBottom: mB,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
});
