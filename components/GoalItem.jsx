import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GoalItem = ({ id, text, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
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
