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
import { SIZES } from "../../constants";

const useInput = ({
  type /*...*/,
  title,
  boxSize,
  boxHeight,
  fontSize,
  borderRadius,
}: any) => {
  const [text, setText] = useState<any>();


  function handleInput(text){
    setText(text);
  
  }
  const inputComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          marginLeft: 30,
          paddingBottom: 10,
        }}
      >
        <View>
          <Text
            style={{
              marginLeft: 15,
              marginBottom: 1,
              fontSize: SIZES.h4,
              lineHeight: 22,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={
              styles(boxSize, boxHeight, fontSize, borderRadius)
                .writeTaskWrapper
            }
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
            >
              <TextInput
                style={styles(boxSize, boxHeight, fontSize, borderRadius).input}
                placeholder={"Write a task"}
                value={text}
                keyboardType={type}
                onChangeText={handleInput}

              />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  };
  return [text, inputComponent];
};

const styles = (
  boxSize: any,
  boxHeight: any,
  fontSize: any,
  borderRadius: any
) =>
  StyleSheet.create({
    writeTaskWrapper: {},
    input: {
      height: boxHeight,
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: "#FFF",
      borderRadius: borderRadius,
      borderColor: "#C0C0C0",
      borderWidth: 1,
      fontSize: fontSize,
      width: boxSize,
      paddingLeft: 15,
    },
  });

export default useInput;
