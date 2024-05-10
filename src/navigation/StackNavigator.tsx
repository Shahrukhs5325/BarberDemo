import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RenderTabNavigation } from "./TabNavigator";
import TransactionScreen from "../screen/Transaction/TransactionScreen";
import LoginScreen from "../screen/Auth/LoginScreen";
import ProductScreen from "../screen/Product/ProductScreen";
import CartScreen from "../screen/Cart/CartScreen";
import SalesExecutiveScreen from "../screen/SalesExecutive/SalesExecutiveScreen";
import OrderScreen from "../screen/Transaction/OrderScreen";
import SuccessScreen from "../screen/Success/SuccessScreen";
import OrderDetailsScreen from "../screen/Transaction/OrderDetailsScreen";


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
                    name={"CartScreen"}
                    component={CartScreen}
                />

                <Stack.Screen
                    name={"SalesExecutiveScreen"}
                    component={SalesExecutiveScreen}
                />

                <Stack.Screen
                    name={"SuccessScreen"}
                    component={SuccessScreen}
                />

                <Stack.Screen
                    name={"TransactionScreen"}
                    component={TransactionScreen}
                />

                <Stack.Screen
                    name={"OrderDetailsScreen"}
                    component={OrderDetailsScreen}
                />

                <Stack.Screen
                    name={"ProductScreen"}
                    component={ProductScreen}
                />

                <Stack.Screen
                    name={"OrderScreen"}
                    component={OrderScreen}
                />

            </Stack.Navigator>
        </NavigationContainer >
    );
};


export default StackNavigator;
