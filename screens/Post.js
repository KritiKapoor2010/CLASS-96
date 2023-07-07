import React from "react";
import { Text,View,StyleSheet } from "react-native";

export default class Post extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Post</Text>
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
//title.png,image component,textinput, ionicon for star