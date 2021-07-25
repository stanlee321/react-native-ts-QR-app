import React from "react";
import { View, Text, StyleSheet } from "react-native";



import {
    COLORS,
    SIZES,
} from "../../../constants";

interface IHeaderProps {
    title: string;
    datetime: string;
    stateTitle: string;

}

const Header = ({title, datetime, stateTitle}: IHeaderProps) => {
  return (
    <View style={styles.header}>
      {/* Text */}
      <View style={{ flex: 1 }}>
        <Text style={styles.headerTextName}>{title}</Text>
        <Text style={styles.headerTextSub}>{datetime}</Text>
      </View>

      {/* Steps */}
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text
          style={{
            padding: 10,
            fontSize: SIZES.h1,
          }}
        >
          {stateTitle}
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
      // Header
  header: {
    marginTop: 15,
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
})

export default Header;
