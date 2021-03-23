import types from './types';

export const add = (payload) => dispatch => { dispatch({type: types.add, payload})} 