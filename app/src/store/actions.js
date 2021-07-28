import { requests } from "../helper/fetchRequest";
import { customHistory } from "../helper/history";

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
};

export const actionCreators = {
  username,
  password,
  rememberme,
  // submit,
  request,
  auth,
  login,
  // logout,
  loggingOut,
  editName,
  firstName,
  lastName,
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
  // how can I access history here?
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
        customHistory.push("/profile");
      },
      (error) => {
        console.log(error);
      }
    );
    dispatch(submit());
    console.log(getState());
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
    type: actions.USER_LOGOUT,
  };
}

function loggingOut() {
  return (dispatch, getState) => {
    console.log(sessionStorage);
    sessionStorage.removeItem("user");
    dispatch(logout);
  };
}

function editName() {
  return {
    type: actions.USER_EDITNAME,
  };
}

function firstName(value) {
  return {
    type: actions.USER_FIRSTNAME,
    value,
  };
}

function lastName(value) {
  return {
    type: actions.USER_LASTNAME,
    value,
  };
}
