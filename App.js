import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState(null);

  const handleAdd = () => {
    setCourseGoals((prev) => [...prev, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          value={enteredGoal}
          style={styles.input}
          onChangeText={(text) => setEnteredGoal(text)}
        />
        <Button title='add' onPress={handleAdd} />
      </View>
      <FlatList data={courseGoals} renderItem={(itemData) => (
        <View style={styles.listItem}>
          <Text>{itemData.item}</Text>
        </View>
      )} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    backgroundColor: '#d3c2c2',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 3,
    margin: 10,
  },
});
