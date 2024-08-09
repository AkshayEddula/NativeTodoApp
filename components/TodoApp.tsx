import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addTodo, removeTodo } from '../redux/todoSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch: AppDispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo({ id: Date.now().toString(), text: newTodo }));
      setNewTodo('');
    }
  };

  const handleEditTodo = (id: string, text: string) => {
    setEditTodoId(id);
    setEditText(text);
  };

  const handleSaveEdit = () => {
    if (editTodoId) {
      dispatch(removeTodo(editTodoId));
      dispatch(addTodo({ id: editTodoId, text: editText }));
      setEditTodoId(null);
      setEditText('');
    }
  };

  const handleDeleteTodo = (id: string) => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete this todo?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => dispatch(removeTodo(id)),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-6">
        <StatusBar barStyle="dark-content" />
      <View className="mb-4">
        <TextInput
          value={editTodoId ? editText : newTodo}
          onChangeText={editTodoId ? setEditText : setNewTodo}
          placeholder={editTodoId ? 'Edit TODO' : 'Add a new TODO'}
          className="bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md"
          placeholderTextColor="#888"
        />
        <Button
          title={editTodoId ? 'Save Edit' : 'Add TODO'}
          onPress={editTodoId ? handleSaveEdit : handleAddTodo}
          color="#1D4ED8"
        />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white rounded-lg shadow-md mb-2 p-4 flex-row items-center justify-between border border-gray-200">
            <Text className="text-lg text-gray-800 flex-1">{item.text}</Text>
            <View className="flex-row gap-2">
              <TouchableOpacity
                onPress={() => handleEditTodo(item.id, item.text)}
                className="bg-blue-500 p-2 rounded-lg shadow-md"
              >
                <Text className="text-white font-semibold">Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteTodo(item.id)}
                className="bg-red-500 p-2 rounded-lg shadow-md"
              >
                <Text className="text-white font-semibold">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default TodoApp;
