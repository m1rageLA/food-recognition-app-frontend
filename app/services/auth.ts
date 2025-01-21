import axios from "axios";

interface User {
  username: string;
  email: string;
  password: string;
}

export const registerRequest = async (
  username: string,
  email: string,
  password: string
): Promise<User | void> => {
  try {
    const response = await axios.post("http://localhost:3000/user", {
      username,
      email,
      password,
    });
    console.log("Register successful:", response.data);
    return response.data; // Assuming response.data is of type User
  } catch (error: any) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
  }
};

export const loginRequest = async (
  usernameOrEmail: string,
  password: string
): Promise<User | void> => {
  try {
    const response = await axios.post("http://localhost:3000/user/login", {
      usernameOrEmail,
      password,
    });
    console.log("Login successful:", response.data);
    localStorage.setItem('authToken', response.data.token);
    return response.data; // Assuming response.data is of type User
  } catch (error: any) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
  }
};
