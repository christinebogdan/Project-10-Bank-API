// import { combineReducers } from "redux";
import { requests } from "../helper/fetchRequest";

export const actions = {
  FORM_USERNAME: "form/username",
  FORM_PASSWORD: "form/password",
  FORM_REMEMBERME: "form/rememberme",
  LOGIN_REQUEST: "login/request",
  LOGIN_SUCCESS: "login/success",
  LOGIN_ERROR: "login/error",
  USER_LOGOUT: "user/logout",
  USER_CHANGENAME: "user/changename",
};

export const actionCreators = {
  username,
  password,
  rememberme,
  request,
  login,
  logout,
  auth,
};

function username(value) {
  return {
    type: actions.FORM_USERNAME,
    value,
  };
}

function password(value) {
  return {
    type: actions.FORM_PASSWORD,
    value,
  };
}

function rememberme(value) {
  return {
    type: actions.FORM_REMEMBERME,
    value,
  };
}

function request(value) {
  return {
    type: actions.LOGIN_REQUEST,
    value,
  };
}

function auth(data) {
  return (dispatch, getState) => {
    dispatch(request(data.username));
    console.log(getState());
    // why does error come up when I want to pass getState to login function
    requests.login(data).then(
      (response) => {
        console.log(getState());
        console.log(response);
        dispatch(login(response));
        console.log(getState());
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

function login(value) {
  return {
    type: actions.LOGIN_SUCCESS,
    value,
  };
}

function logout() {
  return {
    type: actions.LOGIN_ERROR,
  };
}
