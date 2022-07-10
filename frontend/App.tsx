import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ChordViewComponent from './components/ViewChord/ChordFretboardView';

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
  return (
      <NavigationContainer >
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreenStack} />
          <Tab.Screen name="Settings" component={SettingsScreenStack} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
