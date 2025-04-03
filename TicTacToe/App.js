import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./src/Screens/Home";
import Rules from './src/Screens/Rules';
import Credits from './src/Screens/Credits';
import LoadGame from './src/Screens/LoadGame';

const Stack = createStackNavigator()
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={Home} />
        <Stack.Screen name = "Rules" component={Rules} />
        <Stack.Screen name = "Credits" component={Credits}/>
        <Stack.Screen name="LoadGame" component={LoadGame} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}