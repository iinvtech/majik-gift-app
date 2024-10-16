import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';

import {COLORS} from '../../../globals';
import {ModalWrapper} from '../index';

const TimePickerComponent = ({visible, setVisible, current, onDateChange}) => {
  const today = moment().format('YYYY/MM/DD');

  return (
    <ModalWrapper isVisible={visible} setVisible={setVisible}>
      <DatePicker
        options={{
          backgroundColor: COLORS.white,
          textHeaderColor: COLORS.secondary,
          textDefaultColor: COLORS.black,
          selectedTextColor: '#fff',
          mainColor: COLORS.secondary,
          textSecondaryColor: COLORS.secondary,
          borderColor: '#000',
          textFontSize: 18,
          selectedFontWeight: 'bold',
        }}
        current={current}
        minimumDate={today}
        selected={current}
        mode="time"
        minuteInterval={1}
        onTimeChange={time => {
          const formattedTime = moment(time, 'HH:mm').format('HH:mm');
          onDateChange(formattedTime);
        }}
      />
    </ModalWrapper>
  );
};

export default TimePickerComponent;
