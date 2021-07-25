import React from "react";

import ModalPopup from "../components/ModalPopup";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { images } from "../../constants";

export const useModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const ModalComponent = () => {
    return (
      <View>
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
      </View>
    );
  };

  return [setShowModal, ModalComponent];
};

const styles = StyleSheet.create({
    headerModal: {
      width: "100%",
      height: 40,
      alignItems: "flex-end",
      justifyContent: "center",
    },
  });