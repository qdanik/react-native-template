import {AppRegistry} from 'react-native';

import App from './app/index';
import BackgroundNotifications from './app/assets/libs/BackgroundNotifications';

AppRegistry.registerComponent('templateRN', () => App);

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', BackgroundNotifications);
