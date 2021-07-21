import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  
} from "react-native";

import {
  COLORS,
  SIZES,

} from "../../constants";

// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";




// Custom Hooks
import { useInputForm } from "../hooks/useInputForm";
import { useInputFormSimple } from "../hooks/useInputFormSimple";
import { FlatList } from "react-native-gesture-handler";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const FormSecondScreen = ({ navigation }: any) => {
  const [textMaterial, MaterialInputForm] = useInputForm({
    title: "Material 🗜️",
    placeholder: "Escriba el material...",
    dropDownData: countries,
  });

  const [textMedida, MedidaInputForm] = useInputForm({
    title: "Medida 📐",
    placeholder: "Escriba la medida...",
    dropDownData: countries,
  });

  const [textMarca, MarcaInputForm] = useInputForm({
    title: "Marca ℹ️",
    placeholder: "Escriba la marca...",
    dropDownData: countries,
  });

  const [textDestino, DestinoInputForm] = useInputForm({
    title: "Destino 🛣️",
    placeholder: "Escriba el destino...",
    dropDownData: countries,
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

  function renderHeader() {
    return (
      <View style={styles.header}>
        {/* Text */}
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTextName}>Solicitud de Requerimiento</Text>
          <Text style={styles.headerTextSub}>Fecha: 2020-03-31</Text>
        </View>
        {/* Steps */}

        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text
            style={{
              padding: 10,
              fontSize: SIZES.h1,
            }}
          >
            Paso 2 / 3
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.area}>
      {renderHeader()}
      <FlatList
        data={[]}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
        }
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
    </SafeAreaView>
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