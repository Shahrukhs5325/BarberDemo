import React from "react";
import { StyleSheet, View } from "react-native";
import Products from "../../component/Product/Products";

function ProductScreen(): React.JSX.Element {

    return (
        <View style={styles.container}>
            <Products />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 14
    },

});

export default ProductScreen;
