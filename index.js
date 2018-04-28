import {AppRegistry} from 'react-native';

import App from './app/index';
import notifyReceiver from './app/assets/libs/notifyReceiver';

AppRegistry.registerComponent('templateRN', () => App);

AppRegistry.registerHeadlessTask('NotifyReceiver', notifyReceiver);
