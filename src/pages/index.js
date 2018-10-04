import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    StatusBar
} from 'react-native';

import data from '/Users/jasmine.sodhi/Dev/React Native/form/form.json';

import CustomTextInput from '../components/customTextInput';
import CustomDateInput from '../components/customDateInput';
import CustomDropdown from '../components/customDropdown';
import CustomButton from '../components/customButton';

export default class Index extends Component {
    static navigationOptions = ({navigation}) =>({
        headerTitle: 'Form',
        headerTintColor: 'white',
    }); 

    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled: false,
        }
    }

    renderFields() {
        const formAttributes = data.form.attributes;
        formObject = formAttributes.map((item) => {
            const formField = item.fieldType;

            switch(formField) {
                case 'numeric':
                case 'text':
                    return (<CustomTextInput
                        type = {formField}
                        labelText = {item.labelText} 
                        maxLabelLength = {item.maxLabelLength}
                        validations = {item.validations}/>);
                case 'date':
                    return (<CustomDateInput
                        labelText = {item.labelText}
                        maxLabelLength = {item.maxLabelLength}
                        validations = {item.validations}/>);
                case 'dropdown':
                    return (<CustomDropdown
                        labelText = {item.labelText}
                        maxLabelLength = {item.maxLabelLength}
                        options = {item.options}
                        validations = {item.validations}/>);
            }
        });

        return(formObject);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <React.Fragment>
                <StatusBar backgroundColor='#673AB7' barStyle='light-content' />
                <ScrollView style={styles.contentBackgroundColor}>
                    {this.renderFields()}
                </ScrollView>
                <CustomButton
                    complete={false}
                    buttonDisabled={this.state.buttonDisabled}
                    submit={() => navigate('QRScan')}>
                    {data.form.buttonTitle}
                </CustomButton>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create ({
    contentBackgroundColor:{
        backgroundColor: 'white',
    },
});