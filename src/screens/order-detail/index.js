import {FlatList} from 'react-native';
import {
  CancelIcon,
  DeliveredIcon,
  OrderDetailHeaderSvg,
  PendingIcon,
} from '../../assets';
import {
  BackButton,
  Container,
  OrderDetailCard,
  SearchField,
} from '../../components';
import {sizer} from '../../helpers';

const OrderDetail = () => {
  const orderData = [
    {
      id: 1,
      status: 'Pending',
      productName: 'Antique Bowl',
      quantity: 2,
      orderDate: 'Oct 11, 2024',
      shippingAddress: 'ABC City',
      paymentMethod: 'PAYPAL',
      price: 55.0,
      statusColor: '#E1BF00',
      Icon: PendingIcon,
      lastUpdated: 'Oct 10, 2024',
    },
    {
      id: 2,
      status: 'Delivered',
      productName: 'Antique Bowl',
      quantity: 2,
      orderDate: 'Oct 11, 2024',
      shippingAddress: 'ABC City',
      paymentMethod: 'PAYPAL',
      price: 55.0,
      statusColor: '#00A105',
      Icon: DeliveredIcon,
      lastUpdated: 'Oct 10, 2024',
    },
    {
      id: 3,
      status: 'Cancelled',
      productName: 'Antique Bowl',
      quantity: 2,
      orderDate: 'Oct 11, 2024',
      shippingAddress: 'ABC City',
      paymentMethod: 'PAYPAL',
      price: 55.0,
      statusColor: '#C20000',
      Icon: CancelIcon,
      lastUpdated: 'Oct 10, 2024',
    },
    {
      id: 4,
      status: 'Cancelled',
      productName: 'Antique Bowl',
      quantity: 2,
      orderDate: 'Oct 11, 2024',
      shippingAddress: 'ABC City',
      paymentMethod: 'PAYPAL',
      price: 55.0,
      statusColor: '#00A105',
      Icon: DeliveredIcon,
      lastUpdated: 'Oct 10, 2024',
    },
  ];

  return (
    <Container>
      <BackButton title="Order Details" Icon={OrderDetailHeaderSvg} />
      <SearchField />

      <FlatList
        data={orderData}
        renderItem={({item}) => <OrderDetailCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          {
            //   flex: 1,
          }
        }
        style={{
          marginTop: sizer.moderateVerticalScale(23),
        }}
      />
    </Container>
  );
};

export default OrderDetail;
