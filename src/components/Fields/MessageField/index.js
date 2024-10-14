import {Pressable, StyleSheet, TextInput} from 'react-native';

import {Flex} from '../../index';
import {Lato, sizer} from '../../../helpers';
import {SendIcon} from '../../../assets';
import {COLORS} from '../../../../globals';

const MessageField = ({
  value = '',
  handleSubmit = () => {},
  onChange = () => {},
  mT = 20,
}) => {
  return (
    <Flex
      mT={mT}
      alignItems='center'
      style={{
        marginBottom: sizer.moderateVerticalScale(16),
      }}>
      <Pressable
        onPress={handleSubmit}
        disabled={!value}
        style={[styles.sendBtn]}>
        {value && <SendIcon />}
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        placeholderTextColor={COLORS.greyV1}
        value={value}
        onChangeText={e => onChange(e)}
      />
    </Flex>
  );
};

export default MessageField;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: COLORS.whiteV1,
    borderRadius: sizer.fontScale(48),
    paddingLeft: sizer.moderateScale(21),
    paddingRight: sizer.moderateScale(50),
    // ...fontFamily.regular(),
    ...Lato.regular(),
    fontSize: sizer.fontScale(14),
    color: COLORS.black,
    lineHeight: sizer.moderateVerticalScale(16),
    paddingVertical: sizer.moderateVerticalScale(13),
  },
  sendBtn: {
    position: 'absolute',
    right: sizer.moderateScale(7),
    zIndex: 2,
    padding: sizer.fontScale(8),
  },
});
