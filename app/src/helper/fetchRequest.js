export const requests = {
  login,
};

// why do I not need async await here
// how can I call getProfile inside login?

async function login(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch("http://localhost:3001/api/v1/user/login", requestOptions)
    .then((response) => response.json())
    .then((response) => {
      const token = response.body.token;
      if (response.status === 200) {
        // why can I use getProfile here without await?
        sessionStorage.setItem("user", token);
        return getProfile(token);
      } else {
        return Promise.reject(response.message);
      }
    });
}

// async function login(data) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };
//   return await fetch(
//     "http://localhost:3001/api/v1/user/login",
//     requestOptions
//   ).then((response) => response.json());

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
  ).then((response) =>
    response.json().then((response) => {
      if (response.status === 200) {
        return { token, userInfo: response.body };
      } else return Promise.reject(response.message);
    })
  );
}
