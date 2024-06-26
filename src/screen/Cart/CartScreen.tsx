import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Products from "../../component/Product/Products";
import { UserContext } from "../../context/user/UserContext";
import { palette } from "../../theme/palette";
import Topbar from "../../component/TopBar/Topbar";
import ProductItem from "../../component/Product/ProductItem";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import EmptyData from "../../component/Empty/EmptyData";

type Props = {
    route: any
};

const CartScreen: React.FC<Props> = ({ }) => {
    const userContext = React.useContext(UserContext);
    const navigation = useNavigation<any>();


    const totaCalculate = () => {
        let grandTotal = 0;
        userContext.cart.length > 0 && userContext.cart.map((item) => {
            grandTotal = item.sellingPrice + grandTotal
        })
        return grandTotal;
    }

    return (
        <>
            <Topbar title="Cart" isIconHide={true} />

            {userContext.cart && userContext.cart.length > 0 ?
                <View style={styles.container}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        data={userContext.cart}
                        renderItem={({ item }) =>
                            <ProductItem
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
                    <View style={{ justifyContent: 'space-between', flexDirection: "row", marginVertical: 6 }}>
                        <Text style={styles.totTxt}>Total: </Text>
                        <Text style={styles.totTxt}>SAR {totaCalculate()} </Text>

                    </View>
                    <Button mode="contained" style={styles.btn} textColor="#FFF"
                        onPress={() => navigation.navigate('SalesExecutiveScreen')}>
                        Next
                    </Button>
                </View> :
                <View style={styles.containerErr}>
                    <Text style={styles.emtCartTxt}>Empty Cart</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', { categoryId: null })}>
                        <Text style={styles.shopTxt}>Book Services</Text>
                    </TouchableOpacity>
                </View>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 14
    },
    containerErr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    emtCartTxt: {
        fontSize: 16,
        fontWeight: "700",
        color: palette.black
    },
    totTxt: {

        fontSize: 16,
        fontWeight: "500",
        color: palette.black
    },
    shopTxt: {
        fontSize: 16,
        color: palette.primaryLight,
        textDecorationLine: "underline"
    },
    list: {
        //   paddingTop: 15,
        width: '100%',
    },
    listContents: {
        //alignItems: 'center',
        //  width: '100%',
        paddingBottom: 150,
    },
    btn: {
        width: '100%',
        backgroundColor: palette.primaryDark,
        borderRadius: 6,
        marginVertical: 10
    },


});

export default CartScreen;
