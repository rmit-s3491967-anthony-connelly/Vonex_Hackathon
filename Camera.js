import React, {Component} from 'react';
import {
    StyleSheet,
    Button,
    View} from 'react-native';
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
              <Button title='Scan'
                onPress={() => this.props.navigation.navigate('Profile')}/>
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