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
                    <Text>Profile Page</Text>
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