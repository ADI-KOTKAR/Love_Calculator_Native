import React from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';


// const MyData = ()=>{
//   return (
//     <Text>Component</Text>
//   )
// }

const MyData2 = (props)=>{
  return(
    <View>

        <Text>{props.name}</Text>
        <Text>{props.status}</Text>
      </View>
  )
}


class MyData extends React.Component{
  render(){
    return(
      <View>

        <Text>{this.props.name}</Text>
        <Text>{this.props.status}</Text>
      </View>
      
    )
  }
}

class App extends React.Component{
  
  
  render(){

    // const diap = ['eat','sleep','code','repeat']
    // const list = diap.map(data=>{
    //     return <Text> {data}</Text>
    // <Text> {Math.random()} </Text>
    // <Button title="submit" />
    //   })
    return (
    <View style={styles.container}>
      
      
      <MyData name="mukesh" status="coder"/>
      <MyData name="aditya" status="commited"/>
      <MyData name="anurag" status="single"/>
       
       <MyData2 name="mukesh" status="coder"/>
      <MyData2 name="aditya" status="commited"/>
      <MyData2 name="anurag" status="single"/>
    </View>
    );
  }
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
