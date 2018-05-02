import {changeStatus, changeType, changeEffectiveType} from "./actions";

const initialState = {
	status        : false,
	type          : 'unknown',
	effectiveType : 'unknown',
};

export default function (state = initialState, action) {
	switch ( action.type ) {
		case changeStatus.toString(): {
			const status = action.payload;

			return {...state, status};
		}
		case changeType.toString(): {
			const type = action.payload;

			return {...state, type};
		}
		case changeEffectiveType.toString(): {
			const effectiveType = action.payload;

			return {...state, effectiveType};
		}
	}

	return state;
}