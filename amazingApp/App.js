import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Button } from 'react-native-paper';
import axios from 'axios'
import Displaylove from './components/Displaylove'
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
//import ThreeDRotation from '@material-ui/icons/ThreeDRotation';


class App extends React.Component{

  state = {
      "fname":"",
      "sname":"",
      "result":"loading"
  }

  componentDidMount(){
     
  }
  
  //Appbar
   _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  //Fetch
  submitit(){
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      
      {
      
	    "headers": {
		      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
		      "x-rapidapi-key": "31ebd94597msh290bd889723cbd3p14dea8jsn7e1fa24bb491"
       }
      }
    )
    .then(data=>data.json())
    .then(data2 =>{
      console.log(data2);
      this.setState({
        result:data2
      })
    })
    console.log("checking call");
    
  }

  render(){
    console.log("from render");
    
    return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction
          //onPress={this._goBack}
        />
        <Appbar.Content
          title="Love % Calculator"
          style={{alignItems:"center"}}
          //subtitle="Subtitle"
        />
        <Appbar.Action icon="magnify" onPress={this._handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
      
      <Text style={{fontSize:30}} >Hi!! </Text>
      <TextInput
        label='person1(male)'
        value = {this.state.fname}
        onChangeText={text => this.setState({ fname:text })}
      />
      <TextInput
        label='person2(female)'
        value = {this.state.sname}
        onChangeText={text => this.setState({ sname:text })}
      />
      <Button 
        icon="" 
        mode="contained" 
        onPress={this.submitit.bind(this)}>
        Calculate
      </Button>
      <Displaylove data={this.state.result}/>
      
    </View>
    );
  }
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection : 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  }
});
