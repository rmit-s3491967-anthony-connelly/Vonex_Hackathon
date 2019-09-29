import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    Button,
    View} from 'react-native';
import axios from 'axios';
import { RNCamera } from 'react-native-camera';


export default class Camera extends Component {
     render(){
        return(
        <View style = {{flex:1}}>
        <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style= {styles.camera}
            >
            </RNCamera>
           </View>
         );
    }
}

const styles = StyleSheet.create ({
    camera: {
        flex: 1,
        width: '100%'
    }
})