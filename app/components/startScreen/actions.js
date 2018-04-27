import {createAction} from 'redux-actions';

export const testAction = createAction('test/action');

export function test() {
	return (dispatch) => {
		dispatch(testAction({testData : true}))
	}
}