import axios from "axios";

export const getAllUsers = async () => {
  console.log("api called");
  try {
    const response = await axios.get(
      `https://fake-user-api.up.railway.app/api/v1/users`
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const addUsers = async (userData) => {
  console.log("API called with user data:", userData);
  try {
    const response = await axios.post(
      `https://fake-user-api.up.railway.app/api/v1/users`,
      userData // Pass the user data here
    );
    return response?.data?.data;
  } catch (error) {
    console.error("Error adding user:", error);
  }
};
export const editUsers = async (id, userData) => {
  console.log("API called with user data:", userData);
  try {
    const response = await axios.put(
      `https://fake-user-api.up.railway.app/api/v1/users/${id}`,
      userData // Pass the user data here
    );
    console.log('response of edit in api file :>> ', response?.data);
    return response?.data?.data;
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const DeleteUserById = async (id) => {
  console.log("api called");
  try {
    const response = await axios.delete(
      `https://fake-user-api.up.railway.app/api/v1/users/${id}`
    );

    return response;
  } catch (error) {
    console.log("error :>> ", error);
  }
};



export const getUserById = async (userId) => {
  console.log("API called to fetch user with ID:", userId);
  try {
    const response = await axios.get(
      `https://fake-user-api.up.railway.app/api/v1/users`,
      {
        params: { userId: userId } // Pass the userId as query param
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null; // Return null or handle error as needed
  }
};
