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
interface FoodData {
  mass: number;
  foodCanName: string;
}

const getHeaders = (): AxiosRequestConfig["headers"] => {
  const token = localStorage.getItem("authToken"); //такого НЕТУ
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const getFoodByPhoto = async (file1: Blob) => {
  const file = new File([file1], "image.jpg", { type: "image/jpeg" });
  const formData = new FormData();
  formData.append("photo", file);
  // const formData = new FormData();

  // // Убедись, что ты передаешь правильный формат
  // formData.append("photo", file);
  console.log(file);
  try {
    const response = await axios.post(
      "http://localhost:3000/food/getFoodByPhoto",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }
    );

    return response; // Вернуть данные с сервера
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error; // Пробросить ошибку дальше
  }
};

// GET [2]
export const getFoodList = async (): Promise<FoodList[]> => {
  const token = localStorage.getItem("authToken"); // Or another method to get the token
  const response = await api.get("/day/getUserDayInfoListLight", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addFoodConsumedLight = async (
  foodData: FoodData
): Promise<User[]> => {
  const token = localStorage.getItem("authToken"); // Or another method to get the token
  const response = await api.post("/user/addFoodConsumedLight", foodData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
