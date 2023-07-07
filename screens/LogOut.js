import React from "react";
import { Text,View,StyleSheet } from "react-native";
import Signin from "./SignIn";

export default class Logout extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={this.props.navigation.navigate(SignIn)}
          >
            <Text style={styles.buttonText}>logOut</Text>
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
    button: {
        width: RFValue(250),
        height: RFValue(50),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RFValue(30),
        backgroundColor: "red",
        marginBottom: RFValue(20)
      },
      buttonText: {
        fontSize: RFValue(24),
        color: "white",
        fontFamily: "Bubblegum-Sans"
      },
})
