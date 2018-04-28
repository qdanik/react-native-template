import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StatusBar, NetInfo, Alert, BackHandler, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import firebase from 'react-native-firebase';
import type {RemoteMessage, Notification, NotificationOpen} from 'react-native-firebase';

import configureStore from './common/store';
import Scenes from './common/scenes/container';
import Spinner from './components/spinner/container';
import Notify from "./assets/libs/notify";

let store = configureStore();

const setting = require('../app.json');

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		// await Notify.createChannel();
		// const permission = await Notify.permission();
		// console.log('permission', permission);
		//
		// Notify.onInitial((notificationOpen: NotificationOpen) => {
		// 	if ( notificationOpen ) {
		// 		const {action, notification, results} = notificationOpen;
		// 	}
		// });
		//
		// Notify.onDisplayed((notification: Notification) => {
		// 	console.log('######## notificationDisplayedListener', );
		// });
		//
		// Notify.onNotify(async (notification: Notification) => {
		//
		// 	await Notify.send({
		// 		id       : 'main',
		// 		title    : notification._title,
		// 		subtitle : notification._subtitle,
		// 		body     : notification._body,
		// 	});
		//
		// });
		//
		// Notify.onOpened((notificationOpen: NotificationOpen) => {
		// 	const {action, notification, results} = notificationOpen;
		// 	console.log('######## notificationOpen', );
		// });
	}

	render() {

		return (
			<Provider store={store.store}>
				<PersistGate loading={<Spinner visible={true}/>} persistor={store.persistor}>
					<StatusBar backgroundColor="#212121" barStyle="light-content"/>
					<Scenes/>
				</PersistGate>
			</Provider>
		)
	}
}