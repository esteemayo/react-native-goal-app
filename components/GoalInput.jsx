import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onAdd, onCancel, visible }) => {
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
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
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
  btnContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: '40%',
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default GoalInput;
