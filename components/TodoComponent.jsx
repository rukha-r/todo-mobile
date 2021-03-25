import React, { useState } from "react";
import styles from "../styles/Todo";
import TodosComponent from "./TodosComponent";
import { SafeAreaView, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

function TodoComponent({mode, todos, add, remove }) {
  const [text, setText] = useState(null);
  const updateText = newTextValue => setText(newTextValue);
  return (
  	<SafeAreaView style={styles.component_wrapper}>
  	<TextInput  value={text} placeholder="New todo" onChangeText={updateText} style={ mode ? styles.input_light : styles.input_dark} />
    <TouchableOpacity style={mode ? styles.add_button_light : styles.add_button_dark} onPress={() => add(text, setText(null))}>
    <Text style={styles.add_button_text}>+</Text>
    </TouchableOpacity>
  	{ todos.length ? <FlatList style={styles.todo_items_part}
    data={todos}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => <TodosComponent  id={item.id} todo={item.todo} key={item.id} remove={remove} mode={mode}/>}
    >
    </FlatList> : <Text style={mode ? styles.empty_text_light : styles.empty_text_dark}>Empty list</Text> }
    </SafeAreaView>
  	) 
}

export default TodoComponent;
