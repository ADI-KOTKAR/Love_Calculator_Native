# React_Native

* Error in opening Expo App:
- Use 'expo start --tunnel' instead of 'npm start'/'expo start'
- The above statement works only if Tunnel URL is found.
- https://github.com/expo/expo-cli/issues/134#issuecomment-443938890

* JSX : similar to html, where JavaScript code is enclosed in '{}'.

* Component : 
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
