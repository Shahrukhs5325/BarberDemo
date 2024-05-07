import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { palette } from "../../theme/palette";



const ProductItem: React.FC<any> = ({ item }) => {

    const goProdScreenHandler = () => {

    }

    return (
        <>
            <TouchableOpacity onPress={() => goProdScreenHandler()}>
                <View style={styles.container}>
                    <View style={styles.imgBck}>
                        {item?.imageUrl ?
                            <Image
                                source={{ uri: item?.imageUrl }}
                                alt={item?.categoryName}
                                style={styles.img}
                            /> : null}
                        <View>
                            <Text style={styles.txtName} numberOfLines={2}>{item.productName}</Text>
                            <Text style={styles.txtUnit} numberOfLines={1}>category</Text>
                            <Text style={styles.txtUnit} numberOfLines={1}>{item.sellingPrice + "/" + item.unitName}</Text>

                        </View>
                    </View>


                </View>
            </TouchableOpacity>
        </ >
    );
};

const styles = StyleSheet.create({
    container: {
        height: 84,
        borderColor: palette.grayLight,
        shadowOpacity: 10,
        borderWidth: 1,
        marginVertical: 6,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8
    },
    txtName: {
        fontSize: 14,
        flexWrap: "wrap",
        fontWeight: "600",
        height: 32
    },
    txtUnit: {
        fontSize: 14,
        flexWrap: "wrap",

    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    imgBck: {
        width: '76%',
        flexDirection: 'row',
        gap: 10,
        //   justifyContent: 'center',
        //  alignItems: 'center',
    },

});


export default ProductItem;
