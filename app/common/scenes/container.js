import React, {Component} from 'react';
import {connect} from "react-redux";
import {Router, Stack, Scene, Overlay, Actions, Drawer} from 'react-native-router-flux';

// Start Screen
import StartScreen from '../../components/startScreen/container';

import {StyleSheet, Button, Image} from "react-native";

class Container extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const ConnectedRouter = connect()(Router);
		const {startScreen}   = this.props;

		return (
			<ConnectedRouter>
				<Scene key={'root'}>
					<Scene
						key={'startScreen'}
						component={StartScreen}
						hideNavBar
						initial={true}
					/>
				</Scene>
			</ConnectedRouter>
		);
	}
}

const styles = StyleSheet.create({
	registrationStyle : {
		backgroundColor : '#2b394b',
	},
	registrationText  : {
		fontFamily : 'UbuntuMedium',
		fontSize   : 24,
		color      : '#fff'
	}
});

export default connect((state) => {
	return {
		events      : state.events,
		startScreen : state.startScreen,
		main        : state.main
	};
})(Container);