import React, { useState } from "react";

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
} from "react-native";

// constants
import { COLORS, SIZES } from "../../constants";


import SelectDropdown from "react-native-select-dropdown";

// ICons
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";




interface IGenericInputForm {
  title: string;
  placeholder: string;
  // list of strings
  keyboardType:  "numeric"  | "default" 

  dropDownData :  string[];
}


export const useInputForm = ({ title, placeholder, dropDownData, keyboardType }: IGenericInputForm) => {

  const [textInput, setTextInput] = useState<any>();


  const GenericInputForm = ( ) => {
    return (
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          margin: 10,
          // shadowColor:"#000",
          // shadowOffset: { height: 100, width: 100 },
          // shadowOpacity: 0.3,
          // shadowRadius: 20
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
                keyboardType={keyboardType}
                placeholder={placeholder}
                maxLength={20}
                style={styles.input}
                onChangeText={setTextInput}
                value={textInput}
              />
            </KeyboardAvoidingView>

          </View>

          <View style={styles.dropDownSection}>
            <SelectDropdown
              data={dropDownData}
              onSelect={(selectedItem, index) => {
                setTextInput(selectedItem);
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              renderDropdownIcon={() => {
                return (
                  <FontAwesome name="chevron-down" color={"#444"} size={18} />
                );
              }}
              
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
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
    fontSize: SIZES.h3,
    // borderWidth: 1,
  },

  dropdown1BtnStyle: {
    width: "50%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "#444",
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
    width: 170,
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

