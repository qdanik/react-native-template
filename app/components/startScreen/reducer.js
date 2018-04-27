import {testAction} from "./actions";

const initialState = {
	loading  : false,
	testData : false,
};

export default function (state = initialState, action) {

	switch ( action.type ) {
		case testAction.toString(): {
			const {testData} = action.payload;

			return {...state, testData};
		}
	}

	return state;
}