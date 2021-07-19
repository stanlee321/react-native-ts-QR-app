import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Keyboard,
  SafeAreaView,
  Image,
} from "react-native";

import useInput from "../hooks/useInput";

import { SIZES, COLORS, images, dummyData } from "../../constants";

import { FontAwesome } from "@expo/vector-icons";

import CameraView from "../components/CameraView";

import ModalPopup from "../components/ModalPopup";
import { FlatList } from "react-native-gesture-handler";
import TrendingCard from "../components/TrendingCard";

interface IImage {
  uri: string;
  id: number;
}
interface IImages {
  data: IImage[];
}

const Form = ({ navigation }: any) => {
  const [inputItemText, inputItemComponent] = useInput({
    type: "default",
    title: "Item name",
    boxSize: 350,
    boxHeight: 60,
    fontSize: 16,
    borderRadius: 60,
  });

  const [quantity, inputQuantityComponent] = useInput({
    type: "default",
    title: "Quantity",
    boxSize: 100,
    boxHeight: 60,
    fontSize: 16,
    borderRadius: 60,
  });

  const [state, inputStateComponent] = useInput({
    type: "default",
    title: "Estado",
    boxSize: 130,
    boxHeight: 60,
    fontSize: 16,
    borderRadius: 60,
  });

  const [comment, inputCommentComponent] = useInput({
    type: "default",
    title: "Comentario",
    boxSize: 350,
    boxHeight: 120,
    fontSize: 8,
    borderRadius: 15,
  });
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
      data: [ { uri: imageUrl, id: 1 }],
    });
    setImageInView({ uri: imageUrl, id: 0 });

  }, [imageUrl]);

  const handleAddTask = () => {
    Keyboard.dismiss();
  };

  function renderHeader() {
    return (
      <View style={styles.header}>
        {/* Text */}
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTextName}>Crear Item</Text>
          <Text style={styles.headerTextSub}>Aqui puedes crear un item</Text>
        </View>
      </View>
    );
  }

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
      <View style={styles.container}>
        {/* Modal */}
        <ModalPopup visible={showModal}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.headerModal}
              onPress={() => setShowModal(false)}
            >
              <Image
                source={images.close}
                style={{ height: 30, width: 30 }}
              ></Image>
            </TouchableOpacity>

            <View style={{ alignItems: "center" }}>
              <Image
                source={images.ok}
                style={{ height: 150, width: 150, marginVertical: 10 }}
              />
            </View>

            <Text
              style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
            >
              {" "}
              Datos enviados Correctamente!!!
            </Text>
          </View>
        </ModalPopup>
        {/* Headers */}
        {renderHeader()}

        <ScrollView
          contentContainerStyle={{
            marginBottom: 1,
            paddingTop: 10,
            paddingVertical: 100,
          }}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
        >
          {/*  Pic Photo */}

          <View style={{ flex: 1, alignItems: "center", paddingBottom: 20 }}>
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
          {inputItemComponent()}

          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            {inputStateComponent()}
            {inputQuantityComponent()}
          </View>
          {/* Comment */}
          {inputCommentComponent()}

          {/* Send Button */}
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              paddingRight: 30,
              paddingTop: 10,
            }}
          >
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.darkGreen,
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: { fontSize: 30 },

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

  // Hewader

  // Header
  header: {
    flexDirection: "row",
    marginHorizontal: SIZES.padding,
    alignItems: "center",
    height: 80,
  },
  headerTextName: {
    color: COLORS.darkGreen,
    fontSize: SIZES.h2,
    lineHeight: 30,
    fontWeight: "bold",
  },
  headerTextSub: {
    marginTop: 3,
    color: COLORS.gray,
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  headerProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  containerDropdown: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerModal: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Form;
