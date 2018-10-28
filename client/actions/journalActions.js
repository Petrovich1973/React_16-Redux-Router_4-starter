import axios from "axios";

export function getJournal(filter) {
    return function (dispatch, getState) {
        const store = getState();
        dispatch({ type: "JOURNAL", payload: {spinner: true} });
        console.log(filter);
        axios.get(`http://${location.host}/api/journal`, {
		    	params: filter
			})
            .then((response) => {
                dispatch({ 
                    type: "JOURNAL",
                    payload: {data: response.data, spinner: false}
                });
            })
            .catch((err) => {
                //dispatch({ type: "FETCH_CLIENTS_REJECTED", payload: err });
                console.log(err);
            });
    };
}