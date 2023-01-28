import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onAdd, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleChange = (value) => {
    setEnteredGoal(value);
  };

  const addGoalHandler = () => {
    onAdd(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          style={styles.input}
          placeholder='Course Goal'
          onChangeText={handleChange}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
});

export default GoalInput;
