import React from "react";
import {  StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";


// Views
import { Home, Settings, QRScanner, Recipe, Form } from "../screens"

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
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon = {icons.qr} />
                }}
            />
            <Tab.Screen
                name="Form"
                component={Form}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon = {icons.cam} />
                }}
            />
            {/* <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon = {icons.settings} />
                }}
            /> */}
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
        height: 80
    }
})

export default Tabs;

