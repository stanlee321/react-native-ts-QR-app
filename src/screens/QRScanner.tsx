import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity, Image } from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";

// Constats
import { SIZES, COLORS,images } from "../../constants";

import ModalPopup from '../components/ModalPopup';

// Hooks
import useInput from "../hooks/useInput";

interface IBarCodeScanData {
  type: string;
  data: string;
}

const QRScanner = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const [scannerData, setScannerData] = useState<IBarCodeScanData>(null);

  const [showModal, setShowModal ] = useState(false);


  const [inputItemText, inputItemComponent] = useInput({
    type: "default",
    title: "Nombre del Item",
    boxSize: 350,
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

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: IBarCodeScanData) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    setScannerData({ type, data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function renderHeader() {
    return (
      <View style={styles.header}>
        {/* Text */}
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTextName}>Registro por QR Scanner </Text>
          <Text style={styles.headerTextSub}>
            Aqui puedes registrar items por codigo QR
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>

        {/* Modal */}
        <ModalPopup visible={showModal}>
          <View style={{
            alignItems:'center'
          }}>
            <TouchableOpacity style={styles.headerModal} onPress={()=>setShowModal(false)}>
              <Image source={images.close} style ={{height:30, width: 30}} ></Image>
            </TouchableOpacity>
            
            <View style={{alignItems:'center'}}>
              <Image 
                source={images.ok}
                style={{height:150, width:150, marginVertical:10}}
              />
            </View>

            <Text style={{marginVertical: 30, fontSize:20, textAlign:'center'}} > Datos enviados Correctamente!!!</Text>

          </View>

        </ModalPopup>

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
        <View style={{ flex: 1, alignItems: "center", paddingBottom: 20 }}>
          <View
            style={{
              height: 400,
              width: 300,
              marginTop: SIZES.radius,
              borderRadius: SIZES.radius,
            }}
          >
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          </View>
        </View>
        {/* Try again button */}
        <View>
          {scanned && (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                title={"Tap para scanear de nuevo."}
                onPress={() => setScanned(false)}
              />
            </View>
          )}
        </View>
        {/* Data  */}

        <View
          style={{
            paddingTop: 20,
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
          >
            <Text
              style={{ fontWeight: "bold", paddingBottom: 10, fontSize: 15 }}
            >
              Type:
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 120,
                height: 20,
                borderTopColor: "transparent",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {scanned ? scannerData.type : ""}
              </Text>
            </View>
          </View>

          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
          >
            <Text style={{ paddingBottom: 10, fontWeight: "bold" }}>Data:</Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 180,
                height: 20,
                borderTopColor: "transparent",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {scanned ? scannerData.data : ""}
              </Text>
            </View>
          </View>
        </View>

        {/* Inputs */}
        <View style={{ paddingTop: 20 }}>
          {inputItemComponent()}
          {inputCommentComponent()}
        </View>

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
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
  headerModal : {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});

export default QRScanner;
