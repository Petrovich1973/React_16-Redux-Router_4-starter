import { combineReducers } from "redux";

import screen1 from "./screen1Reducer";
import screen2 from "./screen2Reducer";
import journal from "./journalReducer";

export default combineReducers({
    screen1,
    screen2,
    journal
});
