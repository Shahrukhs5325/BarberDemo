import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { RenderTabNavigation } from "./TabNavigator";
import HomeScreen from "../screen/Home/HomeScreen";
import TransactionScreen from "../screen/Transaction/TransactionScreen";
import LoginScreen from "../screen/Auth/LoginScreen";
import ProductScreen from "../screen/Product/ProductScreen";


const Stack = createStackNavigator();


const StackNavigator = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#FFF'
        },
    };


    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen
                    name={"LoginScreen"}
                    component={LoginScreen}
                />

                <Stack.Screen
                    name={"HomeScreen"}
                    component={RenderTabNavigation}
                />

                <Stack.Screen
                    name={"TransactionScreen"}
                    component={TransactionScreen}
                />

                <Stack.Screen
                    name={"ProductScreen"}
                    component={ProductScreen}
                />

            </Stack.Navigator>
        </NavigationContainer >
    );
};


export default StackNavigator;
