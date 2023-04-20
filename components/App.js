//Projeto feito pelos alunos da turma 3MC:
//Pedro Henrique Feitosa da Silva - 01516541
//Leonardo Luiz Guedes Coelho - 01515698

import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo'
import Sandbox  from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Comprar Café', key: '1' },
    { text: 'criar um aplicativo', key: '2'},
    { text: 'jogar video-game', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length>3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
         ];
      });
     } else {
       Alert.alert('OOPS!', 'A lista deve ter apenas elementos com mais de 3 letras', [
         {text: 'Entendi', onPress: () => console.log('alert closed')}

       ]);

    }

  }

  return (
    //<Sandbox />
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
        <FlatList 
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandler={pressHandler} />
        )}
        />
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 40,
    backgroundColor:  'orange',
    flex: 1,
  },
  list: {
    marginTop: 20,
    backgroundColor: 'coral',
  }
});