import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';


export default class ColorForm extends React.Component {
  constructor(){
    super();
      this.state=({
        txtColor:''
    })
    this.submit= this.submit.bind(this)
  }
  submit(){
    this.props.onNewColor(this.state.txtColor.toLowerCase())
    this.setState({
      txtColor:''
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          placeholder='enter a color ...' style={styles.txtInput}
          onChangeText={txtColor=> this.setState({txtColor})}
          value={this.state.txtColor}
        />
        <Text style={styles.btn} onPress={this.submit} >Add</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height:80,
    paddingTop: 25,
  },
  txtInput:{
    flex:1,
    margin:5,
    padding:5,
    borderWidth:2,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'snow',
  },
  btn:{
    backgroundColor: 'darkblue',
    margin:5,
    padding:5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'

  },
})
