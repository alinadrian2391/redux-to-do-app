import types from '../actions/types'

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    let stateCopy = {...state};

    switch(action.type) {
        case types.add:
            stateCopy.items.push(action.payload);
            return stateCopy;
    }
};