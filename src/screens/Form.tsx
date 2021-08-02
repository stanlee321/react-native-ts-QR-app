import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Animated
} from "react-native";

import useInput from "../hooks/useInput";

import { SIZES, COLORS, images, dummyData, icons, FONTS } from "../../constants";

import { FontAwesome } from "@expo/vector-icons";

import CameraView from "../components/CameraView";

import ModalPopup from "../components/ModalPopup";
import { FlatList } from "react-native-gesture-handler";
import TrendingCard from "../components/TrendingCard";

// Component
import Header from "../components/Header";




interface IImage {
  uri: string;
  id: number;
}
interface IImages {
  data: IImage[];
}

const Form = ({ navigation }: any) => {
  // setTaskItems([...taskItems, task]);

  const [imageUrl, setImageUrl] = useState<any>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [actualImages, setActualImages] = useState<IImages>();
  /// { data: [{ uri: images.defaultImage, id: 0 }], }
  const [imageInView, setImageInView] = useState<IImage>();

  // Control initial render for search do not triger
  const initial = React.useRef(true);

  //const [ setShowModal, ModalComponent] = useModal()

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    if (actualImages) {
      setActualImages((prev) => ({
        data: [...prev.data, { uri: imageUrl, id: prev.data.length + 1 }],
      }));
      setImageInView({ uri: imageUrl, id: actualImages.data.length + 1 });
      return;
    }

    setActualImages({
      data: [{ uri: imageUrl, id: 1 }],
    });
    setImageInView({ uri: imageUrl, id: 0 });
  }, [imageUrl]);

  function drawTakePic() {
    return (
      <View
        style={{
          paddingTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.buttonTakePic}
          onPress={() => setShowCamera(true)}
        >
          <FontAwesome name="camera" size={60} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }


  function drawNextButton(){
    return( <TouchableOpacity
      onPress={() =>
        navigation.navigate("FormSecondScreen", { recipe: "" })
      }
      style={{
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        position: "absolute",
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: "#01a699",
        borderRadius: 100,
      }}
    >
      {/* <Icon name="plus" size={30} color="#01a699" /> */}
      <FontAwesome name="chevron-right" color={"white"} size={18} />
    </TouchableOpacity>)
  }
  function drawPicHeader() {
    return (
      <View
        style={{
          height: 350,
          width: 250,
          marginTop: SIZES.radius,
          marginRight: 20,
          borderRadius: SIZES.radius,
        }}
      >
        {/* Background Image */}
        <Image
          source={
            actualImages ? { uri: imageInView.uri } : images.defaultImage
            // imageInView === null
            //   ? images.defaultImage
            //   :
          }
          resizeMode="cover"
          style={{
            width: 250,
            height: 350,
            borderRadius: SIZES.radius,
          }}
        ></Image>

        {/* Category */}

        <View
          style={{
            position: "absolute",
            top: 250,
            left: 160,
          }}
        >
          {/* Draw Pic BUtton */}
          {drawTakePic()}
        </View>
      </View>
    );
  }

  if (showCamera) {
    return (
      <CameraView
        setUrl={setImageUrl}
        setShowCamera={setShowCamera}
        setError={setError}
      />
    );
  } else {
    return (
      <View style={styles.area}>
  
        <Animated.FlatList
          data={[]}
          keyExtractor={(item) => `${item.id}`}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.container}>
              {/* Modal */}
              <View
                style={{ flex: 1, alignItems: "center", paddingBottom: 20 }}
              >
                {drawPicHeader()}

                {error ? <h1>ERROR trying to PIC, try again</h1> : <></>}
              </View>

              {/* Horizontal Selection */}

              {actualImages ? (
                <View>
                  <FlatList
                    data={actualImages.data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item, index }) => {
                      return (
                        <TrendingCard
                          containerStyle={{
                            marginLeft: index == 0 ? SIZES.h1 : SIZES.h2,
                            padding: 0,
                          }}
                          recipeItem={item}
                          onPress={() =>
                            setImageInView({ uri: item.uri, id: item.id })
                          }
                        />
                      );
                    }}
                  />
                </View>
              ) : null}

              {/* Horizontal Selection */}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: SIZES.radius,
                  margin: 20,
                }}
              >
                <Text style={{ paddingLeft: 50, fontSize: 30 }}>
                  {/* Text */}
                  N° 34
                </Text>
                <View
                  style={{ flex: 1, flexDirection: "column", marginLeft: 40 }}
                >
                  <Text
                    style={{
                      paddingRight: 25,
                      fontWeight: "bold",
                    }}
                  >
                    {/* Text */}
                    Detalle
                  </Text>
                  <Text style={{ fontSize: 30 }}>
                    {/* Text */}
                    Cable Enchaquetado
                  </Text>
                </View>
              </View>
              <View style={{marginTop:40}}>
                {drawNextButton()}

              </View>
            </View>
          }
          renderItem={({ item }) => {
            if (item) {
              return null;
            }
          }}
          // onPress={() => navigation.navigate("Recipe", { recipe: item })}

          ListFooterComponent={
            <View style={styles.footer}>

            </View>
          }
        />
        {/* <TouchableOpacity onPress={() => setShowModal(true)}> */}
        <Header
          title="Solicitud de Requerimiento"
          datetime="2020 14 de Julio, 20:00 Hrs."
          stateTitle="Paso 2 / 3"
          navigation={navigation}
        />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  buttonTakePic: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 120,
    height: 100,
    width: 100,
    opacity: 1,
    borderColor: COLORS.white2,
    borderWidth: 0.5,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 5,
    backgroundColor: COLORS.transparentGray,
  },

  footer: {
    marginBottom: 60,
    marginTop: 20,
  },
});

export default Form;
