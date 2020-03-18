import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';


class App extends React.Component{

   state={
     text:"loading"
   }
  
  render(){

    return (
    <View style={styles.container}>
      
      <ScrollView>
        <Image source={{uri:"https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",height:400,width:300}}/>
        <Image source={{uri:"https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",height:400,width:300}}/>
        <Image source={{uri:"https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",height:400,width:300}}/>
        <Image source={{uri:"https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",height:400,width:300}}/>
        <Image source={{uri:"https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",height:400,width:300}}/>
        <Image source={{uri:"https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",height:400,width:300}}/>

      </ScrollView>
      <Text style={{fontSize:30}} >Hello</Text>
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
