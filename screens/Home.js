import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ColorPropType
} from "react-native";
import { FAB } from 'react-native-paper';

import Color from '../constants/color'

function HomeScreen (props) {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>HomeScreen</Text>
            <FAB
                style={styles.fab}
                theme={{ colors: { accent: Color.activeTint}}}
                color='rgb(0, 0, 0)'
                icon="plus"
            onPress={() => props.navigation.navigate("FloatingAction")}
            />
       </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '12%'
    },
    fab: {
        position: 'relative',
        top: '80%',
      }
});