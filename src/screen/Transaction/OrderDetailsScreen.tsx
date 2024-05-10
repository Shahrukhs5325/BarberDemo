import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { getCustomerOrderDetails } from "../../api/Order/orderApi";
import EmptyData from "../../component/Empty/EmptyData";
import Topbar from "../../component/TopBar/Topbar";
import ProductItem from "../../component/Product/ProductItem";






interface Props {
    route: any;
}

const OrderDetailsScreen: React.FC<Props> = ({ route }) => {
    const { item } = route.params;


    const [orderData, setOrderData] = React.useState([]);

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

    const totaCalculate = () => {
        let grandTotal = 0;
        orderData.length > 0 && orderData.map((item) => {
            grandTotal = item.sellingPrice + grandTotal
        })
        return grandTotal;
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Topbar title="Appointment Details" isIconHide={true} />
                <View style={{ marginHorizontal: 14, gap: 14 }}>
                <Text style={styles.headTxt} numberOfLines={1}>Details:</Text>
                    <View>
                        <Text style={styles.txtName} numberOfLines={1}>Name : {item.name}</Text>
                        <Text style={styles.txtName} numberOfLines={1}>Hair Specialist: {item.salesExecutiveName}</Text>
                        <Text style={styles.txtName} numberOfLines={1}>Appointment Date: {item.appointmentDateTime}</Text>
                        <Text style={styles.txtName} numberOfLines={1}>Appointment Time: {item.appointmentSlot}</Text>
                        <Text style={styles.txtName} numberOfLines={1}>Status: {item.status === "In-Progress" ? "Completed" : item.status}</Text>
                        <Text style={styles.txtName} numberOfLines={1}>Total Amount: SAR {totaCalculate()}</Text>

                    </View>
                    <Text style={styles.headTxt} numberOfLines={1}>Services:</Text>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        data={orderData}
                        renderItem={({ item }) =>
                            <ProductItem
                                item={item}
                                isHide={true}
                            />
                        }
                        // refreshControl={
                        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        // }
                        ListEmptyComponent={EmptyData}
                        style={styles.list}
                        contentContainerStyle={styles.listContents}
                    />
                </View>
            </View>

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {

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
    txtName: {
        fontSize: 14,
        flexWrap: "wrap",
        // fontWeight: "600",
        // height: 32
        color: '#000'
    },
    headTxt: {
        fontSize: 14,
        flexWrap: "wrap",
        fontWeight: "700",
        // height: 32
        color: '#000'
    },


});

export default OrderDetailsScreen;
