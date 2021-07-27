export const requests = {
  login,
  getProfile,
};

// why do I not need async await here
async function login(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch(
    "http://localhost:3001/api/v1/user/login",
    requestOptions
  ).then((response) => response.json());
}

async function getProfile(token) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return await fetch(
    "http://localhost:3001/api/v1/user/profile",
    requestOptions
  ).then((response) => response.json());
}

// function auth(data) {
//   return async (dispatch, getState) => {
//     console.log(getState());
//     dispatch(actionCreators.request(data.username));
//     console.log(getState());
//     return await fetch("http://localhost:3001/api/v1/user/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         dispatch(actionCreators.login(response.body.token));
//         window.sessionStorage.setItem("user", response.body.token);
//         console.log(getState());
//         getProfile(response.body.token).then((response) =>
//           console.log(response)
//         );
//       })
//       .catch((error) => console.log(error));
//   };
// }

// function getProfile(token) {
//   return async (dispatch, getState) => {
//     return await fetch("http://localhost:3001/api/v1/user/profile", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((response) => response.json());
//   };
// }

// function getProfile(token) {
//   return async function sendToken(dispatch, getState) {
//     try {
//       const response = await fetch(
//         "http://localhost:3001/api/v1/user/profile",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const parsedResponse = await response.json();
//       console.log(parsedResponse);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export default async function fetchRequest(
//   url = "",
//   data = {},
//   method = "GET",
//   headers = { "Content-Type": "application/json" }
// ) {
//   try {
//     const response = await fetch(url, {
//       method: method,
//       headers: headers,
//       body: JSON.stringify(data),
//     });
//     console.log(response);
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// export function auth(data) {
//   return async function sendCreds(dispatch, getState) {
//     try {
//       const response = await fetch(""http://localhost:3001/api/v1/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       const parsedResponse = await response.json();
//       dispatch(login(parsedResponse.body.token));
//       console.log(getState());
//       dispatch(getProfile(parsedResponse.body.token));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
