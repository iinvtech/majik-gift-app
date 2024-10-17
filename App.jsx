import {Provider} from 'react-redux';

import RootNavigation from './src/navigation/root-navigation';
import store from './src/store';
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
