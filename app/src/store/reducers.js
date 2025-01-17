import { combineReducers } from "redux";
import { actions } from "./actions";

const defaultForm = {
  username: "",
  password: "",
  rememberme: false,
  firstName: "",
  lastName: "",
};

function formInput(state = defaultForm, action) {
  switch (action.type) {
    case actions.FORM_USERNAME:
      return { ...state, username: action.value };
    case actions.FORM_PASSWORD:
      return { ...state, password: action.value };
    case actions.FORM_REMEMBERME:
      return { ...state, rememberme: action.value };
    case actions.FORM_SUBMIT:
      return { ...state, username: "", password: "" };

    default:
      return state;
  }
}

const defaultLoggedIn = {
  loggingIn: false,
  isAuthenticated: !!sessionStorage.user,
  token: "",
  userInfo: {
    firstName: sessionStorage.firstName,
    lastName: sessionStorage.lastName,
  },
  editName: false,
  editNameInput: { firstName: "", lastName: "" },
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
      return { ...state, loggingIn: false };
    case actions.USER_LOGOUT:
      return { ...state, isAuthenticated: false, token: "", userInfo: {} };
    case actions.USER_EDITNAME:
      return { ...state, editName: !state.editName };
    case actions.USER_FIRSTNAME:
      return {
        ...state,
        editNameInput: { ...state.editNameInput, firstName: action.value },
      };
    case actions.USER_LASTNAME:
      return {
        ...state,
        editNameInput: { ...state.editNameInput, lastName: action.value },
      };
    case actions.USER_EDITNAME_SUCCESS:
      return {
        ...state,
        userInfo: action.value,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ formInput, authentication });

export default rootReducer;
