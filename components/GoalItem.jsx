import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#d3c2c2',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 3,
    margin: 10,
  },
});

export default GoalItem;
