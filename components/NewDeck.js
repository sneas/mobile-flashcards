import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { gray, lightGray, primary, white } from '../utils/colors';

export default class NewDeck extends Component {
  state = {
    deckName: '',
  }

  render() {
    const disabled = this.state.deckName.trim().length === 0;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <View style={styles.deckNameContainer}>
          <TextInput
            style={styles.deckNameInput}
            onChangeText={(deckName) => this.setState({deckName})}
            value={this.state.deckName}
          />
        </View>
        <TouchableOpacity
          style={[styles.submitBtn, disabled && styles.submitBtnDisabled]}
          disabled={disabled}
        >
          <Text style={styles.submitBtnText}>Add new deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  deckNameContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  deckNameInput: {
    flex: 0.8,
    height: 40,
    borderColor: gray,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
  },
  submitBtn: {
    backgroundColor: primary,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  submitBtnDisabled: {
    backgroundColor: lightGray,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});