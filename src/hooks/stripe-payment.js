import {useDispatch} from 'react-redux';
import {usePaymentSheet} from '@stripe/stripe-react-native';

import {openToast} from '../store/reducer';

export default function stripePayment() {
  const dispatch = useDispatch();
  const {initPaymentSheet, presentPaymentSheet} = usePaymentSheet();
  const initializePaymentSheet = async (payIntent, id) => {
    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: id,
      paymentIntentClientSecret: payIntent?.client_secret,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'John Doe',
      },
    });
    if (!error) {
      return openPaymentSheet();
    }
    return false;
  };

  async function openPaymentSheet() {
    const {error} = await presentPaymentSheet();
    if (error) {
      dispatch(openToast({type: 'error', message: [error.message]}));
      return false;
    }
    dispatch(
      openToast({type: 'success', message: ['Your payment is successful']}),
    );
    return true;
  }
  return {initializePaymentSheet};
}
