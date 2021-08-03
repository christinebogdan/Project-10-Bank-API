export const requests = {
  getToken,
  getProfile,
  updateName,
};

// why can I not do fetch().json() ?
async function getToken(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(
    "http://localhost:3001/api/v1/user/login",
    requestOptions
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const {
    body: { token },
  } = await response.json();
  sessionStorage.setItem("user", token);
  return token;
}

async function getProfile(token) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    "http://localhost:3001/api/v1/user/profile",
    requestOptions
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

async function updateName(data) {
  const token = sessionStorage.getItem("user");
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(
    "http://localhost:3001/api/v1/user/profile",
    requestOptions
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { body } = await response.json();
  console.log();
  return body;
}
