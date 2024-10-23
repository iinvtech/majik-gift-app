import {Provider} from 'react-redux';
import { StripeProvider } from '@stripe/stripe-react-native';

import RootNavigation from './src/navigation/root-navigation';
import store from './src/store';
export default function App() {
  const STRIPE_KEY =
    'pk_test_51QB9goIIQ9bHupsgOm6V1poCzjUUhXLu0lK1AfijjfpzH20Ol58VJ9cHazkFUBkGDYGemwK8Ae5kUMfJcUmxCnsQ00RyGm48jv';
  return (
    <StripeProvider
      publishableKey={STRIPE_KEY}
      merchantIdentifier="merchant.com.cspw" // required for Apple Pay
    >
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </StripeProvider>
  );
}
