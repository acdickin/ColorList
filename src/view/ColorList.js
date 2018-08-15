import React from 'react';
import { StyleSheet, ScrollView, ListView, AsyncStorage } from 'react-native';
import ColorBtn from './ColorBtn'
import ColorForm from './ColorForm'

export default class ColorList extends React.Component {

  constructor(){
    super();
    this.ds=new ListView.DataSource({
      rowHasChanged:(r1,r2)=>r1!==r2
    })
    const colors=[] //,'#00ff00','rgb(225,0,225)','pink','red','green','blue','salmon','#055050'
    this.state=({
      backgroundColor:'blue',
      colors,
      DataSource:this.ds.cloneWithRows(colors)
    })
    this.changeColor=this.changeColor.bind(this)
    this.newColor=this.newColor.bind(this)
  }
  componentDidMount(){
    AsyncStorage.getItem(
      '@ColorListStore:Colors',
      (err,data)=>{
        if(err){
          console.log('err with colors',err)
        }else{
          const colors = JSON.parse(data)
          this.setState({
            colors,
            DataSource:this.ds.cloneWithRows(colors)
          })
        }
      }
    )
  }

  saveColors(colors){
    AsyncStorage.setItem(
      '@ColorListStore:Colors',
      JSON.stringify(colors)
    )
  }
  changeColor(backgroundColor){
    this.setState({backgroundColor})
  }
  newColor(newColor){
    const colors=[...this.state.colors, newColor]
    console.log(colors)
    this.setState({
      colors,
      DataSource:this.ds.cloneWithRows(colors)
    })
    this.saveColors(colors)

  }

  render() {
    const {backgroundColor,DataSource}=this.state;

    return (
      <ScrollView style={[styles.container,{backgroundColor}]}>
        <ListView dataSource={DataSource} renderRow={(color)=>{
            return (<ColorBtn backgroundColor={color} onSelect={this.changeColor}/>)
        }}  renderHeader={()=>(
          <ColorForm onNewColor={this.newColor}/>
        )}
        >
        </ListView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

});
