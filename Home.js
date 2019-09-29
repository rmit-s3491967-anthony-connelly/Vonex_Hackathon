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
                
                <View style={styles.welcomeMessage}>
                    <Text style={styles.textHeader}>Welcome to SmartDash!</Text>
                    <Text style={styles.text}>Car accidents can be a stressful time. We've eliminated the added stress of exchanging details! </Text>
                    <Text style={styles.text}>Simply scan the QR code of the other party to exchange information!</Text>
                </View>
                <View style= {styles.topbar}>
                    <Button title = 'Scan QR Code'
                        onPress={() => this.props.navigation.navigate('Camera')}/>
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
        marginTop: 300,
        marginLeft: 100,
        height: 100,
        width: 200
    },

    welcomeMessage: {
        textAlign: 'center'
    },

    textHeader: {
        marginTop: 10,
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
        paddingBottom: 10
    },

    text: {
        paddingTop: 50,
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }





});