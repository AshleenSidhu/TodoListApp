import { View, Text } from 'react-native'
import React from 'react'

const ToDoForm = () => {
  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
      </View>
    </View>
  )
}

export default ToDoForm