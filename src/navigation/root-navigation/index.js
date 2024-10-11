import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import DrawerNavigator from '../drawer-stack';
import {COLORS} from '../../../globals';
import AuthStack from '../auth-stack';
import {useSelector} from 'react-redux';

const RootNavigation = () => {
  const {isLogged} = useSelector(state => state.storeReducer);
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <SafeAreaProvider style={{flex: 1, backgroundColor: COLORS.white}}>
        <NavigationContainer>
          {isLogged ? <DrawerNavigator /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default RootNavigation;
