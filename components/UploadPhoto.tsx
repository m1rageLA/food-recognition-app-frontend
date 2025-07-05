import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { getFoodByPhoto } from "../services/api"; // Импортируем API модуль

const UploadPhoto = () => {
  const [file, setFile] = useState<File | null>(null); // Состояние для файла //SHUYALI SKRIZ AANNNYYY
  const [loading, setLoading] = useState<boolean>(false); // Состояние загрузки
  const [result, setResult] = useState<any>(null); // Состояние для результата //SHUYALI SKRIZ AANNNYYY
  const [error, setError] = useState<string | null>(null); // Состояние для ошибок

  // Разрешение на доступ к фото
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
    }
  };

  // Обработчик выбора фото
  const pickImage = async () => {
    await requestPermission(); // Запрашиваем разрешение на доступ к фото
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0].file) {
      setFile(result.assets[0].file);
    }
  };

  // Обработчик отправки формы
  const handleSubmit = async () => {
    if (!file) {
      setError("Please select a photo!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await getFoodByPhoto(file); // Отправка фото на сервер
      setResult(data); // Сохраняем результат
    } catch (error) {
      console.error("Error uploading photo:", error);
      setError("Error uploading photo"); // Устанавливаем ошибку
    } finally {
      setLoading(false); // Завершаем загрузку
    }
  };

  return (
    <>
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Pick an image" onPress={pickImage} />
      <Button title="Upload" onPress={handleSubmit} disabled={loading} />
    


      {loading && <Text>Uploading...</Text>}

      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      
      {result && (
        <View>
          <Text>Result:</Text>
          <Text>{JSON.stringify(result, null, 2)}</Text>
        </View>
      )}
      </View> */}
    </>
  );
};

export default UploadPhoto;
