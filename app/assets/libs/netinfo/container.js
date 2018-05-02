import React, {Component} from 'react';

import {NetInfo} from 'react-native';
import {connect} from 'react-redux';

import {changeStatus, changeType, changeEffectiveType} from "./actions";
import netInfo from "./reducer";

class NetInfoLib extends Component {
	constructor(props) {
		super(props);

		this.handleListener = this.handleListener.bind(this);
		this.getStatus      = this.getStatus.bind(this);

		this.getStatus();
		this.addListener();
	}

	handleListener(connectionInfo) {
		const {changeType, changeEffectiveType} = this.props;

		this.getStatus();
		changeType(connectionInfo.type);
		changeEffectiveType(connectionInfo.effectiveType);
	}

	getStatus() {
		const {changeStatus} = this.props;

		NetInfo.isConnected.fetch().then(isConnected => {
			changeStatus(isConnected);
		});
	}

	addListener() {
		NetInfo.addEventListener('connectionChange', this.handleListener);
	}

	render = () => null;
}

export default connect(function (state) {
	return state.netInfo;
}, {changeStatus, changeType, changeEffectiveType})(NetInfoLib);