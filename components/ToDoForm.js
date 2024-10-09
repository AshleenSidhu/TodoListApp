import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const ToDoForm = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={newText => setText(newText)}
          value={text}
        />
        <Button
          title="Add"
          onPress={() => {
            // Add task logic here
            console.log('Task added:', text);
            setText('');
          }}
        />
      </View>
    </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});