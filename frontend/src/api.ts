export const getUsers = async () => {
  const response = await fetch("http://localhost:8080/api/users");
  if (!response) {
    console.log("response :>> ", response);
    throw new Error("TODO: Add message");
  }
  return await response.json();
};
