import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View} from 'react-native';

export default class Home extends Component {

    render() {

        return (
            <View style= {styles.background}>
                <View style= {styles.topbar}>
                    <Button title = 'Scan QR Code'
                        onPress={() => this.props.navigation.navigate('Camera')}/>
                </View>
                <View style={styles.welcomeMessage}>
                    <Text style={styles.textHeader}>Welcome to SmartDash!</Text>
                    <Text style={styles.text}>Car accidents can be a stressful time. We've eliminated the added stress of exchanging details! </Text>
                    <Text style={styles.text}>Simply scan the QR code of the other party to exchange information!</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgb(55, 171, 191)'
    },

    topbar: {

    },

    welcomeMessage: {
        alignContent: 'center'
    },

    textHeader: {
        
    }





});