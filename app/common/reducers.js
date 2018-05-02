import {combineReducers} from "redux";

import netInfo from '../assets/libs/netinfo/reducer';
import sceneReducer from './scenes/reducer';

import startScreen from '../components/startScreen/reducer';

export default combineReducers({
	netInfo,
	sceneReducer,
	startScreen,
});