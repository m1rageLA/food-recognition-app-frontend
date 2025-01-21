import React, { useRef, useState } from "react";
import ImagePicker from 'react-native-image-crop-picker';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Linking,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as FileSystem from "expo-file-system";
import { Button } from "react-native-paper";
import { getFoodByPhoto } from "@/app/services/api";

const UploadPhoto = () => {
  const [cameraType, setCameraType] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photoTaken, setPhotoTaken] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const cameraRef = useRef<CameraView>(null);

  const [file, setFile] = useState<File | null>(null);

  const toggleCameraType = () => {
    setCameraType((current) => (current === "back" ? "front" : "back"));
  };


  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        setLoading(true);
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1,
          base64: true,
          imageType:"jpg",
        });

        if (photo?.uri) {
    
          console.log(photo.uri)
          const imageResponse = await fetch(photo.uri)
          const blob= await imageResponse.blob()  


          console.log(blob)

          // Передача файла в функцию
          await getFoodByPhoto(blob); // Assuming `getFoodByPhoto` expects FormData
          setPhotoTaken(true);
        }
      } catch (err) {
        console.error("Ошибка при создании фото:", err);
        setError("Error taking photo");
      } finally {
        setLoading(false);
      }
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>We need your permission to use the camera</Text>
        <Button onPress={requestPermission}>Grant Permission</Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!photoTaken ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={cameraType}>
          <View style={styles.controls}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              <Text style={styles.text}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.result}>
          <Text>Photo successfully sent!</Text>
          <Button onPress={() => setPhotoTaken(false)}>
            Take Another Photo
          </Button>

        </View>
      )}
      {loading && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  camera: {
    flex: 1,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  text: {
    color: "black",
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default UploadPhoto;
