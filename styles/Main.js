import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body_light: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEF6FF",
  },
  body_dark: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#283146'
  },
  hero_image: {
    top: 0,
    width: "113%",
    height: "50%",
    resizeMode: "cover",
    position: "absolute",
  },
  header: {
    top: '9%',
    width: "85%",
    position: 'absolute',
    flexDirection: 'row',
  },
  todo_text: {
    fontSize: 40,
    width: '95%',
    color: 'white',
    fontWeight: 'bold',
  },
  mode_toggle_image: {
    width: 25,
    height: 25,
    opacity: 0.6
  },
  reset_button: {
    bottom: 55,
    position: 'absolute',
  },
  footer_light: {
    bottom: 30,
    opacity: 0.5,
    fontSize: 20,
    position: "absolute",
  },
  footer_dark: {
    bottom: 30,
    opacity: 0.5,
    fontSize: 20,
    color: 'white',
    position: "absolute",
  },
  hide: {
    display: 'none'
  }
});

export default styles;
