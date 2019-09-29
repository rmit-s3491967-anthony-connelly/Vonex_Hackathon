import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    Button,
    View} from 'react-native';

export default class Home extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={[styles.headerStyle, {fontSize: 50, fontWeight: 'bold'}]}>Cameron</Text>
                <View style={[{flexDirection: 'column'}, styles.elementsContainer]}>
                    <Text style={[{fontSize: 30, fontWeight: 'bold'}]}>Date</Text>
                    <Text style={[{fontSize: 20}]}>29/09/2019</Text>
                    <Text style={[{fontSize: 30, fontWeight: 'bold'}]}>Time frame</Text>
                    <Text style={[{fontSize: 20}]}>20:02 - 20:17</Text>
                    <Text style={[{fontSize: 30, fontWeight: 'bold'}]}>Camera</Text>
                    <Text style={[{fontSize: 20}]}>Front {"&"} Back Dashcam</Text>
                </View>
                <Button
                    title="Request Dashcam Footage"
                    color="#f194ff"
                    onPress={() => Alert.alert('Your request has been submitted')}
                    />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      marginTop: 48,
      flex: 1
    },
    headerStyle: {
      fontSize: 24,
      textAlign: 'center',
      fontWeight: '300',
      marginBottom: 24
    },
    elementsContainer: {
        padding: 20,
      flex: 1,
      backgroundColor: '#ecf5fd',
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 24
    },
    background: {
        flex: 1,
        backgroundColor: 'white'
    },

    topbar: {
    },

});