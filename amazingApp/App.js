import React from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';

class App extends React.Component{

   
  
  render(){

    const diap = ['eat','sleep','code','repeat']
    const list = diap.map(data=>{
        return <Text> {data}</Text>
      })
    return (
    <View style={styles.container}>
      <Text> {Math.random()} </Text>
      {list}
      
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
