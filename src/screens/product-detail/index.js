import {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {
  BackButton,
  Container,
  EventDetailFooter,
  EventReview,
  Flex,
  HorizontalFlatlist,
  Typography,
} from '../../components';

import {ApiManager, hexToRGBA, sizer} from '../../helpers';
import {baseOpacity, COLORS, paddingHorizontal} from '../../../globals';
import {NotificationIcon, Star} from '../../assets';
import {openToast, toggleLoader} from '../../store/reducer';

const ProductDetail = ({route}) => {
  const {id} = route?.params;

  const [activeImage, setActiveImage] = useState(0);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [decrementDisable, setDecrementDisable] = useState(false);

  const navigation = useNavigation();
  const flatlistRef = useRef(null);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {width} = useWindowDimensions();

  const getProduct = async () => {
    // dispatch(toggleLoader(true));
    try {
      const {data} = await ApiManager('get', `products/${id}`);
      setData(data?.response?.details);
    } catch (error) {
      dispatch(openToast({message: error?.response?.data?.message}));
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  const productIncrement = () => {
    if (count < 9) {
      setCount(prev => prev + 1);
    } else {
      setDisabled(true);
    }
  };

  const productDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    } else {
      setDecrementDisable(true);
    }
  };

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveImage(index);
  };

  const scrollToIndex = index => {
    flatlistRef?.current?.scrollToIndex({index, animated: true});
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(toggleLoader(true));
      getProduct();
    }
  }, [isFocused]);

  useEffect(() => {
    if (count == 1) {
      setDecrementDisable(true);
    } else {
      setDecrementDisable(false);
    }
  }, [count]);

  return (
    <Container>
      <BackButton Icon={NotificationIcon} />

      <ScrollView style={{marginHorizontal: -paddingHorizontal}}>
        <FlatList
          data={data?.image}
          horizontal
          pagingEnabled
          ref={flatlistRef}
          renderItem={({item}) => {
            return (
              <View style={{width: width}}>
                <Image
                  source={{uri: item}}
                  style={{
                    width: '100%',
                    height: sizer.moderateVerticalScale(300),
                  }}
                />
              </View>
            );
          }}
          onScroll={handleScroll}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.discountBadge}>
          <Typography size={10}>20% Off</Typography>
        </View>

        <Flex
          style={styles.imgSuggestionBadgeFlexCont}
          alignItems="center"
          justifyContent="space-between">
          {data?.image?.map((imgURL, i) => (
            <TouchableOpacity
              activeOpacity={baseOpacity}
              onPress={() => scrollToIndex(i)}
              key={i}
              style={
                ({
                  backgroundColor:
                    activeImage === i ? COLORS.white : 'rgba(0, 0, 0, 0.4)',
                  borderRadius: 6,
                },
                activeImage == i && {transform: [{scale: 1.1}]})
              }>
              <Image
                source={{uri: imgURL}}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 6,
                  opacity: activeImage === i ? 1 : 0.6,
                }}
              />
            </TouchableOpacity>
          ))}
        </Flex>

        <View style={{paddingHorizontal: paddingHorizontal}}>
          <Flex mT={28} justifyContent="space-between">
            <Typography size={24} fontType="secondary">
              {data?.name}
            </Typography>

            <Flex gap={11} size={24} fontType="secondary">
              <TouchableOpacity
                activeOpacity={baseOpacity}
                disabled={decrementDisable}
                onPress={productDecrement}
                hitSlop={{top: 5, right: 5, left: 5, bottom: 5}}
                style={[styles.addProduct, decrementDisable && {opacity: 0.3}]}>
                <Typography bold>-</Typography>
              </TouchableOpacity>

              <Typography size={17}>{count}</Typography>

              <TouchableOpacity
                activeOpacity={baseOpacity}
                onPress={productIncrement}
                disabled={disabled}
                hitSlop={{top: 5, right: 5, left: 5, bottom: 5}}
                style={[styles.addProduct, disabled && {opacity: 0.5}]}>
                <Typography bold>+</Typography>
              </TouchableOpacity>
            </Flex>
          </Flex>

          <Flex mT={18} gap={5} alignItems="center">
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
            {data?.description || '----'}
          </Typography>

          <Typography mT={27}>Item Specs: </Typography>

          <Flex mT={10} gap={6} alignItems="center">
            <Typography size={14}>Note:</Typography>
            <Typography size={12} light>
              A#, (216Hz- 228Hz)
            </Typography>
          </Flex>

          <Flex mT={10} gap={6} alignItems="center">
            <Typography size={14}>Diameter:</Typography>
            <Typography size={12} light>
              16.7cm
            </Typography>
          </Flex>

          <Flex mT={10} gap={6} alignItems="center">
            <Typography size={14}>Height:</Typography>
            <Typography size={12} light>
              8.4cm
            </Typography>
          </Flex>

          <Flex mT={10} gap={6} alignItems="center">
            <Typography size={14}>Weight:</Typography>
            <Typography size={12} light>
              675grams
            </Typography>
          </Flex>

          <Typography mT={22}>Reviews</Typography>

          <EventReview />
          <EventReview />
        </View>
      </ScrollView>

      <EventDetailFooter
        leftText={data?.price || '---'}
        btnText="Order"
        onPress={() => {
          const addedPrice = data?.price * count;
          navigation.navigate('OrderSummary', {
            productName: data?.name,
            price: addedPrice,
            quantity: count,
          });
        }}
      />
    </Container>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  headerView: {
    height: sizer.moderateVerticalScale(319),
    backgroundColor: COLORS.secondary,
  },
  discountBadge: {
    backgroundColor: COLORS.primary,
    position: 'absolute',
    padding: sizer.moderateScale(4),
    alignSelf: 'flex-start',
    marginTop: sizer.moderateVerticalScale(2),
    top: sizer.moderateVerticalScale(24),
    right: sizer.moderateScale(24),
  },
  addProduct: {
    borderWidth: 1,
    height: sizer.moderateVerticalScale(18),
    width: sizer.moderateScale(18),
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSuggestionBadgeFlexCont: {
    height: sizer.moderateVerticalScale(60),
    width: sizer.moderateScale(250),
    top: sizer.moderateVerticalScale(225),
    left: sizer.moderateScale(60),
    position: 'absolute',
    paddingHorizontal: sizer.moderateScale(4),
    backgroundColor: hexToRGBA(COLORS.white, 0.5),
    borderRadius: 6,
  },
});
