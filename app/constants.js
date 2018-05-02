import type {RemoteMessage, Notification, NotificationOpen} from 'react-native-firebase';
import Notify from "./assets/libs/notify";
import configureStore from "./common/store";

export default {
	store       : configureStore(),
	//Status
	statusColor : '#212121',
	statusBar   : 'light-content',
	//Notify
	notify      : {
		on        : async (notification: Notification) => {
			await Notify.send({
				id       : 'main',
				title    : notification._title,
				subtitle : notification._subtitle,
				body     : notification._body,
			});
		},
		displayed : (notification: Notification) => {
			console.log('######## notificationDisplayedListener',);
		},
		opened    : (notificationOpen: NotificationOpen) => {
			const {action, notification, results} = notificationOpen;
			console.log('######## notificationOpen',);
		},
		initial   : (notificationOpen: NotificationOpen) => {
			if ( notificationOpen ) {
				const {action, notification, results} = notificationOpen;
			}
		}
	},

}