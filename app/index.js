import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StatusBar, Alert, BackHandler, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import firebase from 'react-native-firebase';
import type {RemoteMessage, Notification, NotificationOpen} from 'react-native-firebase';

import configureStore from './common/store';
import Scenes from './common/scenes/container';
import Spinner from './components/spinner/container';
import Notify from "./assets/libs/notify";
import NetInfo from './assets/libs/netinfo/container';

import param from './constants';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		await Notify.createChannel();
		const permission = await Notify.permission();

		Notify.onNotify(param.notify.on);
		Notify.onOpened(param.notify.opened);
		Notify.onInitial(param.notify.initial);
		Notify.onDisplayed(param.notify.displayed);
	}

	render() {

		return (
			<Provider store={param.store.store}>
				<PersistGate loading={<Spinner visible={true}/>} persistor={param.store.persistor}>
					<NetInfo/>
					<StatusBar backgroundColor={param.statusColor} barStyle={param.statusBar}/>
					<Scenes/>
				</PersistGate>
			</Provider>
		)
	}
}