import React from 'react';

import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    StyleSheet
} from 'react-native'


import { SIZES, COLORS, FONTS, icons } from '../../../constants';


const TrendingCard = ({ containerStyle, recipeItem, onPress }:any) => {
    return (
        <TouchableOpacity
            style={{
                height: 350,
                width: 250,
                marginTop: SIZES.radius,
                marginRight: 20,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
        
            onPress={onPress}
        >
            {/* Background Image */}
            <Image
                source={recipeItem.image}
                resizeMode="cover"
                style={{
                    width:250,
                    height: 350,
                    borderRadius: SIZES.radius
                }}
            >
            </Image>

            {/* Category */}

            <View
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 15,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    backgroundColor: COLORS.transparentGray,
                    borderRadius: SIZES.radius
                }}
            >

                <Text
                    style={{
                        color: COLORS.white,
                        fontSize: SIZES.h4, lineHeight: 22 
                    }}
                >
                    {recipeItem.category}
                </Text>


            </View>
            
        </TouchableOpacity>
    )
}

export default TrendingCard;