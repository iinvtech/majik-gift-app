import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../../../globals';
import {CustomToast, Loader} from '../../components';
import DrawerNavigator from '../drawer-stack';
import AuthStack from '../auth-stack';
import {closeToast, login, logout, toggleLoader} from '../../store/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiManager} from '../../helpers';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

const RootNavigation = () => {
  const {isLogged, showLoader, toast} = useSelector(
    state => state.storeReducer,
  );
  const dispatch = useDispatch();

  const validateToken = async () => {
    dispatch(toggleLoader(true));
    const access_token = await AsyncStorage.getItem('access_token');
    if (access_token) {
      try {
        let {data} = await ApiManager('get', 'auth/me', access_token);
        dispatch(login(data?.response));
      } catch (error) {
        if (error?.response?.status === 401) {
          dispatch(logout());
          dispatch(toggleLoader(false));
          SplashScreen.hide();
        }
      } finally {
        setTimeout(() => {
          dispatch(toggleLoader(false));
          SplashScreen.hide();
        }, 500);
      }
    } else {
      dispatch(logout());
      SplashScreen.hide();
      dispatch(toggleLoader(false));
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

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
