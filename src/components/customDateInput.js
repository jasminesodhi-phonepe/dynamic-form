import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';

import {validateInput} from '../validators';

import { responsiveWidth } from 'react-native-responsive-dimensions';

export default class CustomDateInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            DateText: '',
            DateHolder: null,
        }
    }

    DatePickerMainFunctionCall = () => {
        let DateHolder = this.state.DateHolder;
        if(!DateHolder || DateHolder == null){
            DateHolder = new Date();
            this.setState({
            DateHolder: DateHolder
            });
        }

        this.refs.DatePickerDialog.open({
            date: DateHolder,
        });
    }

    onDatePickedFunction = (date) => {
        this.setState({
            dobDate: date,
            DateText: moment(date).format('DD-MMM-YYYY')
        });

        validateInput(this.state.DateText, this.props.validations)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    {this.props.labelText.length < this.props.maxLabelLength ? this.props.labelText : alert('Incorrect Label')}
                </Text>
                <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
                    <View style={styles.datePickerBox}>
                        <Text style={styles.datePickerText}>{this.state.DateText}</Text>
                    </View>
                </TouchableOpacity>

                <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 21
    },
    label:{
        fontSize: 14,
        marginBottom: 8,
        color: 'rgba(33, 33, 33, 0.72)',
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginHorizontal: responsiveWidth(10)
    },
    datePickerBox:{
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        color: '#212121',
        borderColor: '#BDBDBD',
        width: responsiveWidth(80),
        marginHorizontal: responsiveWidth(10)
    },
    datePickerText: {
        fontSize: 16,
        color: '#212121',
        fontFamily: 'Roboto',
        paddingLeft: 16,
        paddingTop: 7
    },
});