import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, FlatList, Image,  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


// Constants
import { COLORS, dummyDataTools, SIZES, FONTS, images, icons } from '../../constants' 

// Components
import CategoryCard from '../components/CategoryCard';
import TrendingCard from '../components/TrendingCard';

const dummyData = dummyDataTools
// dummyDataTools


const Home = ({navigation}:any) => {

    function renderHeader(){
        return (
            <View style= {styles.header}>

                {/* Text */}
                <View style={ { flex:1 } }>
                    <Text style={styles.headerTextName}
                    >
                        Hola Fernando,
                    </Text>
                    <Text style={styles.headerTextSub}>
                        Estos son los items del dia de hoy
                    </Text>
                </View>
                {/* Image */}
                <TouchableOpacity
                    onPress= {()=> console.log("PROFILE")}
                >
                    <Image
                        source= {images.UserProfile1}
                        style={styles.headerProfileImage}
                    />

                </TouchableOpacity>

            </View>
        )
    }

    function renderSearchBar(){
        return (
            <View
                style={{
                    flexDirection:'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image 
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                />
                <TextInput 
                    style={{
                        marginLeft: SIZES.radius,
                        fontSize: SIZES.body3, lineHeight: 22
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search..."
                />

            </View>
        )
    }

    function renderSeeRecipesCard(){
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGreen
            }}
            >
                {/* Image */}
                <View 
                    style={{
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source = {images.recipe}
                        style={{
                            width: 80,
                            height: 80
                        }}
                    />
                </View>
                {/* Text */}

                <View
                    style={{
                        flex:1,
                        paddingVertical: SIZES.radius,
                    }}
                >
                    <Text style={{
                        width: "80%",
                        fontSize: SIZES.body4, lineHeight: 22
                    }}>
                        Tienes todas las herramientas del mundo mundial que aun no probaste.
                    </Text>
                    <TouchableOpacity 
                        style={{
                            marginTop: 10
                        }}
                        onPress={()=>console.log("SEE MORE ...")}
                    >
                    <Text
                        style={{
                            color:COLORS.darkGreen,
                            textDecorationLine: 'underline',
                            fontSize: SIZES.h4, lineHeight: 22 
                        }}
                    >  

                        Ver mas...

                    </Text>

                    </TouchableOpacity>

                </View>

            </View>
        )
    }

    function renderTrendingSecction() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        fontSize: SIZES.h2, lineHeight: 30 
                    }}
                >
                    Trending Recipes
                </Text>
                {/* List */}
                
                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item=>`${item.id}`}
                    renderItem={({item, index}) => {

                        return (
                            <TrendingCard

                            recipeItem={item}
                            
                            />
                        )
                    }}
                />

            </View>
        )
    }
    return ( 
        <SafeAreaView style={styles.area}>
            <FlatList data={dummyData.categories}
                        keyExtractor={item => `${item.id}`}
                        keyboardDismissMode="on-drag"
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent= {
                            <View>
                                {/* Header */}
                                { renderHeader() }

                                {/* Search Bar */}
                                { renderSearchBar()}

                                {/* See Recipe Card */}

                                { /* { renderSeeRecipesCard()} */  }

                                { /* Trending Section */ }

                                {/* { renderTrendingSecction() } */}

                                {/* Category Header */}

                            </View>
                        }
                        renderItem = { ({item}) => {return(
                            <CategoryCard
                                containerStyle={{
                                    marginHorizontal: SIZES.padding
                                }}
                             categoryItem={item}
                             onPress = {() => navigation.navigate("Recipe", { recipe: item})}
                             />
                        )}}

                        ListFooterComponent={
                            <View style={styles.footer}>

                            </View>
                        }
                        
                        />
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    area: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    footer: {
        marginBottom: 100,
    },
    // Header
    header : {
        flexDirection:'row',
        marginHorizontal: SIZES.padding,
        alignItems: 'center',
        height: 80,
    },
    headerTextName: {
        color: COLORS.darkGreen,
        fontSize: SIZES.h2, lineHeight: 30,
        fontWeight: "bold",
    },
    headerTextSub: {
        marginTop: 3,
        color: COLORS.gray,
        fontSize: SIZES.body3, lineHeight: 22 
    },
    headerProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})



export default Home;