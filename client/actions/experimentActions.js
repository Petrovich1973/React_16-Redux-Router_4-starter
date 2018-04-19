import axios from "axios";

export function experimentChangeSearchCurrent(value) {
    return {
        type: 'EXPERIMENT_UPDATE_CHANGE_SEARCH_CURRENT',
        payload: value
    };
}

export function experimentResetFields() {
    return {
        type: 'EXPERIMENT_RESET_FIELDS'
    };
}

export function experimentChangeField(params) {
    return {
        type: 'EXPERIMENT_UPDATE_FIELD_SEARCH',
        payload: params
    };
}

///////////////////// CLIENTS //////////////////////////

export function experimentFetchClients() {
    return function (dispatch) {
        dispatch({ type: "EXPERIMENT_FETCH_CLIENTS" });
        axios.get("/api/clients")
            .then((response) => {
                dispatch({ type: "EXPERIMENT_FETCH_CLIENTS_FULFILLED", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "EXPERIMENT_FETCH_CLIENTS_REJECTED", payload: err });
            });
    };
}