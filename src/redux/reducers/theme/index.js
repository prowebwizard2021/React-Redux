import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import {
  SET_THEME_DARK,
} from "./actionsTypes";

const initialState = {
  mode: "default", 
  color: "#000000",
  icon: faMoon
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_THEME_DARK:
      
      return {
        ...state,
        mode: payload.mode,
        color: payload.color,
        icon: payload.icon
      };
    
    default: 
      return initialState
  }
};

export default reducer;