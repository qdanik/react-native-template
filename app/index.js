import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StatusBar, NetInfo, Alert, BackHandler, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import firebase from 'react-native-firebase';
import type {RemoteMessage, Notification, NotificationOpen} from 'react-native-firebase';

import configureStore from './common/store';
import Scenes from './common/scenes/container';
import Spinner from './components/spinner/container';
import Notice from "./assets/libs/notice";

let store = configureStore();

const setting = require('../app.json');

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		await Notice.createChannel();
		const permission = await Notice.permission();
		console.log('permission', permission);

		Notice.onInitial((notificationOpen: NotificationOpen) => {
			if ( notificationOpen ) {
				const {action, notification, results} = notificationOpen;
				// console.log('######## notificationListener action', action);
				// console.log('######## notificationListener notification', notification);
				// console.log('######## notificationListener results', results);
			}
		});

		Notice.onDisplayed((notification: Notification) => {
			console.log('######## notificationDisplayedListener', notification);
		});
		Notice.onNotify(async (notification: Notification) => {
			// console.log('######## notificationListener', notification);
			await Notice.send({
				id       : 'main',
				title    : notification._title,
				subtitle : notification._subtitle,
				body     : notification._body,
				// actions  : [
				// 	new firebase.notifications.Android.Action('action', 'icon', 'title')
				// 		.setSemanticAction(firebase.notifications.Android.SemanticAction.Reply)
				// 		.setShowUserInterface(true)
				// 		.addRemoteInput(
				// 			new firebase.notifications.Android.RemoteInput('answer')
				// 				.setLabel('answer')
				// 		)
				// ]
			});

		});

		this.messageListener = firebase.messaging().onMessage((message: RemoteMessage) => {
			console.log('######## onMessage', message);
		});

		Notice.onOpened((notificationOpen: NotificationOpen) => {
			const {action, notification, results} = notificationOpen;
			console.log('######## notificationListener action', action);
			console.log('######## notificationListener notification', notification);
			console.log('######## notificationListener results', results);
		});

		// await Notice.send({
		// 	id       : 'main',
		// 	title    : 'title',
		// 	subtitle : 'subtitle',
		// 	body     : 'body',
		// 	actions  : [
		// 		new firebase.notifications.Android.Action('action', 'icon', 'title')
		// 			.setSemanticAction(firebase.notifications.Android.SemanticAction.Reply)
		// 			.setShowUserInterface(true)
		// 			.addRemoteInput(
		// 				new firebase.notifications.Android.RemoteInput('answer')
		// 					.setLabel('answer')
		// 			)
		// 	]
		// })
	}

	componentWillUnmount() {
		this.messageListener();
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