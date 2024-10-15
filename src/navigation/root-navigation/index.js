import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from '../drawer-stack';
import {COLORS} from '../../../globals';
import AuthStack from '../auth-stack';
import {useSelector} from 'react-redux';

const RootNavigation = () => {
  const {isLogged} = useSelector(state => state.storeReducer);
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <NavigationContainer>
        <SafeAreaView
          style={{flex: 1, height: '100%', backgroundColor: COLORS.white}}>
          {isLogged ? <DrawerNavigator /> : <AuthStack />}
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default RootNavigation;
