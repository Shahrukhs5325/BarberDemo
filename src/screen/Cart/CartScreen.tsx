import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Products from "../../component/Product/Products";
import { UserContext } from "../../context/user/UserContext";
import { palette } from "../../theme/palette";
import Topbar from "../../component/TopBar/Topbar";
import ProductItem from "../../component/Product/ProductItem";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

type Props = {
    route: any
};

const CartScreen: React.FC<Props> = ({ }) => {
    const userContext = React.useContext(UserContext);
    const navigation = useNavigation<any>();


    return (
        <>
            <Topbar title="Cart" isIconHide={true} />

            {userContext.cart.length > 0 ?
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
                        // ListEmptyComponent={EmptyDataPromo}
                        style={styles.list}
                        contentContainerStyle={styles.listContents}
                    />

                    <Button mode="contained" style={styles.btn}
                        onPress={() => navigation.navigate('SalesExecutiveScreen')}>
                        Next
                    </Button>
                </View> :
                <View style={styles.containerErr}>
                    <Text style={styles.emtCartTxt}>Empty cart</Text>
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
        alignItems: 'center'
    },
    emtCartTxt: {
        fontSize: 16,
        fontWeight: "700",
        color: palette.black
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
