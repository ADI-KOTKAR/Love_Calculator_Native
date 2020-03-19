import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';


class App extends React.Component{

   state={
     text:"loading"
   }

   componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(data=>data.json())
     .then(data2=>{
       console.log(data2);
       this.setState({
         text:data2[9].name
       })
       
     })
   }
  
  render(){
    console.log("from render");
    
    return (
    <View style={styles.container}>
      
      <Text style={{fontSize:30}} >Hello</Text>
      <Text style={{fontSize:30}}>{this.state.text}</Text>
    </View>
    );
  }
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
