import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {
    SET_THEME_DARK
} from './actionsTypes'

export const setDark = () => {
    const payload = {
        mode: "dark-mode",
        color: "#FFA500",
        icon: faSun
    }
    localStorage.setItem("theme", JSON.stringify(payload))
    return {
        type: SET_THEME_DARK,
        payload
    }
};

export const setDefault = () => {
    localStorage.removeItem("theme")
    return {
        type: "default",
        payload: null
    }
};