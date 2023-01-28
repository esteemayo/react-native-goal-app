import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const handleAdd = (value) => {
    setCourseGoals((prev) => [
      ...prev,
      { id: (Math.random() * 10000).toString(), text: value }
    ]);
  };

  const handleDelete = (goalId) => {
    setCourseGoals((prev) => prev.filter((item) => item.id !== goalId));
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        onAdd={handleAdd}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            text={itemData.item.text}
            onDelete={handleDelete}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
