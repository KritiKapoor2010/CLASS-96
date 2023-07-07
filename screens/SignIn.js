import React from "react";
import { Text,View,StyleSheet , Textinput} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export default class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""

        }
    }
    render() {

        return(
            <View style={styles.container}>
                 <Text style={styles.appTitleText}>Animal Rescue</Text>
          

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Enter Email"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Enter Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />
                    <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={this.props.navigation.navigate(Home)}
            
          >
            <Text style={styles.buttonText}>Signin</Text>
          </TouchableOpacity>
          
        </View>

            
        )

    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        
    },
    appTitleText: {
        color: "orange",
        textAlign: "center",
        fontSize: RFValue(40),
        fontFamily: "Bubblegum-Sans",
        marginBottom: RFValue(20),
        
      },
      textinput: {
        width: RFValue(250),
        height: RFValue(50),
        padding: RFValue(10),
        borderColor: "#FFFFFF",
        borderWidth: RFValue(4),
        borderRadius: RFValue(10),
        fontSize: RFValue(20),
        color: "#FFFFFF",
        backgroundColor: "aqua blue",
        fontFamily: "Bubblegum-Sans"
      },
      button: {
        width: RFValue(250),
        height: RFValue(50),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RFValue(30),
        backgroundColor: "green",
        marginBottom: RFValue(20)
      },
      buttonText: {
        fontSize: RFValue(24),
        color: "black",
        fontFamily: "Bubblegum-Sans"
      },
})
//2 text input for password and email, onpress sumbit button 