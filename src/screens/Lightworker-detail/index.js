import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BackButton,
  Container,
  EventDetailFooter,
  EventReview,
  Flex,
  TimePickerComponent,
  Typography,
  ViewAll,
} from '../../components';
import {
  DownArrowSvg,
  MessageIcon,
  NotificationIcon,
  Star,
  TickSecondary,
  TickSecondaryOutlined,
  VideoCallIcon,
  ZoomMeetingIcon,
} from '../../assets';
import {baseOpacity, COLORS, paddingHorizontal} from '../../../globals';
import {sizer} from '../../helpers';
import {DatePickerComponent} from '../../components';
import {useCallback, useState} from 'react';
import moment from 'moment';

const LightworkerDetail = () => {
  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [formData, setFormData] = useState({
    date: moment().format('YYYY-MM-DD'),
    time: '',
  });

  const handleDateChange = selectedDate => {
    setDatePicker(false);
    handleFormData(selectedDate, 'date');
  };

  const handleTimeChange = selectedTime => {
    setTimePicker(false);
    handleFormData(selectedTime, 'time');
  };

  const handleFormData = useCallback((e, name) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: e,
    }));
  }, []);

  return (
    <Container>
      <BackButton Icon={NotificationIcon} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/a9bd/f675/11a94eaa4ddf55f662ca173c195c402a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NsrBGWpSH75bfwl4Hc~~t~GEjaxQzDpG-ftaFJDl0haU5e0R45SAEjsil8xuHBpADLepfieLkYPRtNBXR0RwMl-5Cn3jmhoh79mtnDB1GBw944MZPAdobwNcYP39Dxn0V3vUdRhyUOP6gEjZ~An2G-NR1R9qO3IH0Ktz4HCGxSNbt9jRFuXLzbhuaZFPTmX39kUudescEyy0sZIGyjRemwiKjhtIIXR8NPiQbvsuA7Fcn8r0n9qnGspVBfzNf-16ZBx31aSgjPPvEbPHvYFyfBbWMJ-WO8Efr8xzIKzW9cc7KIp8tnEC0uX5Sa-rkXDT1xAWWZyPWBwuMcvbHLp0-Q__',
              }}
              style={styles.image}
            />
          </View>

          <Flex style={styles.iconWrapper} gap={51}>
            <VideoCallIcon />
            <ZoomMeetingIcon />
            <MessageIcon />
          </Flex>

          <View style={styles.saleTag}>
            <Typography size={14}>On Sale</Typography>
          </View>
        </View>

        <View style={styles.content}>
          <Typography size={24} fontType="secondary">
            Richo
          </Typography>

          <Flex gap={5} mT={18} alignItems="center">
            <Star />
            <Typography size={15}>4.9</Typography>
            <Typography size={12} color="#A6A6A6">
              (99 Reviews)
            </Typography>
          </Flex>

          <Typography
            light
            size={12}
            mT={22}
            letterSpacing={0.1}
            LineHeight={20}>
            Animal Healing Practitioner - Divine Gateway, led by an Animal
            Healing Practitioner, is a sanctuary dedicated to providing
            compassionate healing for animals. With a deep understanding of
            animal energy and wellness, we offer tailored healing sessions to
            address physical, emotional, and behavioral issues. Cheryl’s
            approach combines gentle techniques to restore balance and vitality
            to your beloved pets. Experience the transformative power of animal
            healing at Divine Gateway, where every session is guided by love and
            respect for all creatures great and small.
          </Typography>

          <Typography mT={16}>Readings & Healings</Typography>

          <Flex mT={16} justifyContent="space-between">
            <View>
              <Typography size={14}>Zoom Meeting</Typography>
              <Flex mT={6} alignItems="center">
                <Typography size={12}>Duration: </Typography>
                <Typography light size={12}>
                  25m
                </Typography>
              </Flex>
              <Flex mT={6} alignItems="center">
                <Typography size={12}>Price: </Typography>
                <Typography bold size={12}>
                  $55.00
                </Typography>
              </Flex>
            </View>
            <TickSecondary />
          </Flex>

          <Flex mT={16} justifyContent="space-between">
            <View>
              <Typography size={14}>SPECIAL</Typography>
              <Flex mT={6} alignItems="center">
                <Typography size={12}>Duration: </Typography>
                <Typography light size={12}>
                  25m
                </Typography>
              </Flex>
              <Flex mT={6} alignItems="center">
                <Typography size={12}>Price: </Typography>
                <Typography bold size={12}>
                  $55.00
                </Typography>
              </Flex>
            </View>
            <TickSecondaryOutlined />
          </Flex>

          <Flex mT={16} justifyContent="space-between">
            <View>
              <Typography size={14}>Buy Subscription</Typography>
              <Flex mT={6} alignItems="center">
                <Typography size={12}>Duration: </Typography>
                <Typography light size={12}>
                  25m
                </Typography>
              </Flex>
              <Flex mT={6} alignItems="center">
                <Typography size={12}>Price: </Typography>
                <Typography bold size={12}>
                  $55.00
                </Typography>
              </Flex>
            </View>
            <TickSecondaryOutlined />
          </Flex>

          <Typography mT={16}>Date & Time</Typography>

          <Flex mT={16} gap={16}>
            <TouchableOpacity
              activeOpacity={baseOpacity}
              onPress={() => {
                setDatePicker(true);
              }}
              style={{
                flex: 0.5,
                borderWidth: 1,
                borderColor: '#EBEBEB',
                height: sizer.moderateVerticalScale(34),
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Flex alignItems="center" gap={10}>
                <Typography size={12} color="#79747E">
                  Select Date
                </Typography>
                <DownArrowSvg />
              </Flex>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={baseOpacity}
              onPress={() => {
                setTimePicker(true);
              }}
              style={{
                flex: 0.5,
                borderWidth: 1,
                borderColor: '#EBEBEB',
                height: sizer.moderateVerticalScale(34),
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Flex alignItems="center" gap={10}>
                <Typography size={12} color="#79747E">
                  Select Time
                </Typography>
                <DownArrowSvg />
              </Flex>
            </TouchableOpacity>
          </Flex>

          <ViewAll label="Reviews" />

          <EventReview />
          <EventReview />
        </View>

        <DatePickerComponent
          visible={datePicker}
          setVisible={setDatePicker}
          current={formData?.date}
          onDateChange={handleDateChange}
        />

        <TimePickerComponent
          visible={timePicker}
          setVisible={setTimePicker}
          current={formData?.time}
          onDateChange={handleTimeChange}
        />
      </ScrollView>
      <EventDetailFooter />
    </Container>
  );
};

export default LightworkerDetail;

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: -paddingHorizontal,
  },
  headerContainer: {
    height: sizer.moderateVerticalScale(319),
    backgroundColor: COLORS.secondary,
    paddingTop: sizer.moderateVerticalScale(28),
  },
  imageWrapper: {
    width: sizer.moderateScale(250),
    height: sizer.moderateVerticalScale(291),
    backgroundColor: '#EBE7DC',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 236,
    height: 259,
    justifyContent: 'center',
  },
  iconWrapper: {
    width: sizer.moderateScale(230),
    height: sizer.moderateVerticalScale(40),
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: sizer.moderateScale(-17),
    left: sizer.moderateScale(65),
    alignItems: 'center',
    justifyContent: 'center',
  },
  saleTag: {
    width: sizer.moderateScale(60),
    height: sizer.moderateVerticalScale(32),
    backgroundColor: COLORS.primary,
    position: 'absolute',
    top: sizer.moderateScale(15),
    right: sizer.moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: paddingHorizontal,
    marginTop: 67,
  },
});
