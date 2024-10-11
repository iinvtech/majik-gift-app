import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {tabData} from '../data';

// import { Typography } from '../../components';
// import { sizer } from '../../helpers';
// import { baseOpacity, COLORS } from '../../globals';

const Tab = createBottomTabNavigator();

export default function TabNavigator({showNewsFeed}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarStyle: showNewsFeed && {
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          // height: sizer.moderateVerticalScale(70),
          // paddingBottom: sizer.moderateVerticalScale(15),
          height: 70,
          paddingBottom: 15,
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
              <Text>hihi</Text>
              //   <Typography
              //     size={12}
              //     color={focused ? COLORS.primary : COLORS.grey}
              //     medium
              //     textAlign="center">
              //     {data?.label}
              //   </Typography>
            ),
            tabBarIcon: ({focused}) => (
              <></>
              //   <View style={{marginTop: sizer.moderateVerticalScale(11)}}>
              //     {focused ? <data.ActiveTabIcon /> : <data.InActiveTabIcon />}
              //   </View>
            ),
            // tabBarButton: props =>
            //   !showNewsFeed ? null : (
            //     <TouchableOpacity activeOpacity={0.5} {...props} />
            //   ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
