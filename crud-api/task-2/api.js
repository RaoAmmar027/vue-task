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

export const DeleteUserById = async (id) => {
    
    console.log("api called");
    try {
        const response = await axios.delete(`https://fake-user-api.up.railway.app/api/v1/users/${id}`);

        return response
    } catch (error) {
        console.log('error :>> ', error);
    }
  };
  