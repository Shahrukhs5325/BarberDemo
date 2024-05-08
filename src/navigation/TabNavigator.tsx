import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
//import AccountIcon from "../../assets/svg/profile-circle.svg";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import HomeScreen from "../screen/Home/HomeScreen";
import TransactionScreen from "../screen/Transaction/TransactionScreen";




function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();


export const RenderTabNavigation = () => {


    return (
        <Tab.Navigator
            initialRouteName="MarketPlace"
            screenOptions={() => ({

                tabBarStyle: {
                    paddingBottom: 4,
                    paddingTop: 4,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    // shadowColor: '#54336E24',
                    // boxShadow: "0px -4px 12px 0px #54336E24",
                    // shadowOpacity: 4,
                    height: 52,

                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 5.62,
                    elevation: 7
                },
                headerShown: false,
                // tabBarActiveTintColor: palette.black,
                // tabBarInactiveTintColor: palette.gray,

            })}

        >

            <Tab.Screen
                name={"HomeScreen"}
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home,",
                    //  tabBarLabelStyle: { fontWeight: "600", fontFamily: FONT.bold },
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={styles.img}
                            source={require("../assets/home.png")}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={"TransactionScreen"}
                component={TransactionScreen}
                options={{
                    tabBarLabel: "Appointments",
                    // tabBarLabelStyle: { fontWeight: "600", fontFamily: FONT.bold },
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={styles.img}
                            source={require("../assets/calendar.png")}
                        />
                    ),
                }}
            />


        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({

    img: {
        width: 24,
        height: 24
    },

});