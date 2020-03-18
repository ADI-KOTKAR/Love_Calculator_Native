import React from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';


class App extends React.Component{

   
  
  render(){

    return (
    <View style={styles.container}>
      <Text>Hello</Text>

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
