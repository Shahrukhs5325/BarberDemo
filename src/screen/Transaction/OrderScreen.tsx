import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import { allCustomerOrdersByCustomerId } from "../../api/Order/orderApi";
import { UserContext } from "../../context/user/UserContext";
import OrderItem from "../../component/Order/OrderItem";
import EmptyData from "../../component/Empty/EmptyData";




const Tab = createMaterialTopTabNavigator();


interface Props {
    route: any;
}

const OrderScreen: React.FC<Props> = ({ route }) => {
    const { type } = route.params;
    const userContext = React.useContext(UserContext);

    const [orderData, setOrderData] = React.useState(null);

    React.useEffect(() => {
        fetchCustomerOrders();
    }, [type]);

    const fetchCustomerOrders = async () => {
        try {
            const res = await allCustomerOrdersByCustomerId(userContext.customerId, type === "pending" ? "pending" : "In-Progress");

            setOrderData(res?.data.orderList);
        } catch (err) {
            console.log('error fetchCustomerOrders : ', err);
        }
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={orderData}
                    renderItem={({ item }) =>
                        <OrderItem
                            item={item}
                        />
                    }
                    // refreshControl={
                    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    // }
                    ListEmptyComponent={EmptyData}
                    style={styles.list}
                    contentContainerStyle={styles.listContents}
                />

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

export default OrderScreen;
