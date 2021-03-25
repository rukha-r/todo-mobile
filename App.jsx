import React, { useState } from "react";
import styles from "./styles/Main";
import dark_mode from "./assets/dark.png";
import light_mode from "./assets/light.png";
import dark_image from "./assets/bg-mobile-dark.jpg";
import light_image from "./assets/bg-mobile-light.jpg";
import TodoComponent from "./components/TodoComponent";
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, Alert, Button } from "react-native";

export default function App() {
  const [mode, setMode] = useState(true);
  const [todos, setTodos] = useState([]);
  const toggleMode = () => setMode(!mode);
  const remove = (id) => setTodos(items => items.filter(todo => todo.id != id))
  const reset = () => Alert.alert("Warning","This will delete all of your list items", [{ text: 'Ok', onPress: () => setTodos([])},{ text: 'Cancel'}]);
  const add = (text, resetInputValue) => {
    if(!text) {
      Alert.alert('Empty Input', 'Please type something before adding!', 'OK');
    }
    else {
      setTodos(todos => [{id:Math.round(Math.random(99999999999)*3333), todo: text},...todos]);
      return resetInputValue;
    }
  }
  return (
    <SafeAreaView style={mode ? styles.body_light : styles.body_dark}>
      <ImageBackground source={mode ? light_image : dark_image} style={styles.hero_image} />
      <View style={styles.header}>
        <Text style={styles.todo_text}>TODO</Text>
        <TouchableOpacity onPress={toggleMode}>
        <Image source={mode ? dark_mode : light_mode} style={styles.mode_toggle_image} />
        </TouchableOpacity>
      </View>
      <TodoComponent todos={todos} add={add} remove={remove} mode={mode}/>
      <View style={ todos.length ? styles.reset_button : styles.hide}>
      <Button onPress={reset} title="Delete All" color={ mode ? 'blue' : 'white'}/>
      </View>
       <Text style={ mode ?  styles.footer_light : styles.footer_dark}>by@rukha-r</Text>
    </SafeAreaView>
  );
}