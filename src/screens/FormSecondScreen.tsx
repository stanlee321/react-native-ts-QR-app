import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Animated
} from "react-native";

import { COLORS, SIZES } from "../../constants";

// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Custom Hooks
import { useInputForm } from "../hooks/useInputForm";
import { useInputFormSimple } from "../hooks/useInputFormSimple";

// Custom Components Library
import { FlatList } from "react-native-gesture-handler";

// Component

import Header from "../components/Header";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const FormSecondScreen = ({ navigation }: any) => {


  const scrollY = React.useRef(new Animated.Value(0)).current;

  const [textMaterial, MaterialInputForm] = useInputForm({
    title: "Material 🗜️",
    placeholder: "Escriba el material...",
    dropDownData: countries,
    keyboardType: "default",
  });

  const [textMedida, MedidaInputForm] = useInputForm({
    title: "Medida 📐",
    placeholder: "Escriba la medida...",
    dropDownData: countries,
    keyboardType: "default",
  });

  const [textMarca, MarcaInputForm] = useInputForm({
    title: "Marca ℹ️",
    placeholder: "Escriba la marca...",
    dropDownData: countries,
    keyboardType: "default",
  });

  const [textDestino, DestinoInputForm] = useInputForm({
    title: "Destino 🛣️",
    placeholder: "Escriba el destino...",
    dropDownData: countries,
    keyboardType: "default",
  });

  const [textSection, SectionInputForm] = useInputFormSimple({
    title: "Section",
    placeholder: "sección...",
    keyboardType: "default",
  });

  const [textCantidadSection, CantidadInputForm] = useInputFormSimple({
    title: "Cantidad",
    placeholder: "cantidad...",
    keyboardType: "default",
  });

  const [textUnidadSection, UnidadInputForm] = useInputFormSimple({
    title: "Unidad",
    placeholder: "unidad...",
    keyboardType: "default",
  });

  function drawBody() {
    return (
      <View style={{ flex: 1, marginTop:100, backgroundColor: "#fff" }}>
        {/* <Image
      source={images.newLoginBackground}
      style={StyleSheet.absoluteFillObject}
    /> */}

        {/* Render Inputs */}

        {/*  material Input */}
        <MaterialInputForm />

        {/* medida Input */}
        <MedidaInputForm />

        {/* marca Input */}
        <MarcaInputForm />

        {/* destino Input */}
        <DestinoInputForm />

        {/* Cantidad Section */}

        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <CantidadInputForm />
          <UnidadInputForm />
        </View>
        {/* section Input */}
        <SectionInputForm />
      </View>
    );
  }
  return (
    <View style={styles.area}>

      <Animated.FlatList
        data={[]}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ drawBody }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}

        renderItem={({ item }) => {
          if (item) {
            return null;
          }
        }}
        // onPress={() => navigation.navigate("Recipe", { recipe: item })}

        ListFooterComponent={<View style={styles.footer}></View>}
      />
      {/* <TouchableOpacity onPress={() => setShowModal(true)}> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("FormThirdScreen", { recipe: "" })}
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
      </TouchableOpacity>
      <Header
        title="Solicitud de Requerimiento"
        datetime="2020 14 de Julio, 20:00 Hrs."
        stateTitle="Paso 2 / 3"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
    
  },
  footer: {
    marginBottom: 20,
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
});

export default FormSecondScreen;

// TODO IMPLEMENTAR 3/3

// https://www.npmjs.com/package/react-native-signature-canvas
