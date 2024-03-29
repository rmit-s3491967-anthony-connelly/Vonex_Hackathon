import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    Image,
    Text,
    Button,
    View} from 'react-native';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '',
                    password: ''};
    }

    handleSubmit = ({ username, password}) => {
        console.log("got it")
        axios.post('http://10.132.17.173:8080/verify_user',
            
             {
                username: this.state.username,
                password: this.state.password
            }

        ).then(response => {
            if (response.data.login == true){ 
                this.props.navigation.navigate('Home')
            }} )
        .catch(error => {
            console.error(
            `There has been a problem with your fetch operation: ${error.message}`
            );
      });

    }

    render() {

        return (
            <View style= {styles.background}>
                <View style= {styles.container}>
                    <Image 
                        source={require('./Logo.png')}
                        style ={styles.image}/>
                    <Text style={styles.title}>SmartDash&trade;</Text>
                    <TextInput
                        name = "username"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        style={styles.input}
                        />
                    <TextInput
                        name = 'password'
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        style={styles.input}
                        secureTextEntry
                        />
                    <Button title = "Log In"
                        onPress={this.handleSubmit }/>
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

    container: {
        justifyContent: 'center',
        flexGrow: 1,
        alignItems: 'center'
    },

    input: {
        marginBottom: 20,
        height: 40, 
        width: 300,
        borderColor: 'gray', 
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: 'rgb(160, 224, 235)'
    },

    image:{
        height:200,
        width:200,
    },

    title: {
        fontSize:30,
        color:'white',
        marginBottom:20
    }
});