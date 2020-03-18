import React from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';


const MyData = ()=>{
  return (
    <Text>Component</Text>
  )
}

// class MyData2 extends React.Component{
//   render(){
//     return(
//       <Text>Component 2</Text>
//     )
//   }
// }

class App extends React.Component{
  
  
  render(){

    // const diap = ['eat','sleep','code','repeat']
    // const list = diap.map(data=>{
    //     return <Text> {data}</Text>
    //   })
    return (
    <View style={styles.container}>
      <Text> {Math.random()} </Text>
      
      <MyData/>
       <Button title="submit" />
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
