import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Displaylove = (prop)=>{
    if(prop.data=='loading'){
        return(
            <Text style={styles.text}>Have Patience!!</Text>
        )
    }
    else if(prop.data.message){
        return(
            <Text style={styles.text}>Oops! Something went wrong</Text>
        )
    }
    else{
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{prop.data.percentage}</Text>
                <Text style={styles.text}>{prop.data.result}</Text>
            </View>
        )
    }
        
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection : 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
      fontSize:30,
      textAlign: 'center',
  }
});

export default Displaylove