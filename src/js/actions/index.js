import { POWER, VOLUME, DISPLAY, BANK } from "../constants/action-types";

export function switchPower(currentState) {
    return {
        type: POWER,
        power: !currentState
    };
}

export function changeVolume(newVolume) {
    return {
        type: VOLUME,
        volume: newVolume
    };
}

export function updateDisplay(newDisplay) {
    return {
        type: DISPLAY,
        display: newDisplay
    };
}

export function switchBank(currentBank) {
    return {
        type: BANK,
        bank: !currentBank
    };
}