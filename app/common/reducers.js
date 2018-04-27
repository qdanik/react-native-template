import {combineReducers} from "redux";

import sceneReducer from './scenes/reducer';

import startScreen from '../components/startScreen/reducer';

export default combineReducers({
	sceneReducer,
	startScreen,
});