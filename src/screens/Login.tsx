import React from "react";
import { useFonts } from "expo-font";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { images, COLORS, SIZES, FONTS } from "../../constants";

// Components
import CustomButton from "../components/CustomButton";

const Login = ({ navigation }: any) => {

  function renderHeader() {
    return (
      <View style={styles.header}>
        <ImageBackground
          source={images.loginBackground}
          style={styles.imageStyle}
          resizeMode="cover"
        >
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            colors={[COLORS.transparent, COLORS.black]}
            style={styles.linearGradient}
          >
            <Text style={styles.titleText}>
              Cooking a Delicius Food Exchange
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetails() {
    return (
        <View style={{flex:1, paddingHorizontal: SIZES.padding}}>
            {/* Description */}
            <Text style={styles.textDescription}>
              Discover more than 200 food recipes in you hands and cooking it
              eastly!
            </Text>

             {/* Buttons */}

            <View style={styles.buttons}>
            {/* Login */}
            <CustomButton
              buttonText="Login"
              buttonContainerStyle={styles.login}
              colors={[COLORS.darkGreen, COLORS.lime]}
              onPress={() => console.log("Goint to Home")}
            />

            {/* Sign up */}
            <CustomButton
              buttonText="Sign Up"
              buttonContainerStyle={styles.signUp}
              colors={[]}
              onPress={() => console.log("Goint to Home")}
            />
          </View>
        </View>
    )
  }

  return (
    <View style = {styles.wrapper} >
      <StatusBar barStyle={"light-content"}  backgroundColor="#0e1027"/>
      {/* Header */}
      { renderHeader() }

      {/* Details */}
      { renderDetails()}
    </View>
  );
};

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: COLORS.black
  },
  header: {
    height: SIZES.height > 700 ? "60%" : "55%",
  },
  imageStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  linearGradient: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: SIZES.padding,
  },
  titleText: {
    width: "80%",
    color: COLORS.white,
    // fontFamily: "RobotoBlack",
    fontSize: SIZES.largeTitle,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    //   ...FONTS.largeTitle,
    lineHeight: 45,
  },
  textDescription: {
    marginTop: SIZES.radius,
    width: "70%",
    color: COLORS.gray,
    // ...FONTS.body3,
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  buttons: {
    // backgroundColor: "rgba(248, 245, 245, 0.8)",
    flex: 1,
    justifyContent: "center",
  },

  login: {
    paddingVertical: 18,
    borderRadius: 20,
  },
  signUp: {
    marginTop: SIZES.radius,
    paddingVertical: 25,
    borderRadius: 20,
    borderColor: COLORS.darkLime,
    borderWidth: 1,
  },
});

export default Login;
