import axios from "axios";

// export function initial() {
//     return function (dispatch) {
//         dispatch({ type: "FETCH_START_INITIAL" });
//         axios.get("/api/initial")
//             .then((response) => {
//                 dispatch({ type: "INITIALSTANDIN_START_INITIAL", payload: response.data });
//             })
//             .catch((err) => {
//                 //dispatch({ type: "FETCH_CLIENTS_REJECTED", payload: err });
//                 console.log(err);
//             });
//     };
// }

// export function getStatus(params) {
//     return function (dispatch) {
//         dispatch({ type: "FETCH_START_INITIAL" });
//         axios.get("/api/getstatus", params)
//             .then((response) => {
//                 dispatch({ type: "INITIALSTANDIN_GETSTATUS", payload: response.data });
//             })
//             .catch((err) => {
//                 //dispatch({ type: "FETCH_CLIENTS_REJECTED", payload: err });
//                 console.log(err);
//             });
//     };
// }


export function initialStandInGetStatus() {
    return function (dispatch, getState) {
        const store = getState();
        dispatch({ type: "FETCH_START_INITIAL" });
        axios.get("/api/getstatus")
            .then((response) => {
                dispatch({ 
                    type: "INITIALSTANDIN_GETSTATUS", 
                    payload: response.data 
                });
            })
            .catch((err) => {
                //dispatch({ type: "FETCH_CLIENTS_REJECTED", payload: err });
                console.log(err);
            });
    };
}




// export function initial() {
//     return {
//         type: 'INITIALSTANDIN_START_INITIAL'
//     };
// }