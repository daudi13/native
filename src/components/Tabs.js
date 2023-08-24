import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const Tabs = ({ weather }) => {
  console.log(weather)

  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: "tomato",
        }
        } }>
        <Tab.Screen
          name={'Current'}
          options={{ tabBarIcon: ({ focused }) => <Feather name={"droplet"} size={25} color={focused ? 'tomato' : "grey" } />}}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
        </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        // component={UpcomingWeather}
        options={{ tabBarIcon: ({ focused }) => <Feather name={"clock"} size={25} color={focused ? 'tomato' : "grey" } />}}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
        <Tab.Screen
          name={'City'}
          options={{ tabBarIcon: ({ focused }) => <Feather name={"map"} size={25} color={focused ? 'tomato' : "grey" } />}}
      >
        {
          () => <City weatherData={weather.city} />
        }
        </Tab.Screen>
      </Tab.Navigator>
  )
}

export default Tabs