import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Form from "./src/screen/Form"
import { ScreenStackHeaderSubview } from 'react-native-screens';
const Stack=createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Form" component={Form}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


