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
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: true,
        token: action.value.token,
        userInfo: action.value.userInfo,
      };
    case actions.LOGIN_ERROR:
      return { ...state, isAuthenticated: false, token: "" };
    case actions.USER_LOGOUT:
      return { ...state, isAuthenticated: false, token: "", userInfo: {} };
    case actions.USER_CHANGENAME:
      return {
        ...state,
        userInfo: {
          firstName: action.value.firstName,
          lastName: action.value.lastName,
        },
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ formInput, authentication });

export default rootReducer;
