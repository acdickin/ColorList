import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const ColorBtn =({backgroundColor, onSelect=f=>f })=>(
  <TouchableHighlight style={styles.button} onPress={()=>{onSelect(backgroundColor)}} underlayColor='orange'>
    <View style={styles.row}>
      <View style={[styles.sample, {backgroundColor}]}/>
      <Text style={styles.text}>{backgroundColor}</Text>
    </View>
  </TouchableHighlight>
)

export default ColorBtn
const styles = StyleSheet.create({

  button:{
    margin:10,
    padding:10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)',

  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  sample:{
    height:20,
    width:20,
    borderRadius: 10,
    margin:5,
    backgroundColor: 'white',
  },
  text:{
    fontSize: 30,
    margin:5,
  },
});
