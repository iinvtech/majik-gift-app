import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import DrawerNavigator from '../drawer-stack';
import {COLORS} from '../../../globals';
import AuthStack from '../auth-stack';

const RootNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <SafeAreaProvider style={{flex: 1, backgroundColor: COLORS.white}}>
        <NavigationContainer>
          {false ? <DrawerNavigator /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default RootNavigation;
