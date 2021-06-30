import React, { useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  Image
} from "react-native";

// Modules
import { Camera } from "expo-camera";

// Icons
import { FontAwesome } from "@expo/vector-icons";


// Constants
import { COLORS, SIZES } from '../../../constants'

const CameraView = ( { setUrl, setShowCamera, setError }: any) => {
  // Cam ref
  const camRef = useRef<any>(null);

  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [open, setOpen] = useState<any>(false);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    if (camRef) {
      camRef.current.takePictureAsync().then((data)=> {
        setOpen(true)
        setUrl(data.uri)
        
        setShowCamera(false)
        setError(false)
        console.log(data.uri)

      }).catch( (e)=> {
        console.log(e)
        setError(true)
      });

    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera 
            style={styles.camera}
            type={type}
            ref={camRef}
        >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTakePic} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color="#FFF" />
        </TouchableOpacity>
        </View>

      </Camera>
{/* 
      {
          capturedPhoto && 
          <Modal
            animationType="slide"
            transparent={false}
            visible={open}
          >
              <View
                style={{flex:1, justifyContent:'center', alignItems:'center', margin:20}}
              >
                  <TouchableOpacity style={{margin:10}} onPress={()=>setOpen(false)}>
                    <FontAwesome name="window-close" size={50} color="#ff0000" />
                  </TouchableOpacity>
                <Image 
                    style={{width: '100%', height:300, borderRadius:20 }}
                    source={{uri: capturedPhoto.uri}}
                
                />
              </View>

          </Modal>
      } */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  camera: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection:'row',
    marginHorizontal: SIZES.padding,
    alignItems: 'flex-end',
    height: "100%",
    paddingBottom:120
  },
  buttonFlip: {
    height: 50,
    width: 100,
    borderColor: COLORS.darkGreen,
    borderRadius:20,
    borderWidth: 0.5,
    marginRight: 120,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems:'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    marginBottom: 13,
    color: COLORS.white
  },
  buttonTakePic: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    borderRadius: 20,
    height: 50,
    width: 100,
    borderColor: COLORS.white2,
    borderWidth:0.5,
  },
});

export default CameraView;
