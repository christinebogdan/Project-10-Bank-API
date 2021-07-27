export const requests = {
  login,
};

// why do I not need async in front of "function login(data)"?
async function login(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch(
    "http://localhost:3001/api/v1/user/login",
    requestOptions
  ).then((response) => {
    console.log("response", response);
  });
}

export async function test(data) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const parsedResponse = await response.json();
  console.log("test fn", parsedResponse);
}
