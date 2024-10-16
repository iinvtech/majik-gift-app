import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';

import {COLORS} from '../../../globals';
import {ModalWrapper} from '../index';

const DatePickerComponent = ({visible, setVisible, current, onDateChange}) => {
  const today = moment().format('YYYY/MM/DD');

  return (
    <ModalWrapper isVisible={visible} setVisible={setVisible}>
      <DatePicker
        options={{
          backgroundColor: COLORS.white,
          textHeaderColor: COLORS.primary,
          textDefaultColor: COLORS.black,
          selectedTextColor: '#fff',
          mainColor: COLORS.primary,
          textSecondaryColor: COLORS.primary,
          borderColor: 'rgba(122, 146, 165, 0.1)',
        }}
        current={current}
        minimumDate={today}
        selected={current}
        mode="calendar"
        minuteInterval={30}
        style={{borderRadius: 10}}
        onDateChange={date => {
          const formattedDate = moment(date, 'YYYY/MM/DD').format('YYYY-MM-DD');
          onDateChange(formattedDate);
        }}
      />
    </ModalWrapper>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({});
