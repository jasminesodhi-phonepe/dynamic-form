import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import {validateInput} from '../validators';

export default class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style = {styles.inputItem}>
                <Text style = {styles.label}>
                    {this.props.labelText.length < this.props.maxLabelLength ? this.props.labelText : alert('Incorrect Label')}
                </Text>
                <TextInput
                    keyboardType = {this.props.type === 'numeric' ? 'numeric' : 'default'}  
                    style = {styles.input}
                    onChangeText={(value) => this.setState({text: value})}
                    onSubmitEditing = {}>
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputItem:{
        marginTop: 21
    },
    input:{
        height: 40,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 2,
        paddingLeft: 16,
        color: '#212121',
        fontFamily: 'Roboto',
        borderColor: '#BDBDBD',
        width: responsiveWidth(80),
        marginHorizontal: responsiveWidth(10)
    },
    label:{
        fontSize: 14,
        marginBottom: 8,
        color: 'rgba(33, 33, 33, 0.72)',
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginHorizontal: responsiveWidth(10)
    },
});