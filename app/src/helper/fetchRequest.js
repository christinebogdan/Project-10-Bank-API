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
