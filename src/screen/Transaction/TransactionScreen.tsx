import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Topbar from "../../component/TopBar/Topbar";
import OrderScreen from "./OrderScreen";



const Tab = createMaterialTopTabNavigator();


function TransactionScreen(): React.JSX.Element {


    return (
        <>
            <Topbar title="Appointments" isIconHide={true} />
            <Tab.Navigator>
                <Tab.Screen name="Upcoming" initialParams={{ type: "pending" }} component={OrderScreen} />
                <Tab.Screen name="Completed" initialParams={{ type: "accepted" }} component={OrderScreen} />
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
        color:'#000'
    },
    highlight: {
        fontWeight: '700',
    },
});

export default TransactionScreen;
