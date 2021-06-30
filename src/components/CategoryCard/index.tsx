import React from 'react';

import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

// Constants
import { COLORS, FONTS, SIZES } from '../../../constants';

const CategoryCard = ({containerStyle, categoryItem, onPress}:any) => {

    const itemStatus = (categoryItem:any)=>{
        if (categoryItem.isBookmark){
            return <View style={{
                backgroundColor: COLORS.darkGreen,
                width: 60,
                marginLeft:15,
                height:25,
                borderRadius: 60,
                alignItems:'center',
                justifyContent: 'center'
                }}>
                <Text style={{ color: COLORS.white}}>
                    Ingreso
                </Text>
            </View>
        }else {
            return <View style={{
                backgroundColor: "rgba(255,0,0,0.2)",
                width: 60,
                height:25,
                marginLeft:15,
                justifyContent: 'center',
                borderRadius: 60,
                alignItems:'center'
                }}>
            <Text style={{ color: COLORS.black,}}>
                Sacó
            </Text>
        </View>
        }
    }
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
                    <Text style={styles(containerStyle).textServing} > {categoryItem.duration} |</Text> 
                <View style={{flex:1 , flexDirection:'row'}}>
                    <Text>
                        {categoryItem.serving}
                    </Text>
                    {itemStatus(categoryItem)}
                </View>
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