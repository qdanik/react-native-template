import React, {Component} from 'react';
import styles from "../../assets/styles/layouts";
import {View, TouchableHighlight, Image} from 'react-native';
import {connect} from "react-redux";

class Navigation extends Component {

	constructor(props) {
		super(props);

		this.mainMenu = this._mainMenu.bind(this);
	}

	_mainMenu() {
		const {navigation} = this.props;

		navigation.navigate('MainMenuToggle');
	}

	render() {
		return (
			<View style={styles.header}>
				<TouchableHighlight onPress={() => this.mainMenu()} style={styles.mainMenu} underlayColor='#161e29'>
					<Image
						style={{resizeMode : 'contain', width : '100%'}}
						source={require('../../assets/images/hamburg.png')}
					/>
				</TouchableHighlight>
				<Image
					style={styles.logo}
					source={require('../../assets/images/logo.png')}/>
			</View>
		)
	}
}

export default connect((state) => {
	return state;
})(Navigation);