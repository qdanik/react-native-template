import {StyleSheet} from "react-native";

export default StyleSheet.create({
	body     : {
		backgroundColor : '#d7d8db',
		height          : '100%',
		flex            : 1,
	},
	header   : {
		backgroundColor : '#fe8200',
		flex            : 1,
		flexDirection   : 'row',
		alignItems      : 'center',
		width           : '100%',
		borderWidth     : 1,
		borderColor     : '#f94f00',
	},
	content  : {
		flex   : 10,
		margin : 5,
		width  : '100%',
	},
	mainMenu : {
		flex             : 0,
		justifyContent   : 'center',
		alignItems       : 'center',
		width            : '15%',
		height           : '100%',
		borderRightWidth : 1,
		borderColor      : '#f94f00',
	},
	logo     : {
		marginLeft       : '20%',
		borderRightWidth : 1,
		width            : 140,
		borderColor      : '#f94f00',
		resizeMode       : 'contain'
	},
});