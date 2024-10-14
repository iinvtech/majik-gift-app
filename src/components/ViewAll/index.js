import {TouchableOpacity} from 'react-native';

import {Flex, Typography} from '../index';
import {baseOpacity, COLORS} from '../../../globals';

const ViewAll = ({
  label = '',
  onPress = () => {},
  mt = 24,
  mb = 0,
  showViewAll = true,
}) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" mT={mt} mB={mb}>
      <Typography fontType="secondary" size={18} bold>
        {label}
      </Typography>
      {showViewAll && (
        <TouchableOpacity
          activeOpacity={baseOpacity}
          onPress={onPress}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Typography size={13} color={COLORS.greyV6} bold>
            View all
          </Typography>
        </TouchableOpacity>
      )}
    </Flex>
  );
};

export default ViewAll;
