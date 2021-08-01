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

// wie kann ich hier per destructuring userInfo: body die UserInfo rausholen?
// dispatch(login({ token, userInfo: { profile: { body } } }));

// _getState to show that it is not used?

function auth(data) {
  return async (dispatch, _getState) => {
    try {
      dispatch(request(data.username));
      const token = await requests.getToken(data);
      const { body } = await requests.getProfile(token);
      dispatch(login({ token, userInfo: body }));
      customHistory.push("/profile");
      dispatch(submit());
    } catch (e) {
      console.log(e);
    }
  };
}

function login(value) {
  return {
    type: actions.LOGIN_SUCCESS,
    value,
  };
}

function logout() {
  sessionStorage.removeItem("user");
  return {
    type: actions.USER_LOGOUT,
  };
}

// why does this not log the state in the console after dispatching logout?
function loggingOut() {
  return (dispatch, getState) => {
    sessionStorage.clear();
    dispatch(logout);
    console.log(getState());
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
