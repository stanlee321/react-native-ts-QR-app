import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

import LenearGradient, { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES } from "../../../constants";

interface IButtonProps {
  buttonText: string,
  buttonContainerStyle: any,
  colors: string[],
  onPress: any 
}

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors,
  onPress,
}: IButtonProps) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient 
          start={[0,0]}
          end ={[1,0]}
          colors = {colors}
          style={{...buttonContainerStyle}}
          >

          <Text
            style={{
              textAlign: "center",
              color: COLORS.white,
              // ...FONTS.h2,
              fontSize: SIZES.h2, lineHeight: 30 
            }}
          >
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style ={{...buttonContainerStyle}}>
        <Text
          style={{
            textAlign: "center",
            color: "red",
            // ...FONTS.h2,
            fontSize: SIZES.h2, lineHeight: 30 

          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};
export default CustomButton;
