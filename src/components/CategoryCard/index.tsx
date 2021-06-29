import React from 'react';

import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

// Constants
import { COLORS, FONTS, SIZES } from '../../../constants';

const CategoryCard = ({containerStyle, categoryItem, onPress}:any) => {
    return (
        <TouchableOpacity
            style={styles(containerStyle).touchable}
            onPress={onPress}
        >
            {/* IMAGE */}
            <Image source={categoryItem.image}
                    resizeMode="cover"
                    style={styles(containerStyle).image} />

            {/* Details */}
            <View style={styles(containerStyle).details}>
                {/* Name */}
                <Text style={styles(containerStyle).textName}>{categoryItem.name}</Text>
                {/* Serving */}
                <Text style={styles(containerStyle).textServing} > {categoryItem.duration} | {categoryItem.serving} Serving </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = (containerStyle:any) => StyleSheet.create({
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: SIZES.radius
    },
    details:{
        width: "65%",
        paddingHorizontal: 20,
    },
    textName: {
        flex:1,// seprate space between
        fontSize: SIZES.h2,
        lineHeight: 30
    },
    textServing:{
        color: COLORS.gray,
        fontSize: SIZES.body4, lineHeight: 22 
    }

})

export default CategoryCard;