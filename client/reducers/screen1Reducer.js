const initialState = {    
    data: {}
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case "UPDATE_DATA_SCREEN1": {
            return {
                ...state,
                data: action.payload
            };
        }
    }

    return state;
}