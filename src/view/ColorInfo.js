import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import Color from 'color'

const ColorInfo =({navigation})=>{
  const color = Color(navigation.state.params.color);
  return(
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={[styles.txt, {color:color.negate()}]}>
        {color.hex()}
      </Text>
      <Text style={[styles.txt, {color:color.negate()}]}>
        {color.rgb().string()}
      </Text>
      <Text style={[styles.txt, {color:color.negate()}]}>
        {color.hsl().string()}
      </Text>
      <Text style={[styles.txt, {color:color.negate()}]}>
        Text color:{color.negate().hex()}
      </Text>
    </View>
  )
}
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
