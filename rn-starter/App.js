import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  BoxScreen,
  ColorScreen,
  ComponentsScreen,
  CounterScreen, 
  HomeScreen,  
  ImageScreen,
  ListScreen,
  SquareScreen,
  TextScreen 
} from './src/screens'

const navigator = createStackNavigator(
  {
    Box: BoxScreen,
    Color: ColorScreen,
    Components: ComponentsScreen,
    Counter: CounterScreen,
    Home: HomeScreen,
    Image: ImageScreen, 
    List: ListScreen,
    Square: SquareScreen, 
    Text: TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
