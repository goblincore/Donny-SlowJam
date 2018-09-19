import React from 'react';
import {Text,BackHandler,View, UIManager} from 'react-native';
import DashboardView from './DashboardView';
import PlaybackView from './PlaybackView';
import ProfileScreen from './ProfileScreen';
import {
    createStackNavigator,
  } from 'react-navigation';


const App = createStackNavigator({
    Home: { screen: DashboardView },
    Profile: { screen: PlaybackView },
  });


export default App;