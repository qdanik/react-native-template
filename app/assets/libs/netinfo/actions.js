import {createAction} from 'redux-actions';

export const changeStatus = createAction('app/main/netinfo/change/status');
export const changeType = createAction('app/main/netinfo/change/type');
export const changeEffectiveType = createAction('app/main/netinfo/change/effective/type');