import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated
} from "react-native";

// Component
import Header from "../components/Header";
import Signaturefrom from "../components/Signature";
import ModalPopup from "../components/ModalPopup";

// Constants
import { COLORS, SIZES, images } from "../../constants";

// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Custom Hooks
import { useInputForm } from "../hooks/useInputForm";
import { useInputFormSimple } from "../hooks/useInputFormSimple";
import { useDropDown } from "../hooks/useDropDown";



const deps = ["LP", "CBBA", "OR", "SC", "PD", "TJ", "SC", "PT"];

const FormThirdScreen = ({ navigation }: any) => {
  const [textCarnet, CarnetInputForm] = useInputFormSimple({
    title: "CI / NIT",
    placeholder: "1234856",
    keyboardType: "numeric",
  });

  const [textSolicitante, SolicitanteInputForm] = useInputFormSimple({
    title: "Solicitante",
    placeholder: "Nombre completo",
    keyboardType: "default",
  });

  const [dropDownValue, DepsDropDown] = useDropDown({
    dropDownData: deps,
    title: "Dep.",
  });


  const [showModal, setShowModal] = React.useState(false);

  function renderModal(){
    return(
      <ModalPopup visible={showModal}>
      <View
        style={{
          alignItems: "center",
        }} >
        <TouchableOpacity
          style={styles.headerModal}
          onPress={() => {
            

            setTimeout(
              () => {
                setShowModal(false)
                navigation.navigate("Home")
              },
              1000
          );

          }}
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
    )
  }

  return (
    <View style={styles.area}>
      {renderModal()}

      <Animated.FlatList
        data={[]}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={{ flex: 1, margin:20, flexDirection: "column", alignItems:"center", justifyContent: "center"}}>
              <View
                style={{
                  width: 300,
                  height: 300,
                }}
              >
                <Signaturefrom text="hello" onOK={(event) => event} />
              </View>
            </View>

            <SolicitanteInputForm />

            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* <Image
            source={images.newLoginBackground}
            style={StyleSheet.absoluteFillObject}
          /> */}
              <CarnetInputForm />
              <DepsDropDown />
            </View>
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
        onPress={() => {
          // Submit Data Show modal
          // Go back to Home
          //navigation.navigate("FormThirdScreen", { recipe: ""} )
          setShowModal(true)
        }}
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
  headerModal: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  addText: { fontSize: 30 },
});


export default FormThirdScreen;
