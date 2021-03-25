import React from "react";
import styles from '../styles/TodoItem';
import delete_icon from '../assets/delete.png';
import { SafeAreaView, Text, TouchableOpacity, Image } from "react-native";

function TodosComponent({mode, todo, id, remove}) {
  return (
    <SafeAreaView style={mode ? styles.todo_wrapper_light : styles.todo_wrapper_dark }>
    <Text style={styles.todo_text}>{todo}</Text>
    <TouchableOpacity onPress={() => remove(id)} style={styles.delete_button}>
    <Image source={delete_icon}/>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

export default TodosComponent;
