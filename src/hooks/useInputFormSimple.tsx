import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";

// constants
import { COLORS, images, SIZES } from "../../constants";



// ICons
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";




interface IGenericInputForm {
  title: string;
  placeholder: string;
  // list of strings
  keyboardType: "numeric"  | "default"
}


export const useInputFormSimple = ({ title, placeholder, keyboardType }: IGenericInputForm) => {

  const [textInput, setTextInput] = useState<any>();


  const GenericInputForm = ( ) => {
    return (
      <View
        style={{
          flex:1,
          backgroundColor: "rgba(0, 0, 0, 0.09)",
          margin: 10,
        }}
      >
        <View style={styles.buttomLineOverBoxTitle}>
          <Text style={styles.boxTitle}>{title}</Text>

        </View>
        <View
          style={styles.inputsRow}
        >
          <View
            style={styles.bottomInputTextLine}
          >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}

            >
            <TextInput
              placeholder={placeholder}
              maxLength={20}
              keyboardType={keyboardType}
              style={styles.input}
              onChangeText={setTextInput}
              value={textInput}
            />

            </KeyboardAvoidingView>

          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft:10,
            }}
          >
            <FontAwesome name="pencil" color={"#444"} size={32} />
          </View>
        </View>
      </View>
    );
  }

  return [textInput, GenericInputForm];
};

const styles = StyleSheet.create({


  input: {
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 1,
    marginTop:12,
    fontSize: SIZES.h2,
    // borderWidth: 1,
  },
  boxTitle: {
    marginTop: 10,
    fontSize: SIZES.h3,
    color: COLORS.black,
    fontWeight: "bold",
  },
  inputsRow: {
    flexDirection: "row",
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "space-evenly",
  },
  bottomInputTextLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1.4,
    marginBottom: 30,
    marginRight:40,
    marginLeft:10,
    width: 140,
  },
  dropDownSection: { 
    alignItems: "center",
    justifyContent: "center"
  },
  buttomLineOverBoxTitle:{
    borderBottomColor: "black",
    borderBottomWidth: 0.7,
    marginLeft:15,
    marginRight:15,
    marginBottom: 5,
}
});

