import React from "react";
import { StyleSheet, View } from "react-native";
import Products from "../../component/Product/Products";

type Props = {
    route: any
};

const ProductScreen: React.FC<Props> = ({ route }) => {

    const { categoryId } = route.params;

    console.log("categoryId", categoryId);

    return (
        <View style={styles.container}>
            <Products categoryId={categoryId} />
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
