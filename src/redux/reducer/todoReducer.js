import types from '../actions/types'

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    let stateCopy = {...state};

    switch(action.type) {
        case types.add:
            stateCopy.items = [...stateCopy.items, action.payload];
            return stateCopy;
            case types.del:
                stateCopy.items = stateCopy.items.filter(item=>item!=action.payload);
                return stateCopy;
        default:
            return stateCopy;
    }
};