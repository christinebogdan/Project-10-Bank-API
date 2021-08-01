export const requests = {
  getToken,
  getProfile,
};

// why can I not do fetch().json() ?
async function getToken(data) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:3001/api/v1/user/login",
      requestOptions
    );
    const {
      body: { token },
    } = await response.json();
    sessionStorage.setItem("user", token);
    return token;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function getProfile(token) {
  try {
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
    return await response.json();
  } catch (e) {
    return e;
  }
}
