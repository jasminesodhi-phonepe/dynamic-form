import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Picker} from "native-base";

import { responsiveWidth } from 'react-native-responsive-dimensions';

import {validateInput} from '../validators';

export default class CustomDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Select ..."
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });

    validateInput(this.state.selected, this.props.validations)
  }

  render() {
    return (
      <View style={styles.inputItem}>
        <Text style = {styles.label}>
          {this.props.labelText.length < this.props.maxLabelLength ? this.props.labelText : alert('Incorrect Label')}
        </Text>
        <Picker
          mode="dropdown"
          style={styles.input}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}>
          <Picker.Item label={this.props.options[0]} value={this.props.options[0]}/>
          <Picker.Item label={this.props.options[1]} value={this.props.options[1]}/>
          <Picker.Item label={this.props.options[2]} value={this.props.options[2]}/>
        </Picker>
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