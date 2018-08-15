import React from 'react';
import { StyleSheet, ScrollView, ListView, AsyncStorage } from 'react-native';
import ColorBtn from './ColorBtn'
import ColorForm from './ColorForm'

export default class ColorList extends React.Component {
  static navigationOptions ={
    title:'Available Colors'
  }
  constructor(){
    super();
    this.ds=new ListView.DataSource({
      rowHasChanged:(r1,r2)=>r1!==r2
    })
    const colors=[] //'#00ff00','rgb(225,0,225)','pink','red','green','blue','salmon','#055050'
    this.state=({
      colors,
      DataSource:this.ds.cloneWithRows(colors)
    })
    // this.newColor=this.newColor.bind(this)
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
    const {navigate} =this.props.navigation
    const {backgroundColor,DataSource}=this.state;

    return (
      <ScrollView style={[styles.container,{backgroundColor}]}>
        <ListView dataSource={DataSource} renderRow={(color)=>{
            return (<ColorBtn backgroundColor={color} onSelect={()=>navigate('Details',{color})}/>)
        }} enableEmptySections renderHeader={()=>(
          <ColorForm onNewColor={this.newColor}/>
        )}
        >
        </ListView>
      </ScrollView>
    );
  }
}
ColorList.defaultProps={
  onColorSelected:f=>f
}
// ColorList.propTypes={
//   onColorSelected: React.propTypes.func
// }
const styles = StyleSheet.create({
  container:{
    flex:1,
  },

});
