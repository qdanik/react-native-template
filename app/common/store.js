import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from "./reducers";

const persistConfig = {
	key       : 'root',
	storage,
	blacklist : ['navigation', 'webView']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
	let store     = createStore(persistedReducer, initialState, applyMiddleware(thunkMiddleware));
	let persistor = persistStore(store);

	return {store, persistor};
}