import React from "react";
import {  StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Views
import { Home, Settings, QRScanner, Recipe } from "../screens"

// Constants
import { icons } from "../../constants";

// Components
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions = {{showLabel: false, style: styles.tabBar } } >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon = {icons.home} />
                }}
            />
            <Tab.Screen
                name="QRScanner"
                component={QRScanner}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon = {icons.search} />
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Recipe}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon = {icons.bookmark} />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon = {icons.settings} />
                }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: 'white',
        borderTopColor: 'transparent',
        height: 100
    }
})

export default Tabs;

