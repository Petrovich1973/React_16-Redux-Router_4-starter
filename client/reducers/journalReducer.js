const initialState = {    
    data: [],
    spinner: false
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case "JOURNAL": {
            return {
                ...state,
                ...action.payload
            };
        }
    }

    return state;
}