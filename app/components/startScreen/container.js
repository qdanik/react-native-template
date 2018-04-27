import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableHighlight, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SiteLogo from '../../assets/images/logo.png';
import Background from '../../assets/images/background.jpg';
import Spinner from '../spinner/container';

class SignIn extends Component<any> {
	constructor(props) {
		super(props);

		this.onAuth     = this._onAuth.bind(this);
		this.onRegister = this._onRegister.bind(this);
		this.onGuest    = this._onGuest.bind(this);
	}

	componentDidMount() {

	}

	_onAuth() {
	}

	_onRegister() {
	}

	_onGuest() {
	}

	render() {
		const {loading} = this.props;

		return (
			<ImageBackground source={Background} style={styles.background}>
				<LinearGradient colors={['transparent', '#121922']} style={styles.container}>
					<Spinner visible={loading}/>
					<View style={styles.view}>
						<Image style={styles.logo} source={SiteLogo} />
						<TouchableHighlight style={styles.authButton} onPress={() => this.onAuth()} underlayColor='#335163'>
							<Text style={styles.buttonText}>Welcome to TemplateRN</Text>
						</TouchableHighlight>
					</View>
				</LinearGradient>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container       : {
		height          : '100%',
		padding         : 5,
		justifyContent  : 'center',
		marginTop       : 0,
		backgroundColor : 'transparent',
	},
	background      : {
		height          : '100%',
		backgroundColor : 'transparent',
	},
	logo            : {
		width        : 205,
		height       : 165,
		resizeMode   : 'contain',
		marginBottom : 80
	},
	view            : {
		padding        : 20,
		height         : '100%',
		justifyContent : 'center',
		alignItems     : 'center',
		flexDirection  : 'column'
	},
	buttonText      : {
		fontFamily : 'UbuntuBold',
		fontSize   : 18,
		fontWeight : 'bold',
		color      : 'white',
		alignSelf  : 'center',
	},
	authButton      : {
		backgroundColor : '#334153',
		width           : '78%',
		height          : '8%',
		borderRadius    : 4,
		justifyContent  : 'center',
	},
});

export default connect(function (state) {
	return {
		testData : state.startScreen.testData,
		loading  : state.startScreen.loading,
	}
})(SignIn);