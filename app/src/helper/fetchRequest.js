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
