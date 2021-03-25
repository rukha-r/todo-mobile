import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  component_wrapper: {
    top: 120,
    width: "87%",
    height: '81%',
    position: 'absolute',
  },
  add_button_light: {
    top: 0,
    right: 0,
    width: '15%',
    height: '9%',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#A76BEF',
    borderTopRightRadius: 20/2,
    borderBottomRightRadius: 20/2
  },
  add_button_dark: {
    top: 0,
    right: 0,
    width: '15%',
    height: '9%',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: "#789AFC",
    borderTopRightRadius: 20/2,
    borderBottomRightRadius: 20/2
  },
  add_button_text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input_light: {
  	fontSize: 18,
  	opacity: 0.8,
  	height: '9%',
  	width: '100%',
  	paddingLeft: 10,
  	borderRadius: 20/2,
  	backgroundColor: 'white'
  },
  input_dark: {
    fontSize: 18,
    opacity: 0.7,
    height: '9%',
    width: '100%',
    color:'white',
    paddingLeft: 10,
    borderRadius: 20/2,
    backgroundColor: '#393A39'
  },
  todo_items_part: {
  marginTop: 30,
  width: '100%',
  height: '100%',
  },
  empty_text_light: {
    top: '50%',
    left: '30%',
    fontSize: 30,
    opacity: 0.2,
    textAlign:'center',
    fontWeight: 'bold',
    position: 'absolute',
  },
  empty_text_dark: {
    top: '50%',
    left: '30%',
    fontSize: 30,
    opacity: 0.2,
    color: 'white',
    textAlign:'center',
    fontWeight: 'bold',
    position: 'absolute',
  }
});

export default styles;
