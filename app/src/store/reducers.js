import { combineReducers } from "redux";
import { actions } from "./actions";

const defaultForm = {
  username: "",
  password: "",
  rememberme: false,
};

function formInput(state = defaultForm, action) {
  switch (action.type) {
    case actions.FORM_USERNAME:
      return { ...state, username: action.value };
    case actions.FORM_PASSWORD:
      return { ...state, password: action.value };
    case actions.FORM_REMEMBERME:
      return { ...state, rememberme: action.value };
    case actions.FORM_CLEAR:
      return { ...state, username: "", password: "" };
    default:
      return state;
  }
}

const defaultLoggedIn = {
  loggingIn: false,
  isAuthenticated: false,
  token: "",
  userInfo: {},
};

function authentication(state = defaultLoggedIn, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return { ...state, loggingIn: true };
    case actions.LOGIN_SUCCESS:
      sessionStorage.setItem("user", action.value);
      return { ...state, isAuthenticated: true, token: action.value };
    case actions.LOGIN_USER:
      return { ...state, userInfo: action.value.body };
    case actions.LOGIN_ERROR:
      return { ...state, isAuthenticated: false, token: "" };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ formInput, authentication });
