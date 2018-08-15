import React from 'react';
import { StyleSheet,Alert  } from 'react-native';
import ColorList from './ColorList'
import ColorInfo from './ColorInfo'
import {createStackNavigator} from 'react-navigation'

const Main =createStackNavigator({
  Home:{ screen:ColorList},
  Details:{ screen:ColorInfo}
})

export default Main
