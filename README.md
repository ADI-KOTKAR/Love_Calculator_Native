# React_Native

# Error in opening Expo App:
- Use 'expo start --tunnel' instead of 'npm start'/'expo start'
- The above statement works only if Tunnel URL is found.
- https://github.com/expo/expo-cli/issues/134#issuecomment-443938890

# JSX : 
- similar to html, where JavaScript code is enclosed in '{}'.

# Component : 
    - Class based

        const MyData = ()=>{
            return (
                <Text>Component</Text>
            )
        }


    - Function based (recommended)
        
        class MyData extends React.Component{
            render(){
                return(
                    <Text>Component</Text>
                )
            }
        }

# States :

class App extends React.Component{

   state = {
    name:"mukesh",
    status:"coder"
  }

  stateHandler(name){
      this.setState({
        name: name
      })
      
  } 
  
  render(){
    console.log("updated",this.state)
    return (
    <View style={styles.container}>
      <Text>{this.state.name}</Text>
        <Text>{this.state.status}</Text>
      <Button title="Click Me!" onPress={this.stateHandler.bind(this,"ramesh")}/>
    </View>
    );
  }
  
}
