import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

interface User {
  id: number;
  username: string;
  email: string;
}
interface FoodList {
  id: number;
  name: string;
  info: string;
  photo: Object;
}

interface RegisterData {
  name: string;
  email: string;
}

const getHeaders = (): AxiosRequestConfig["headers"] => {
  const token = localStorage.getItem("authToken"); //такого НЕТУ
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const getFoodByPhoto = async (file: any) => {
  const formData = new FormData();

  // Убедись, что ты передаешь правильный формат
  formData.append("photo", file);

  try {
    const response = await axios.post('http://localhost:3000/food/getFoodByPhoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
      });
    console.log(response);
    return response; // Вернуть данные с сервера
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error; // Пробросить ошибку дальше
  }
};
export const getFoodList = async (): Promise<FoodList[]> => {
  const response = await api.get("/food/getFoodList");
  return response.data;
};
export const register = async (userData: RegisterData): Promise<User[]> => {
  const response = await api.post("/users", userData);
  return response.data;
};
export const login = async (userData: RegisterData): Promise<User[]> => {
  const response = await api.post("/users", userData);
  return response.data;
};

//    const response = await api.post('/users', userData, { headers: getHeaders() });
