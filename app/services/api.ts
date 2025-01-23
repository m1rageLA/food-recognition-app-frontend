import axios, { AxiosRequestConfig } from "axios";
import FormData from "form-data";
// import * as fs from "fs";
import * as fs from "react-native-fs";
// const RNFS = require("react-native-fs");
import { CameraCapturedPicture } from "expo-camera";
import { Platform } from "react-native";
import TokenStorage from "../services/tokenStorage";

export const localhost = "http://34.66.153.5:3000";

const api = axios.create({
  baseURL: localhost,
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

const getHeaders = async (): Promise<AxiosRequestConfig["headers"]> => {
  const token = await TokenStorage.loadToken();
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const getFoodByPhoto = async (photo: CameraCapturedPicture) => {
  const formData = new FormData();

  const uri =
    Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "");
  formData.append("photo", {
    uri: uri,
    name: `photo_${Date.now()}.jpg`,
    type: "image/jpeg",
  });

  try {
    const response = await axios({
      method: "post",
      url: localhost + "/food/getFoodByPhoto",
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });

    return { response: response, uri: uri }; // Вернуть данные с сервера
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error; // Пробросить ошибку дальше
  }
};

// GET [2]
export const getFoodList = async (): Promise<FoodList[]> => {
  const token = await TokenStorage.loadToken();
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
  const token = await TokenStorage.loadToken();
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
