import {Platform} from 'react-native';

import firebase, {Defaults} from 'react-native-firebase';
import type {RemoteMessage, Notification, NotificationOpen} from 'react-native-firebase';

const notify  = firebase.notifications;
const message = firebase.messaging;

export default class Notify {

	constructor() {

	}

	/**
	 * Create Static channel
	 * @param data
	 * @returns {Promise<void>}
	 */
	static async createChannel(data = {id : 'main', name : 'main'}) {

		const channel = new notify.Android.Channel(data.id, data.name, notify.Android.Importance.Max);
		await notify().android.createChannel(channel);
	}

	/**
	 * Send Notifications
	 * @param data
	 * @returns {Promise<void>}
	 */
	static async send(data) {

		if ( data === undefined ) {
			data = {
				id       : 'main',
				title    : 'Unknown title',
				subtitle : 'Unknown subtitle',
				body     : 'Unknown body',
				sound    : 'default',
				type     : false,
				actions  : []
			}
		}

		if ( data.type ) {
			data.actions = await this.getActionByType(data.type);
		}

		const notification = new notify.Notification()
			.setNotificationId(data.id)
			.setTitle(data.title)
			.setSubtitle(data.subtitle)
			.setBody(data.body)
			.setSound(data.sound || 'default');

		if ( Platform.OS === 'ios' ) {

		} else if ( Platform.OS === 'android' ) {
			const android = notify.Android;

			notification
				.android.setChannelId(data.id)
				.android.setAutoCancel(true)
				.android.setDefaults(android.Defaults.All)
				.android.setBadgeIconType(android.BadgeIconType.Small)
				.android.setCategory(android.Category.Recommendation)
				.android.setRemoteInputHistory(data.actions);

			if ( data.actions ) {
				await data.actions.map((action) => {
					notification.android.addAction(action);
				})
			}
		}

		await notify().displayNotification(notification);
		const badge = await notify().getBadge();
		await notify().setBadge(badge + 1);
	}

	sendSchedule() {

	}

	static getActionByType(type) {

		switch ( type ) {
			case 'bet' : {
				return [
					new notify.Android.Action('bet', 'icon', 'title')
						.setSemanticAction(notify.Android.SemanticAction.Reply)
						.setShowUserInterface(true)
						.addRemoteInput(new notify.Android.RemoteInput('value').setLabel('value'))
				]
			}
		}

		return [];
	}

	/**
	 * Request Permission
	 * @returns {Promise<{hasPermission: boolean, exception: *}>}
	 */
	static async permission() {
		const enabled     = await message().hasPermission();
		let hasPermission = false;
		let exception     = null;

		if ( enabled ) {
			hasPermission = enabled;
		} else {
			try {
				await message().requestPermission();
				hasPermission = true;
			} catch ( error ) {
				exception = error;
			}
		}

		return {hasPermission, exception};
	}

	/**
	 * Get Initial Notifications
	 * @param callback
	 * @returns {() => any}
	 */
	static onInitial = (callback) => notify().onNotificationOpened(callback);

	/**
	 * Get Notifications Listener
	 * @param callback
	 * @returns {() => any}
	 */
	static onNotify = (callback) => notify().onNotification(callback);

	/**
	 * Get Displayed Notifications
	 * @param callback
	 * @returns {() => any}
	 */
	static onDisplayed = (callback) => notify().onNotificationDisplayed(callback);

	/**
	 * Get Opened Notifications
	 * @param callback
	 * @returns {() => any}
	 */
	static onOpened = (callback) => notify().onNotificationOpened(callback);
}