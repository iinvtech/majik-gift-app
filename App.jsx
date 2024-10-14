import {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import RootNavigation from './src/navigation/root-navigation';
import store from './src/store';
export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  });
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
