import React from "react";
import { Text,View,StyleSheet } from "react-native";

export default class Donation extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Donation</Text>
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
        
    }
})
//schmes:contact number , accepatableitem  ,