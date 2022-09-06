import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import LoginScreenMain from './screens/LoginScreenMain';
import CreateCenter from './screens/CreateCenter';
import AddDetailsDoctor from './screens/AddDetailsDoctor';
import AddDetailsNurse from './screens/AddDetailsNurse';
import AddDetailsVol from './screens/AddDetailsVol';
import MenuScreenDoctor from './screens/MenuScreenDoctor';
import MenuScreenNurse from './screens/MenuScreenNurse';
import MenuScreenVol from './screens/MenuScreenVol';
import CenterDetails from './screens/CenterDetails';
import { useState } from 'react/cjs/react.development';
import { View } from 'react-native';
// import DoctorDrawer from './screens/DoctorDrawer';
import CreatePatient from './screens/CreatePatient';
import DoctorPager from './screens/DoctorPager';
import NursePager from './screens/NursePager';
import VolPager from './screens/VolPager';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} /> */}
      <Stack.Screen
        name="LoginScreenMain"
        component={LoginScreenMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CenterDetails"
        component={CenterDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateCenter"
        component={CreateCenter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MenuScreenDoctor"
        component={MenuScreenDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddDetailsDoctor"
        component={AddDetailsDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorPager"
        component={DoctorPager}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MenuScreenNurse"
        component={MenuScreenNurse}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddDetailsNurse"
        component={AddDetailsNurse}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NursePager"
        component={NursePager}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MenuScreenVol"
        component={MenuScreenVol}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddDetailsVol"
        component={AddDetailsVol}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VolPager"
        component={VolPager}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="DoctorDrawer" component={DoctorDrawer} options={{headerShown:false}}/> */}
      <Stack.Screen
        name="CreatePatient"
        component={CreatePatient}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [inLoad, setInLoad] = useState(false);
  setTimeout(() => {
    setInLoad(true);
  }, 3000);

  if (inLoad) {
    return (
      <>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </>
    );
  } else {
    return (
      <View>
        <HomeScreen />
      </View>
    );
  }
}
