import types from '../actions/types'

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch(action.type) {
        case types.add:
            stateCopy.items = [...stateCopy.items, action.payload];
            return stateCopy;
        case types.del:
            stateCopy.items = stateCopy.items.filter(item=>item !== action.payload);
            return stateCopy; 
            case types.edit:
            stateCopy.items = stateCopy.items.map((item) =>{
                if(item === action.payload.title)
                    return action.payload.modifyValue;
                return item;
            });
            return stateCopy; 
        default:
            return stateCopy;
    }
};

export default reducer;