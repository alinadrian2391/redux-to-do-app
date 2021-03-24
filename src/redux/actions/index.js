import types from './types';

export const add = (payload) => dispatch => { dispatch({type: types.add, payload})} 
export const del = (payload) => dispatch => { dispatch({type: types.del, payload})}
export const edit = (payload) => dispatch => { dispatch({type: types.edit, payload})}