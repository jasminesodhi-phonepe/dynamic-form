/* Library Imports */
import React from "react";
import { Spinner } from "native-base";
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Keyboard, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            keyboardOpen : false
        }
    }

    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardShowHandler);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardHideHandler);
    }
    
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    
    _keyboardShowHandler = () => {
        this.setState({ keyboardOpen : true});
    }


    _keyboardHideHandler = ()  => {
        this.setState({ keyboardOpen : false});
    }

    render(){
        return (
            <View style={!this.state.keyboardOpen ? (this.props.complete ? [styles.container, styles.completeContainer]: styles.container) : {width:0, height: 0}}>
                { !this.state.keyboardOpen && !this.props.loading &&
                    <View>
                        <TouchableHighlight 
                            delayLongPress={4000} 
                            underlayColor={this.props.complete ? '#02C96b' :'#5B2FAA'}
                            disabled={this.props.buttonDisabled} 
                            style={this.props.buttonDisabled ? [ styles.button, styles.buttonDisabled ] : this.props.complete ?  [ styles.button, styles.completeButton] : styles.button}
                            onPress={this.props.submit}
                        >
                           <Text style={styles.buttonText}>{this.props.children}</Text>
                        </TouchableHighlight>
                    </View>
                }
                { this.props.loading && 
                    <View>
                        <Spinner color={'white'}/>
                    </View>
                }
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    button: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(100),
        backgroundColor: '#673AB7'
    },
    buttonDisabled:{
        backgroundColor: '#E5E5E5'
    },
    completeButton:{
        backgroundColor: '#02C979'
    },
    buttonText:{
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: 'white'        
    },
    container:{
        left: 0,
        bottom: 0,
        height: 56,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(100),
        backgroundColor: '#5B2FAA'
    },
    completeContainer:{
        backgroundColor: '#02C96b'
    }
});
