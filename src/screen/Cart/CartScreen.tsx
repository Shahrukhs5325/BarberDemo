import React from "react";
import { StyleSheet, View } from "react-native";
import Products from "../../component/Product/Products";

type Props = {
    route: any
};

const CartScreen: React.FC<Props> = ({  }) => {



    return (
        <View style={styles.container}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 14
    },

});

export default CartScreen;
