import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

const ColorInfo =({navigation})=>(
  <View style={styles.container}>
    <Text style={styles.txt}>{navigation.state.params.color} </Text>
  </View>
)
ColorInfo.navigationOptions=({navigation})=>({ 
  title:navigation.state.params.color
})
export default ColorInfo

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt:{
    fontSize: 20,
    margin: 10
  }
});
