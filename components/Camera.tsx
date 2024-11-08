import React, { useEffect, useState } from "react";
import { CameraType, CameraCapturedPicture } from "expo-camera";
import { Text, View } from "react-native";

interface CameraRef {
  takePictureAsync: () => Promise<CameraCapturedPicture>;
}

export default function Camera() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState<CameraRef | null>(null);

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => setCameraRef(ref)}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Button title="Flip Camera" onPress={flipCamera} />
        </View>
      </Camera>
    </View>
  );
}
