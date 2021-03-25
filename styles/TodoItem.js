import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	todo_wrapper_light: {
		marginTop: 4,
		alignItems: 'center',
		borderBottomWidth: 2,
		flexDirection: 'row',
		backgroundColor: '#6D64DF',
		borderBottomColor: '#FFA3FF',
	},
	todo_wrapper_dark: {
		marginTop: 4,
		alignItems: 'center',
		borderBottomWidth: 2,
		flexDirection: 'row',
		backgroundColor: '#393A39',
		borderBottomColor: "#789AFC",
	},
	todo_text: {
		padding: 15,
		fontSize: 15,
		maxWidth: 290,
		color:'white',
		fontWeight: 'bold',
	},
	delete_button: {
		right: 15,
		width: 15,
		position: 'absolute',
	}
})

export default styles;