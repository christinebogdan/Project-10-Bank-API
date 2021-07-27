import { requests } from "../helper/apiCalls";

export const actions = {
  FORM_USERNAME: "form/username",
  FORM_PASSWORD: "form/password",
  FORM_REMEMBERME: "form/rememberme",
  FORM_CLEAR: "form/clear",
  LOGIN_REQUEST: "login/request",
  LOGIN_SUCCESS: "login/success",
  LOGIN_FAILURE: "login/failure",
  LOGOUT: "logout/logout",
};

export const actionCreators = {
  username,
  password,
  rememberme,
  clearForm,
  request,
  login,
  success,
  failure,
  logout,
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

function clearForm() {
  return {
    type: actions.FORM_CLEAR,
  };
}

function request(value) {
  return {
    type: actions.LOGIN_REQUEST,
    value,
  };
}

// function login(value) {
//   return {
//     type: actions.LOGIN_SUCCESS,
//   };
// }

function login(data) {
  return (dispatch, getState) => {
    dispatch(request(data.username));

    requests.login(data).then(
      (user) => dispatch(actionCreators.success(user)),
      (error) => console.log(error)
    );

    console.log(getState());
  };
}

function success(value) {
  return {
    type: actions.LOGIN_SUCCESS,
    value,
  };
}

function failure(value) {
  return {
    type: actions.LOGIN_FAILURE,
    value,
  };
}
function logout() {
  return {
    type: actions.LOGOUT,
  };
}
