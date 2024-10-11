import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {tabData} from '../data';
import sizer from '../../helpers/sizer';
import {Typography} from '../../components';
import {COLORS} from '../../../globals';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          height: sizer.moderateVerticalScale(70),
          paddingBottom: sizer.moderateVerticalScale(15),
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      {tabData.map((data, index) => (
        <Tab.Screen
          key={index}
          name={data?.screenName}
          component={data?.stack}
          options={{
            tabBarLabel: ({focused}) => (
              <Typography
                size={12}
                color={focused ? COLORS.primary : COLORS.grey}
                medium
                textAlign="center"
                mB={-5}
                fontType="secondary">
                {data?.label}
              </Typography>
            ),
            tabBarIcon: ({focused}) => (
              <View style={{marginTop: sizer.moderateVerticalScale(11)}}>
                {focused ? <data.ActiveTabIcon /> : <data.InActiveTabIcon />}
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
