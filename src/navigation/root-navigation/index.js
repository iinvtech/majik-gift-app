import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../../../globals';
import {CustomToast, Loader} from '../../components';
import DrawerNavigator from '../drawer-stack';
import AuthStack from '../auth-stack';
import { closeToast } from '../../store/reducer';

const RootNavigation = () => {
  const {isLogged, showLoader, toast} = useSelector(
    state => state.storeReducer,
  );
  const dispatch = useDispatch();

  console.log(toast);
  

  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <NavigationContainer>
        <SafeAreaView
          style={{flex: 1, height: '100%', backgroundColor: COLORS.white}}>
          {isLogged ? <DrawerNavigator /> : <AuthStack />}
          {showLoader && <Loader backgroundColor={showLoader?.background} />}
          {toast.open && (
            <CustomToast toast={toast} close={() => dispatch(closeToast())} />
          )}
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default RootNavigation;
