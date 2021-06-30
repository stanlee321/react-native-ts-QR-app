import React from 'react';

import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';


import { COLORS, images } from '../../../constants';

interface Props {
    focused: boolean,
    icon: ImageSourcePropType
}

const TabIcon = ( {focused, icon }: Props) => {
    return (
        <View style={styles(focused).view}>
            <Image source={icon}
                    resizeMode="contain"
                    style={styles(focused).image} />
            {
                focused && <View style={styles(focused).imageView}/>
            }
        </View>
    )
} 

const styles = (focused:boolean) => StyleSheet.create({

    view: {
        alignItems:'center',
        justifyContent: 'center',
        height: 80,
        width: 50,
    },

    image: {
        width: 30,
        height: 30,
        tintColor: (focused)? COLORS.darkGreen: COLORS.lightLime,
    },

    imageView: {
        position: 'absolute', 
        left: 0,
        right: 0,
        bottom: 5,
        height: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: COLORS.darkGreen,

    }

})

export default TabIcon;