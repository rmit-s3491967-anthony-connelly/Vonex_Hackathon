import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import userProfileStore from '../stores/UserProfileStore';

export default class NavigationBar extends Component {
    _onPressButton() {
        userProfileStore.toggleDisplayProfile();
    }
    render() {
        return (
            <View>
                <Button
                onPress={this._onPressButton}
                title="Press Me"
                />
            </View>
        )
    }
}