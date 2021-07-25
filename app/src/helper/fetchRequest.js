import { login } from "../store/form/actions";

export default async function fetchRequest(
  url = "",
  data = {},
  method = "GET",
  headers = { "Content-Type": "application/json" }
) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
      // headers: {
      //   "Content-Type": "application/json",
      //   "Authorization": `Bearer ${token}`
      // },
      body: JSON.stringify(data),
    });
    console.log(response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export function auth(data) {
  return async function sendCreds(dispatch, getState) {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const parsedResponse = await response.json();
      dispatch(login(parsedResponse.body.token));
      console.log(getState());
      dispatch(getProfile(parsedResponse.body.token));
    } catch (error) {
      console.log(error);
    }
  };
}

function getProfile(token) {
  return async function sendToken(dispatch, getState) {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const parsedResponse = await response.json();
      console.log(parsedResponse);
    } catch (error) {
      console.log(error);
    }
  };
}
