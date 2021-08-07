import { requests } from "../helper/fetchRequest";
import { customHistory, BASENAME } from "../helper/history";

export const actions = {
  FORM_USERNAME: "form/username",
  FORM_PASSWORD: "form/password",
  FORM_REMEMBERME: "form/rememberme",
  FORM_SUBMIT: "form/submit",
  LOGIN_REQUEST: "login/request",
  LOGIN_SUCCESS: "login/success",
  LOGIN_ERROR: "login/error",
  USER_LOGOUT: "user/logout",
  USER_EDITNAME: "user/editname",
  USER_FIRSTNAME: "user/firstname",
  USER_LASTNAME: "user/lastname",
  USER_EDITNAME_SUCCESS: "user/success",
};

export const actionCreators = {
  username,
  password,
  rememberme,
  request,
  auth,
  login,
  loggingOut,
  editName,
  editFirstName,
  editLastName,
  updateName,
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

function submit() {
  return {
    type: actions.FORM_SUBMIT,
  };
}

function request(value) {
  return {
    type: actions.LOGIN_REQUEST,
    value,
  };
}

function auth(data) {
  return async (dispatch, getState) => {
    try {
      dispatch(request(data.username));
      const token = await requests.getToken(data);
      const { body } = await requests.getProfile(token);
      sessionStorage.setItem("firstName", body.firstName);
      sessionStorage.setItem("lastName", body.lastName);
      dispatch(login({ token, userInfo: body }));
      customHistory.push(`/${BASENAME}/profile`);
      dispatch(submit());
    } catch (e) {
      console.log(e);
      dispatch(loginError());
      console.log(getState());
    }
  };
}

function login(value) {
  return {
    type: actions.LOGIN_SUCCESS,
    value,
  };
}

function loginError() {
  return {
    type: actions.LOGIN_ERROR,
  };
}

function logout() {
  return {
    type: actions.USER_LOGOUT,
  };
}

function loggingOut() {
  return (dispatch, getState) => {
    sessionStorage.clear();
    dispatch(logout());
  };
}

function editName() {
  return {
    type: actions.USER_EDITNAME,
  };
}

function editFirstName(value) {
  return {
    type: actions.USER_FIRSTNAME,
    value,
  };
}

function editLastName(value) {
  return {
    type: actions.USER_LASTNAME,
    value,
  };
}

function updateName(data) {
  return async (dispatch, useState) => {
    try {
      const userInfo = await requests.updateName(data);
      dispatch(updateNameSuccess(userInfo));
      dispatch(editFirstName(""));
      dispatch(editLastName(""));
      dispatch(editName());
    } catch (e) {
      console.log(e);
    }
  };
}

function updateNameSuccess(value) {
  return {
    type: actions.USER_EDITNAME_SUCCESS,
    value,
  };
}
