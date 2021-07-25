import { combineReducers } from "redux";
const FORM_USERNAME = "form/username";
const FORM_PASSWORD = "form/password";
const FORM_REMEMBERME = "form/rememberme";
const LOGIN_SUCCESS = "login/login";
const LOGIN_ERROR = "login/logout";

export function username(value) {
  return {
    type: FORM_USERNAME,
    value,
  };
}

export function password(value) {
  return {
    type: FORM_PASSWORD,
    value,
  };
}

export function rememberme(value) {
  return {
    type: FORM_REMEMBERME,
    value,
  };
}

const defaultForm = {
  username: "",
  password: "",
  rememberme: false,
};

function formInput(state = defaultForm, action) {
  switch (action.type) {
    case FORM_USERNAME:
      return { ...state, username: action.value };
    case FORM_PASSWORD:
      return { ...state, password: action.value };
    case FORM_REMEMBERME:
      return { ...state, rememberme: action.value };
    default:
      return state;
  }
}

export function login(value) {
  return {
    type: LOGIN_SUCCESS,
    value,
  };
}
export function logout() {
  return {
    type: LOGIN_ERROR,
  };
}

const defaultLoggedIn = { isAuthenticated: false, token: "" };

function authentication(state = defaultLoggedIn, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, token: action.value };
    case LOGIN_ERROR:
      return { ...state, isAuthenticated: false, token: "" };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ formInput, authentication });

export default rootReducer;
