import { combineReducers } from "redux";
const FORM_USERNAME = "form/username";
const FORM_PASSWORD = "form/password";
const FORM_REMEMBERME = "form/rememberme";
const LOGIN_LOGIN = "login/login";
const LOGIN_LOGOUT = "login/logout";

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

function form(state = defaultForm, action) {
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
    type: LOGIN_LOGIN,
    value,
  };
}
export function logout() {
  return {
    type: LOGIN_LOGOUT,
  };
}

const defaultLoggedIn = { loggedIn: false, token: "" };

function loginStatus(state = defaultLoggedIn, action) {
  switch (action.type) {
    case LOGIN_LOGIN:
      return { ...state, loggedIn: true, token: action.value };
    case LOGIN_LOGOUT:
      return { ...state, loggedIn: false, token: "" };
    default:
      return state;
  }
}

const bankApp = combineReducers({ form, loginStatus });

export default bankApp;
