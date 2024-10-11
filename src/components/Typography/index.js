import React from 'react';
import {Text} from 'react-native';

import {COLORS} from '../../../globals';
import {Lato, LibreBodoni, sizer} from '../../helpers';

const Typography = ({
  children,
  color = COLORS.black,
  bold,
  medium,
  light,
  size = 16,
  mT = 0,
  mB = 0,
  textAlign = 'left',
  LineHeight,
  numberOfLines,
  ellipsizeMode,
  letterSpacing,
  underline = false,
  style = {},
  fontType = 'primary',
}) => {
  const Font = fontType === 'secondary' ? LibreBodoni : Lato;

  const fontStyle = bold
    ? Font.bold()
    : medium
    ? Font.medium()
    : light
    ? Font.light()
    : Font.regular();

  const styledText = {
    color: color,
    fontSize: sizer.fontScale(size),
    marginTop: sizer.moderateVerticalScale(mT),
    marginBottom: sizer.moderateVerticalScale(mB),
    textAlign: textAlign,
    ...(LineHeight && {lineHeight: LineHeight}),
    ...(letterSpacing && {letterSpacing: letterSpacing}),
    ...(underline && {textDecorationLine: 'underline'}),
    ...fontStyle,
    ...style,
  };

  return (
    <Text
      style={styledText}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode ? 'tail' : undefined}>
      {children}
    </Text>
  );
};

export default Typography;
