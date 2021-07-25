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

interface IGenericDropDownProps {
  dropDownData: string[];
  title: string;
}

export const useDropDown = ({ dropDownData, title }: IGenericDropDownProps) => {
  const [valueDropDown, setDropDownValue] = useState<any>();

  const GenericDropDown = () => {
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
        <View style={styles.dropDownSection}>
          <SelectDropdown
            data={dropDownData}
            onSelect={(selectedItem, index) => {
              setDropDownValue(selectedItem);
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected}
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
      </View>
    );
  };
  return [valueDropDown, GenericDropDown];
};

const styles = StyleSheet.create({
  buttomLineOverBoxTitle: {
    borderBottomColor: "black",
    borderBottomWidth: 0.7,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
  },
  boxTitle: {
    marginTop: 10,
    fontSize: SIZES.h3,
    color: COLORS.black,
    fontWeight: "bold",
  },
  dropdown1BtnStyle: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: 120,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.8,
    borderColor: "#444",
  },

  dropDownSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
