const initialState = {    
    data: {},
    test: 'Игорь токарь',
    filter: {
        date: '20.12.2018',
        age: 23,
        name: 'Anatoly'
    }
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case "UPDATE_DATA_SCREEN2": {
            return {
                ...state,
                ...action.payload
            };
        }
    }

    return state;
}