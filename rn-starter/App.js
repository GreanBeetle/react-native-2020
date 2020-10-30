import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  ComponentsScreen,
  CounterScreen, 
  HomeScreen,  
  ImageScreen,
  ListScreen, 
} from './src/screens'

const navigator = createStackNavigator(
  {
    Components: ComponentsScreen,
    Counter: CounterScreen,
    Home: HomeScreen,
    Image: ImageScreen, 
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
