import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import { allCustomerOrdersByCustomerId, getCustomerOrderDetails } from "../../api/Order/orderApi";
import { UserContext } from "../../context/user/UserContext";
import OrderItem from "../../component/Order/OrderItem";
import EmptyData from "../../component/Empty/EmptyData";
import { useIsFocused } from "@react-navigation/native";






interface Props {
    route: any;
}

const OrderDetailsScreen: React.FC<Props> = ({ route }) => {
    const { item } = route.params;


    const [orderData, setOrderData] = React.useState(null);

    React.useEffect(() => {
        fetchCustomerOrders();
    }, []);


    const fetchCustomerOrders = async () => {
        try {
            const res = await getCustomerOrderDetails(item);
            console.log(res.data);

            setOrderData(res?.data);
        } catch (err) {
            console.log('error order details : ', err);
        }
    }



    return (
        <>
            <View style={styles.container}>

            </View>

        </>

    );
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 14
    },
    fontsty: {
        fontSize: 18,
        fontWeight: 700,
        flexWrap: 'wrap',
        color: '#000'
    },
    list: {
        //   paddingTop: 15,
        width: '100%',
    },
    listContents: {
        //alignItems: 'center',
        //  width: '100%',
        paddingBottom: 50,
    },


});

export default OrderDetailsScreen;
