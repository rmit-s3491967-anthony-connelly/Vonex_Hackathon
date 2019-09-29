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
                <View>
                    <Text>Welcome to SmartDash!</Text>
                    <Text>When </Text>
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



});