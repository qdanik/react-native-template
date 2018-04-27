import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

class SpinnerLayout extends React.Component<any> {
	constructor(props) {
		super(props);
	}

	render() {
		const {visible} = this.props;

		return (
			<Spinner style={{
				position        : 'absolute',
				left            : 0,
				top             : 0,
				width           : '100%',
				height          : '100%',
				backgroundColor : '#161e29'
			}} visible={visible} textContent={'Загрузка...'} textStyle={{color : '#FFF'}}/>
		);
	}
}

export default SpinnerLayout;