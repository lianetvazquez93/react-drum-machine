import {POWER, VOLUME, DISPLAY, BANK} from "../constants/action-types";

const initialState = {
    power: false,
    volume: 0.5,
    display: "Drum Machine",
    bank: false
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case POWER:
            return Object.assign({}, state, {power: action.power});
        case VOLUME:
            return Object.assign({}, state, {volume: action.volume});
        case DISPLAY:
            return Object.assign({}, state, {display: action.display});
        case BANK:
            return Object.assign({}, state, {bank: action.bank});
        default:
            return state;
    }
};

export default rootReducer;