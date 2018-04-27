import React, {Component,} from 'react';
import {
	StyleSheet,
	View,
	Animated,
	TextInput,
	Text
} from 'react-native';

const styles = {
	inputView : {
		width             : '100%',
		height            : 55,
		marginTop         : 20,
		backgroundColor   : '#0b111a',
		borderBottomWidth : 3,
	},
	textInput : {
		width         : '100%',
		fontFamily    : 'UbuntuBold',
		fontSize      : 20,
		color         : '#eee',
		paddingLeft   : 15,
		paddingBottom : 20,
	},
	textHint  : {
		fontSize   : 12,
		fontFamily : 'UbuntuRegular',
		color      : '#96a6b3',
		marginTop  : 15,
		textAlign  : 'right',
	}
};

/**
 * Styled Input
 * label : <string>
 * hint : <string>
 * error : <string>
 * type : <input|phone|email>
 */
class Input extends Component {
	static typePatterns = {
		input : /(.+)?/,
		phone : /^\\+375 \\((17|29|33|44)\\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
		email : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	};

	constructor(props) {
		super(props);

		this.state = {
			isValid : null,
			...this.props,
			pattern : Input.typePatterns[this.props.type ? this.props.type : 'input'],
		};

		this.animatedValue   = new Animated.Value(0);
		this.onChangeText    = this._onChangeText.bind(this);
		this.getKeyboardType = this._getKeyboardType.bind(this);
	}

	componentWillMount() {
		this.inputValue = '';
	}

	validate(text) {
		const {pattern, type} = this.state;

		switch ( type ) {
			case 'email':
				text = String(type).toLowerCase();
				break;
		}

		console.log(pattern, text, pattern.test(text));

		return pattern.test(text);
	}

	animation(value, duration = 200) {
		Animated.timing(this.animatedValue, {
			toValue  : value,
			duration : duration
		}).start();
	}

	_onBlur() {
		if ( this.inputValue.length > 0 ) {
			return;
		}

		this.animation(0);
	}

	_onFocus() {
		this.animation(100);
	}

	_onChangeText(text) {
		this.inputValue = text;
		this.setState({
			isValid : this.validate(text)
		})
	}

	_getKeyboardType() {
		const {type} = this.state;

		switch ( type ) {
			case 'email':
				return 'email-address';
			default:
				return 'default';
		}
	}

	render() {
		const {isValid, label, error, hint} = this.state;

		const interpolatedLabelPosition = this.animatedValue.interpolate({
			inputRange  : [0, 130],
			outputRange : [14, 5]
		});
		const interpolatedLabelSize     = this.animatedValue.interpolate({
			inputRange  : [0, 130],
			outputRange : [22, 14]
		});

		const borderColor = (isValid === null) ? '#2b394b' : ((isValid === true) ? '#186f51' : '#a5092e');
		const color       = (isValid === null) ? '#96a6b3' : ((isValid === true) ? '#96a6b3' : '#a5092e');
		return (
			<View>
				<View style={[styles.inputView, {borderColor : borderColor}]}>
					<Animated.Text
						style={{
							fontSize   : interpolatedLabelSize,
							top        : interpolatedLabelPosition,
							left       : 15,
							fontFamily : 'UbuntuRegular',
							color
						}}>
						{label}
					</Animated.Text>
					<TextInput
						keyboardType={this.getKeyboardType()}
						style={styles.textInput}
						onBlur={() => this._onBlur()}
						onFocus={() => this._onFocus()}
						onChangeText={(text) => this.onChangeText(text)}
					/>
				</View>
				{hint && (isValid === true || isValid === null) ? <Text style={{...styles.textHint}}>{hint}</Text> : null}
				{error && isValid === false ? <Text style={{...styles.textHint, color}}>{error}</Text> : null}
			</View>
		);
	}
}

export default Input;