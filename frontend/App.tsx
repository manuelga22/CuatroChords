import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ChordViewComponent from './components/ViewChord/ChordFretboardView';

import AppContext from './components/AppContext';

const  HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack(){
  return(
          <HomeStack.Navigator>
              <HomeStack.Screen name="Fretboard" component={HomeScreen}></HomeStack.Screen>
              <HomeStack.Screen name="ChordView" component={ChordViewComponent}></HomeStack.Screen>
          </HomeStack.Navigator>
  )
}
function SettingsScreenStack(){
  return(
          <SettingsStack.Navigator>
              <SettingsStack.Screen name="Settings" component={SettingsScreen}></SettingsStack.Screen>
          </SettingsStack.Navigator>
  )
}

export default function App() {

  const [checkedFlatsMode, setCheckedFlatsMode] = React.useState(false);
  const toggleFlatsMode = ():void => {
    setCheckedFlatsMode(!checkedFlatsMode)
  };

  const appSettings= {
    checkedFlatsMode,
    toggleFlatsMode,
  }

  return (
    <AppContext.Provider value={appSettings}>
      {
        <NavigationContainer >
          <Tab.Navigator  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "";

              if (route.name === 'Home') {
                iconName = focused? 'home': 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="Home" component={HomeScreenStack} />
            <Tab.Screen name="Settings" component={SettingsScreenStack} />
          </Tab.Navigator>
        </NavigationContainer>
        }
      </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
