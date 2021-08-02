import React from "react";
import { View, Text, StyleSheet, Animated, Image, TouchableOpacity } from "react-native";



import {
    COLORS,
    SIZES,
    icons
} from "../../../constants";

interface IHeaderProps {
    title: string;
    datetime: string;
    stateTitle: string;
    navigation: any

}


const HEADER_HEIGHT = 360;

const Header = ({title, datetime, stateTitle, navigation}: IHeaderProps) => {


  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View 
        style={{
            position: 'absolute',
            top:0,
            left: 0,
            right: 0,
            height: 90,
            flexDirection:'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding,
            paddingBottom: 10
        }}
    >
        {/* Screen Overlay */}

        <Animated.View 
            style={
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: COLORS.black,
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                        outputRange: [0, 1]
                    }),
                }
            }
        />

        {/* Header Bar Title */}
        <Animated.View 
            style={{
                position: 'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingBottom: 10,
                opacity: scrollY.interpolate({

                    inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT- 50],
                    outputRange: [0,1]
                }),
                transform: [
                    {
                        translateY: scrollY.interpolate({
                            inputRange: [ HEADER_HEIGHT - 100, HEADER_HEIGHT- 50],
                            outputRange: [ 50,0],
                            extrapolate: 'clamp'
                        })
                    }
                ]

            }}
        >
            <Text
                style={{
                    color: COLORS.lightGray2, fontSize: SIZES.body4, lineHeight: 22
                }}
            >
                Encargado/Responsable:
            </Text>
            <Text style={{color: COLORS.white2,  fontSize: SIZES.h3, lineHeight: 22 }}>
                {"this is some text"}
            </Text>
        </Animated.View>

        {/* Back Button */}
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 35,
                width: 35,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: COLORS.lightGray,
                backgroundColor: COLORS.transparentBlack5
            }}
            onPress={()=>navigation.goBack()}
        >
            <Image 
                source={icons.back}
                style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.lightGray
                }}
            />

            
        </TouchableOpacity>
        {/* Bookmark */}
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 35,
                width: 35,
            }}
        >
            {/* <Image
                source={selectedRecipe?.isBookmark? icons.bookmarkFilled: icons.bookmark}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.darkGreen
                }}
            >

            </Image> */}

        </TouchableOpacity>

    </View>
)
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
