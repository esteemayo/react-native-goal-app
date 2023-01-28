import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onAdd }) => {
  const [enteredGoal, setEnteredGoal] = useState(null);

  const handleChange = (value) => {
    setEnteredGoal(value);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoal}
        style={styles.input}
        placeholder='Course Goal'
        onChangeText={handleChange}
      />
      <Button title='add' onPress={onAdd.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

export default GoalInput;
