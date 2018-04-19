import axios from "axios";

export function fetchClients() {
    return function (dispatch) {
        dispatch({ type: "FETCH_CLIENTS" });
        axios.get("/api/clients")
            .then((response) => {
                dispatch({ type: "FETCH_CLIENTS_FULFILLED", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_CLIENTS_REJECTED", payload: err });
            });
    };
}

export function fetchClient(id) {
    return function (dispatch) {
        dispatch({ type: "FETCH_CLIENTS" });
        axios.get("/api/clients/" + id)
            .then((response) => {
                dispatch({ type: "FETCH_CLIENT_FULFILLED", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_CLIENTS_REJECTED", payload: err });
            });
    };
}

export function updateConfigClients(params) {
    return {
        type: 'UPDATE_CONFIG_CLIENTS',
        payload: params
    };
}