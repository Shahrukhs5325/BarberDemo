import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Topbar from "../../component/TopBar/Topbar";


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}


const Tab = createMaterialTopTabNavigator();


function TransactionScreen(): React.JSX.Element {


    return (
        <>
            <Topbar title="Appointments" isIconHide={true} />
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </>

    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default TransactionScreen;
