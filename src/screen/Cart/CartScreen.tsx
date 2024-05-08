import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Products from "../../component/Product/Products";
import { UserContext } from "../../context/user/UserContext";
import { palette } from "../../theme/palette";
import Topbar from "../../component/TopBar/Topbar";

type Props = {
    route: any
};

const CartScreen: React.FC<Props> = ({ }) => {
    const userContext = React.useContext(UserContext);

    console.log(userContext.cart);

    return (
        <>
            <Topbar title="Cart" />

            {userContext.cart ?
                <View style={styles.container}>

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
    }


});

export default CartScreen;
