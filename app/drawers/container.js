import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {logOut} from "../components/startScreen/actions";

const styles = StyleSheet.create({
	container    : {
		backgroundColor : '#fbfbfb',
		padding         : 0,
		height          : '100%'
	},
	title        : {
		height          : 55,
		fontSize        : 24,
		color           : '#fff',
		backgroundColor : '#fe8200',
		padding         : 10,
		shadowOpacity   : 0.3,
		shadowRadius    : 4,
		shadowOffset    : {height : 0, width : 0},
		elevation       : 4,
	},
	item         : {
		borderBottomWidth : 2,
		borderBottomColor : 'rgba(0,0,0,.1)',
		height            : 55,
		padding           : 14,
	},
	itemText     : {
		fontSize : 18,
		color    : '#212121'
	},
	quit         : {
		borderTopWidth  : 2,
		borderTopColor  : 'rgba(0,0,0,.1)',
		height          : 55,
		width           : '100%',
		padding         : 14,
		position        : 'absolute',
		backgroundColor : '#212121',
		left            : 0,
		bottom          : 0
	},
	quitText     : {
		fontSize : 18,
		color    : '#ffffff'
	},
	language     : {
		width          : '100%',
		position       : 'absolute',
		left           : 0,
		bottom         : 55,
		height         : 50,
		borderTopWidth : 2,
		borderTopColor : 'rgba(0,0,0,.1)',
		flexDirection  : 'row',
		alignItems     : 'center',
		paddingLeft    : 10
	},
	languageText : {
		fontSize  : 18,
		color     : '#212121',
		width     : '20%',
		textAlign : 'center'
	}
});

class DrawerContent extends Component {

	constructor(props) {
		super(props);

		this.logOut = this._logOut.bind(this);
	}

	_logOut() {
		this.props.logOut();
	}

	render() {

		return (
			<View style={styles.container}>
				<Text style={styles.title}>МЕНЮ{this.props.title}</Text>
				<TouchableHighlight style={styles.item} onPress={Actions.main} underlayColor='#e3e4e8'>
					<Text style={styles.itemText}>Главная</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

export default connect(function (state) {
	return {
		isAuth : state.signIn.isAuth
	};
}, {logOut})(DrawerContent);