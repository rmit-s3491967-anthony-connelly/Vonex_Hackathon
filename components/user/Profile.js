import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class Profile extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }
    render() {
        return (
            <View>
                <Text>Profile.js</Text>
            </View>
        )
    }
}